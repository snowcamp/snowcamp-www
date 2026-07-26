// Cœur de réconciliation des sponsors, PUR (aucune I/O : ni réseau, ni disque).
//
// Entrées :
//   - apiSponsors      : réponse confhouse (name, sponsorTypeName, logo, registrationDate…)
//   - previousPresence : contenu de current-sponsors.yml du run précédent ({ id, type, meetgreet? })
//   - catalog          : entrées de sponsors.yaml ({ id, name, logo, link, source_url?, source_sha1? })
//   - editionYear      : année utilisée pour forger l'id d'un sponsor jamais vu
//
// Sortie : un « plan » décrivant l'état cible + ce qu'il reste à faire côté I/O.
// L'appelant (CLI) se charge des téléchargements, du sha1, de la conversion avif et de l'écriture.

/** Niveaux de sponsoring de l'API vers les types internes. */
const TYPE_BY_API_NAME = {
  Flocon: "flocon",
  Etoile: "etoile",
  Chamois: "chamois",
};

const MEETGREET_API_NAME = "Meet&Greet";

/** Normalise un nom pour l'appariement : sans accents, minuscules, espaces compactés. */
export const normalizeName = (name) =>
  name
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, " ");

/** Slug alphanumérique tiret-séparé à partir d'un nom. */
export const slugify = (name) =>
  normalizeName(name)
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

/** Id forgé pour un sponsor jamais vu : slug + année d'édition (retouché à la main ensuite). */
export const computeId = (name, editionYear) =>
  `${slugify(name)}${editionYear}`;

/**
 * Réconcilie la réponse API avec l'état précédent.
 * @returns {{
 *   presence: Array<{id: string, type: string, meetgreet?: true}>,
 *   downloads: Array<{id: string, name: string, sourceUrl: string, isNew: boolean}>,
 *   additions: Array<{id: string, name: string, sourceUrl: string}>,
 *   removals: string[],
 *   problems: Array<{kind: string, [k: string]: unknown}>,
 * }}
 */
export const reconcile = ({
  apiSponsors,
  previousPresence,
  catalog,
  editionYear,
}) => {
  const catalogById = new Map(catalog.map((e) => [e.id, e]));
  const previousIds = new Set(previousPresence.map((p) => p.id));
  const problems = [];

  // Gel des id : nom normalisé -> id, reconstruit depuis l'état précédent via le catalogue.
  const frozenIdByName = new Map();
  for (const p of previousPresence) {
    const entry = catalogById.get(p.id);
    if (entry) frozenIdByName.set(normalizeName(entry.name), p.id);
  }

  // Sépare lignes de niveau et lignes Meet&Greet ; écarte les types inconnus.
  const levelRows = [];
  const meetgreetRows = [];
  for (const s of apiSponsors) {
    if (s.sponsorTypeName === MEETGREET_API_NAME) {
      meetgreetRows.push(s);
      continue;
    }
    const type = TYPE_BY_API_NAME[s.sponsorTypeName];
    if (!type) {
      problems.push({
        kind: "unknown-type",
        name: s.name,
        type: s.sponsorTypeName,
      });
      continue;
    }
    levelRows.push({ ...s, type });
  }

  // Résout chaque ligne de niveau en entrée de présence, en dédoublonnant par id.
  const resolved = [];
  const seenIds = new Set();
  const downloads = [];
  const additions = [];
  for (const row of levelRows) {
    const id =
      frozenIdByName.get(normalizeName(row.name)) ??
      computeId(row.name, editionYear);
    if (seenIds.has(id)) continue; // même entreprise deux fois au même niveau : on garde la première
    seenIds.add(id);

    resolved.push({
      id,
      type: row.type,
      name: row.name,
      registrationDate: row.registrationDate ?? "",
    });

    const existing = catalogById.get(id);
    const isNew = existing === undefined;
    const sourceUrl = row.logo ?? "";

    if (isNew) {
      additions.push({ id, name: row.name, sourceUrl });
      if (sourceUrl)
        downloads.push({ id, name: row.name, sourceUrl, isNew: true });
      else problems.push({ kind: "new-without-image", id, name: row.name });
    } else if (existing.source_url !== undefined) {
      // Entrée gérée par l'Action : on peut la rafraîchir.
      if (sourceUrl)
        downloads.push({ id, name: row.name, sourceUrl, isNew: false });
      else problems.push({ kind: "upstream-empty", id, name: row.name });
    }
    // Entrée manuelle (sans source_url) : jamais téléchargée ni écrasée.
  }

  // Fusion Meet&Greet : option d'un sponsor étoile, un seul autorisé.
  if (meetgreetRows.length > 1) {
    problems.push({ kind: "multiple-meetgreet", count: meetgreetRows.length });
  }
  for (const mg of meetgreetRows) {
    const norm = normalizeName(mg.name);
    const target = resolved.find(
      (r) => r.type === "etoile" && normalizeName(r.name) === norm,
    );
    if (target) target.meetgreet = true;
    else problems.push({ kind: "orphan-meetgreet", name: mg.name });
  }

  // Retraits : sponsors présents avant, absents désormais.
  const currentIds = new Set(resolved.map((r) => r.id));
  const removals = [...previousIds].filter((id) => !currentIds.has(id));
  for (const id of removals) problems.push({ kind: "removed", id });

  // Ordre d'affichage : par date d'inscription croissante.
  resolved.sort((a, b) => a.registrationDate.localeCompare(b.registrationDate));

  const presence = resolved.map((r) =>
    r.meetgreet
      ? { id: r.id, type: r.type, meetgreet: true }
      : { id: r.id, type: r.type },
  );

  return { presence, downloads, additions, removals, problems };
};
