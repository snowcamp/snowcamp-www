#!/usr/bin/env node
// Vérifie que src/pages et src/pages/en exposent exactement la même liste de
// fichiers .mdx (mêmes chemins relatifs), pour garantir le miroir fr/en.
// On compare uniquement les noms/chemins, jamais le contenu.
//
// Portée :
// - récursif sous src/pages, en excluant le sous-arbre src/pages/en (qui EST
//   le miroir, pas du contenu à mirrorer) ;
// - récursif sous src/pages/en ;
// - .mdx uniquement (les routeurs .astro et les pages fr-only comme link/ sont
//   hors-scope volontaire).

import { readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join, relative, sep } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const pagesDir = join(here, "..", "src", "pages");
const enDir = join(pagesDir, "en");

// Liste les .mdx sous `root`, en chemins relatifs à `root` (avec séparateurs
// POSIX), en ignorant les sous-arbres présents dans `excluded`.
function listMdx(root, excluded = []) {
  const out = [];
  const walk = (dir) => {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const full = join(dir, entry.name);
      if (entry.isDirectory()) {
        if (excluded.includes(full)) continue;
        walk(full);
      } else if (entry.isFile() && entry.name.endsWith(".mdx")) {
        out.push(relative(root, full).split(sep).join("/"));
      }
    }
  };
  walk(root);
  return out;
}

const fr = new Set(listMdx(pagesDir, [enDir]));
const en = new Set(listMdx(enDir));

const missingInEn = [...fr].filter((f) => !en.has(f)).sort();
const missingInFr = [...en].filter((f) => !fr.has(f)).sort();

if (missingInEn.length === 0 && missingInFr.length === 0) {
  console.log(`✓ Parité mdx fr/en OK (${fr.size} fichiers).`);
  process.exit(0);
}

console.error("✗ Les pages mdx fr et en ne sont pas en miroir.\n");
if (missingInEn.length > 0) {
  console.error("Présents dans src/pages mais absents dans src/pages/en :");
  for (const f of missingInEn) console.error(`  - ${f}`);
  console.error("");
}
if (missingInFr.length > 0) {
  console.error("Présents dans src/pages/en mais absents dans src/pages :");
  for (const f of missingInFr) console.error(`  - ${f}`);
  console.error("");
}
process.exit(1);
