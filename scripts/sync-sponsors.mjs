#!/usr/bin/env node
// Synchronise les sponsors depuis confhouse — étape 1 : PLANIFICATION (dry-run).
//
// Ce script récupère la liste des sponsors de l'API, la réconcilie avec l'état
// versionné (current-sponsors.yml + sponsors.yaml) et AFFICHE le plan : ajouts,
// téléchargements requis, retraits et problèmes à traiter. Il n'écrit rien et ne
// télécharge aucune image (conversion avif et écriture : étapes suivantes).
//
// Usage :
//   node scripts/sync-sponsors.mjs                 # interroge l'API en ligne
//   node scripts/sync-sponsors.mjs --input f.json  # rejoue une réponse API locale
//   SPONSORS_API_URL=… node scripts/sync-sponsors.mjs

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { load } from "js-yaml";
import { reconcile } from "./lib/reconcile.mjs";

const API_URL =
  process.env.SPONSORS_API_URL ?? "https://conf.snowcamp.io/api/sponsors";

const here = dirname(fileURLToPath(import.meta.url));
const dataDir = join(here, "..", "src", "data");

const loadYaml = (path) => load(readFileSync(path, "utf8")) ?? {};

const argValue = (flag) => {
  const i = process.argv.indexOf(flag);
  return i !== -1 ? process.argv[i + 1] : undefined;
};

const fetchApiSponsors = async () => {
  const input = argValue("--input");
  if (input) return JSON.parse(readFileSync(input, "utf8"));
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error(`API ${API_URL} → HTTP ${response.status}`);
  return response.json();
};

const printList = (title, items) => {
  if (items.length === 0) return;
  console.log(`\n${title}`);
  for (const line of items) console.log(`  - ${line}`);
};

const main = async () => {
  const apiSponsors = await fetchApiSponsors();
  const current = loadYaml(join(dataDir, "current.yaml"));
  const editionYear = Number(String(current.start_date).slice(0, 4));
  const previousPresence =
    loadYaml(join(dataDir, "current-sponsors.yml")).sponsors ?? [];
  const catalog = loadYaml(join(dataDir, "sponsors.yaml")).sponsors ?? [];

  const plan = reconcile({
    apiSponsors,
    previousPresence,
    catalog,
    editionYear,
  });

  console.log(
    `Plan de synchro (édition ${editionYear}, ${apiSponsors.length} sponsors API)`,
  );
  printList(
    "Présence cible",
    plan.presence.map(
      (p) => `${p.id} [${p.type}]${p.meetgreet ? " +meet&greet" : ""}`,
    ),
  );
  printList(
    "Ajouts au catalogue",
    plan.additions.map((a) => `${a.id} — ${a.name}`),
  );
  printList(
    "Logos à télécharger/convertir",
    plan.downloads.map(
      (d) => `${d.id} ← ${d.sourceUrl}${d.isNew ? " (nouveau)" : ""}`,
    ),
  );
  printList("Retraits", plan.removals);
  printList(
    "⚠️  À traiter manuellement",
    plan.problems.map((p) => JSON.stringify(p)),
  );

  console.log(
    `\nRésumé : ${plan.additions.length} ajout(s), ${plan.downloads.length} logo(s), ` +
      `${plan.removals.length} retrait(s), ${plan.problems.length} problème(s).`,
  );
};

main().catch((error) => {
  console.error(error.message ?? error);
  process.exit(1);
});
