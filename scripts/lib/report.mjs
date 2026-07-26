// Génère le corps Markdown de la PR de synchro à partir du plan et des problèmes.
// Pur (aucune I/O). Les ⚠️ deviennent une checklist actionnable pour la revue.

const PROBLEM_LABEL = {
  "new-without-image": (p) =>
    `Nouveau sponsor **sans logo** — \`${p.id}\` (${p.name}) : ajouter le logo à la main`,
  "upstream-empty": (p) =>
    `Logo amont devenu vide — \`${p.id}\` (${p.name}) : avif conservé`,
  "orphan-meetgreet": (p) =>
    `Meet&Greet orphelin (sans étoile correspondante) — ${p.name}`,
  "multiple-meetgreet": (p) =>
    `Plusieurs Meet&Greet (${p.count}) : un seul autorisé`,
  removed: (p) => `Sponsor **retiré** (disparu de l'API) — \`${p.id}\``,
  "conversion-failed": (p) =>
    `Échec de conversion du logo — \`${p.id}\` (${p.name}) : ${p.detail}`,
  "unknown-type": (p) => `Type inconnu ignoré — ${p.name} (${p.type})`,
};

const describeProblem = (p) =>
  PROBLEM_LABEL[p.kind]?.(p) ?? `${p.kind} — ${JSON.stringify(p)}`;

const section = (title, lines) =>
  lines.length === 0
    ? ""
    : `## ${title}\n\n${lines.map((l) => `- ${l}`).join("\n")}\n\n`;

/**
 * @param {{ additions: object[], removals: string[], problems: object[], patched: string[] }} data
 * @returns {string} corps Markdown de la PR
 */
export const buildReport = ({
  additions = [],
  removals = [],
  patched = [],
  problems = [],
}) => {
  const warnings = problems.map((p) => `[ ] ${describeProblem(p)}`);
  const body =
    "Synchronisation automatique des sponsors depuis confhouse.\n\n" +
    section(
      "Ajouts",
      additions.map((a) => `\`${a.id}\` — ${a.name}`),
    ) +
    section(
      "Logos modifiés",
      patched.map((id) => `\`${id}\``),
    ) +
    section(
      "Retraits",
      removals.map((id) => `\`${id}\``),
    ) +
    section("⚠️ À traiter manuellement", warnings);

  return `${body.trimEnd()}\n`;
};
