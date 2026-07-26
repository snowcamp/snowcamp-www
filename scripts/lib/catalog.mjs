// Écriture de sponsors.yaml SANS re-sérialiser le fichier entier : on ajoute les
// nouvelles entrées en fin de séquence et on ne modifie que des lignes de champ
// précises des entrées gérées. Les entrées historiques (blocs `>` multi-lignes,
// commentaires) restent intactes octet pour octet. Un `prettier --write` final
// normalise le tout (il préserve les blocs pliés existants).
import { stringify } from "yaml";
import { slugify } from "./reconcile.mjs";

/** Nom de fichier logo suivant la convention du dépôt : `<slug>.<année>.avif`. */
export const logoFilename = (name, editionYear) =>
  `${slugify(name)}.${editionYear}.avif`;

/** Construit une entrée catalogue complète pour un sponsor géré par l'Action. */
export const buildEntry = ({ id, name, logo, sourceUrl, sourceSha1 }) => ({
  name,
  id,
  logo,
  source_url: sourceUrl,
  source_sha1: sourceSha1,
  link: { fr: "", en: "" },
  description: { fr: "", en: "" },
});

/** Sérialise une entrée en élément de liste YAML (`  - ` + champs indentés à 4). */
export const serializeEntry = (entry) => {
  const lines = stringify(entry, { lineWidth: 0 }).trimEnd().split("\n");
  return (
    lines
      .map((line, i) => (i === 0 ? `  - ${line}` : `    ${line}`))
      .join("\n") + "\n"
  );
};

/** Ajoute des entrées en fin de séquence `sponsors:` (aucune existante n'est touchée). */
export const appendEntries = (text, entries) => {
  if (entries.length === 0) return text;
  const base = text.endsWith("\n") ? text : `${text}\n`;
  return base + entries.map(serializeEntry).join("");
};

const idOfLine = (line) => {
  const m = /^\s+(?:- )?id:\s*(.+?)\s*$/.exec(line);
  return m ? m[1].replace(/^["']|["']$/g, "") : undefined;
};

/**
 * Met à jour des champs (plats) d'une entrée gérée, repérée par son `id`, par édition
 * de lignes. Les champs absents sont insérés en fin de bloc d'entrée. No-op si l'id est absent.
 */
export const patchEntry = (text, id, patch) => {
  const lines = text.split("\n");
  const idLineIdx = lines.findIndex((l) => idOfLine(l) === id);
  if (idLineIdx === -1) return text;

  let start = idLineIdx;
  while (start > 0 && !/^ {2}- /.test(lines[start])) start -= 1;
  let end = start + 1;
  while (end < lines.length && !/^ {2}- /.test(lines[end])) end += 1;

  for (const [key, value] of Object.entries(patch)) {
    const rel = lines
      .slice(start, end)
      .findIndex((l) => new RegExp(`^ {4}${key}:`).test(l));
    const fieldLine = `    ${key}: ${JSON.stringify(value)}`;
    if (rel === -1) {
      lines.splice(end, 0, fieldLine);
      end += 1;
    } else {
      lines[start + rel] = fieldLine;
    }
  }

  return lines.join("\n");
};
