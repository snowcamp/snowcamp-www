#!/usr/bin/env node
// Synchronise les sponsors depuis confhouse.
//
// Récupère la liste des sponsors de l'API, la réconcilie avec l'état versionné
// (current-sponsors.yml + sponsors.yaml) puis :
//   - sans --apply : AFFICHE le plan (dry-run), n'écrit rien ;
//   - avec --apply : télécharge chaque logo (une fois), calcule son sha1, le
//     convertit en avif si besoin, et réécrit current-sponsors.yml + sponsors.yaml.
//
// Usage :
//   node scripts/sync-sponsors.mjs                       # plan en ligne
//   node scripts/sync-sponsors.mjs --input f.json        # plan sur réponse locale
//   node scripts/sync-sponsors.mjs --apply               # applique
//   node scripts/sync-sponsors.mjs --apply --data-dir d --img-dir i   # cibles alternatives

import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { basename, dirname, join } from "node:path";
import { load } from "js-yaml";
import { stringify } from "yaml";
import { reconcile } from "./lib/reconcile.mjs";
import { fetchImage, toAvif } from "./lib/images.mjs";
import {
  appendEntries,
  buildEntry,
  logoFilename,
  patchEntry,
} from "./lib/catalog.mjs";

const API_URL =
  process.env.SPONSORS_API_URL ?? "https://conf.snowcamp.io/api/sponsors";

const here = dirname(fileURLToPath(import.meta.url));

const PRESENCE_HEADER = `# Présence des sponsors de l'édition courante.
# Fichier généré par scripts/sync-sponsors.mjs — ne pas éditer à la main (un run le réécrit).
# Seuls les id (référence vers sponsors.yaml) sont éventuellement retouchés dans la PR.
`;

const hasFlag = (flag) => process.argv.includes(flag);
const argValue = (flag) => {
  const i = process.argv.indexOf(flag);
  return i !== -1 ? process.argv[i + 1] : undefined;
};

const loadYaml = (path) => load(readFileSync(path, "utf8")) ?? {};

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

const printPlan = (plan, editionYear, apiCount) => {
  console.log(
    `Plan de synchro (édition ${editionYear}, ${apiCount} sponsors API)`,
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
    "Logos à vérifier",
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

const applyPlan = async (
  plan,
  { catalogById, editionYear, sponsorsPath, presencePath, imgDir },
) => {
  const problems = [...plan.problems];
  const creates = [];
  const patches = [];

  for (const d of plan.downloads) {
    const existing = catalogById.get(d.id);
    try {
      const { buffer, sha1: hash } = await fetchImage(d.sourceUrl);
      const filename = existing?.logo
        ? basename(existing.logo)
        : logoFilename(d.name, editionYear);
      const unchanged =
        existing?.source_sha1 === hash && existsSync(join(imgDir, filename));
      if (!unchanged)
        writeFileSync(join(imgDir, filename), await toAvif(buffer));

      const logo = `/img/sponsors/${filename}`;
      if (existing) {
        patches.push({
          id: d.id,
          patch: { logo, source_url: d.sourceUrl, source_sha1: hash },
        });
      } else {
        creates.push(
          buildEntry({
            id: d.id,
            name: d.name,
            logo,
            sourceUrl: d.sourceUrl,
            sourceSha1: hash,
          }),
        );
      }
    } catch (error) {
      problems.push({
        kind: "conversion-failed",
        id: d.id,
        name: d.name,
        detail: error.message,
      });
    }
  }

  // Sponsors neufs sans avif (logo API vide ou échec) : stub catalogue à compléter à la main.
  for (const a of plan.additions) {
    if (creates.some((c) => c.id === a.id) || catalogById.has(a.id)) continue;
    creates.push(
      buildEntry({
        id: a.id,
        name: a.name,
        logo: "",
        sourceUrl: a.sourceUrl,
        sourceSha1: "",
      }),
    );
  }

  let sponsorsYaml = readFileSync(sponsorsPath, "utf8");
  for (const { id, patch } of patches)
    sponsorsYaml = patchEntry(sponsorsYaml, id, patch);
  sponsorsYaml = appendEntries(sponsorsYaml, creates);
  writeFileSync(sponsorsPath, sponsorsYaml);
  writeFileSync(
    presencePath,
    PRESENCE_HEADER + stringify({ sponsors: plan.presence }),
  );

  console.log(
    `Appliqué : ${creates.length} entrée(s) créée(s), ${patches.length} mise(s) à jour, ` +
      `${plan.removals.length} retrait(s).`,
  );
  printList(
    "⚠️  À traiter manuellement",
    problems.map((p) => JSON.stringify(p)),
  );
};

const main = async () => {
  const dataDir = argValue("--data-dir") ?? join(here, "..", "src", "data");
  const imgDir =
    argValue("--img-dir") ?? join(here, "..", "public", "img", "sponsors");
  const sponsorsPath = join(dataDir, "sponsors.yaml");
  const presencePath = join(dataDir, "current-sponsors.yml");

  const apiSponsors = await fetchApiSponsors();
  const editionYear = Number(
    String(loadYaml(join(dataDir, "current.yaml")).start_date).slice(0, 4),
  );
  const previousPresence = existsSync(presencePath)
    ? (loadYaml(presencePath).sponsors ?? [])
    : [];
  const catalog = loadYaml(sponsorsPath).sponsors ?? [];
  const catalogById = new Map(catalog.map((e) => [e.id, e]));

  const plan = reconcile({
    apiSponsors,
    previousPresence,
    catalog,
    editionYear,
  });

  if (hasFlag("--apply")) {
    await applyPlan(plan, {
      catalogById,
      editionYear,
      sponsorsPath,
      presencePath,
      imgDir,
    });
  } else {
    printPlan(plan, editionYear, apiSponsors.length);
  }
};

main().catch((error) => {
  console.error(error.message ?? error);
  process.exit(1);
});
