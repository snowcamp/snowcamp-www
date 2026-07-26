import type { Language, Translation } from "../lib/types";

/** Niveaux de sponsoring affichés (murs de logos). */
export type SponsorType = "flocon" | "etoile" | "chamois";

/** Entrée du catalogue maître `sponsors.yaml` (logo/lien/description). */
export type CatalogEntry = {
  id: string;
  name: string;
  logo: string;
  link: Translation;
};

/** Entrée de présence `current-sponsors.yml` : qui sponsorise cette édition, et à quel niveau. */
export type PresenceEntry = {
  id: string;
  type: SponsorType;
  meetgreet?: boolean;
};

/** Sponsor prêt à l'affichage, lien résolu pour une langue donnée. */
export type ResolvedSponsor = {
  id: string;
  name: string;
  logo: string;
  link: string;
  type: SponsorType;
  meetgreet: boolean;
};

/** Sponsors de l'édition regroupés par niveau, dans l'ordre du fichier de présence. */
export type SponsorsByType = Record<
  "chamois" | "etoiles" | "flocons",
  ResolvedSponsor[]
>;

/** Nombre de places prises par niveau (pour calculer les places restantes). */
export type SponsorCounts = Record<SponsorType, number>;

/**
 * Indexe le catalogue `sponsors.yaml` par `id` pour une résolution en temps constant.
 */
export const buildCatalog = (
  entries: CatalogEntry[],
): Map<string, CatalogEntry> =>
  new Map(entries.map((entry) => [entry.id, entry]));

/**
 * Résout la liste de présence en sponsors affichables via le catalogue.
 * Une présence dont l'`id` est absent du catalogue est ignorée (avec un avertissement au build).
 */
export const resolveSponsors = (
  presence: PresenceEntry[],
  catalog: Map<string, CatalogEntry>,
  lang: Language,
): ResolvedSponsor[] =>
  presence.flatMap((p) => {
    const entry = catalog.get(p.id);
    if (!entry) {
      console.warn(
        `[sponsors] id "${p.id}" introuvable dans sponsors.yaml, entrée ignorée`,
      );
      return [];
    }
    return [
      {
        id: p.id,
        name: entry.name,
        logo: entry.logo,
        link: entry.link[lang],
        type: p.type,
        meetgreet: p.meetgreet ?? false,
      },
    ];
  });

/**
 * Regroupe des sponsors résolus par niveau, en préservant leur ordre d'origine.
 */
export const groupByType = (sponsors: ResolvedSponsor[]): SponsorsByType => ({
  chamois: sponsors.filter((s) => s.type === "chamois"),
  etoiles: sponsors.filter((s) => s.type === "etoile"),
  flocons: sponsors.filter((s) => s.type === "flocon"),
});

/**
 * Compte les places prises par niveau depuis une liste de présence.
 * Une place est comptée dès qu'un sponsor est présent, même si son logo n'est pas encore résolu.
 */
export const countByType = (presence: PresenceEntry[]): SponsorCounts => {
  const counts: SponsorCounts = { flocon: 0, etoile: 0, chamois: 0 };
  for (const p of presence) {
    counts[p.type] += 1;
  }
  return counts;
};
