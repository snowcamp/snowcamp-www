import fs from "fs";
import path from "path";
import { promisify } from "util";
import { glob } from "glob";
import matter from "gray-matter";
import { remark } from "remark";
import strip from "strip-markdown";

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const globP = (pattern) => glob(pattern, { nodir: true });

const ROOT = process.cwd();

function slugFromFile(file) {
  return file
    .replace(/\\/g, "/")
    .replace(/^src\/pages/, "")
    .replace(/index\.(mdx|md|astro)$/, "")
    .replace(/\.(mdx|md|astro)$/, "")
    .replace(/\/index$/, "/")
    .replace(/\/+/g, "/");
}

async function mdToText(content) {
  try {
    const vfile = await remark().use(strip).process(content);
    return String(vfile).replace(/\s+/g, " ").trim();
  } catch (e) {
    // fallback: strip simple markdown and html
    return content.replace(/<[^>]+>/g, " ").replace(/[#_*`>\-\[\]]/g, " ").replace(/\s+/g, " ").trim();
  }
}

async function indexPages() {
  const patterns = ["src/pages/**/*.mdx", "src/pages/**/*.md", "src/pages/**/*.astro"];
  const files = (await Promise.all(patterns.map((p) => globP(p)))).flat();
  const entries = [];

  for (const file of files) {
    const content = await readFile(file, "utf8");
    const normalizedFile = file.replace(/\\/g, "/");
    const parsed = matter(content);

    const fm = parsed.data || {};
    let body = parsed.content || "";
    // strip mdx import/export lines to avoid large code blobs in index
    body = body.replace(/^(import|export).*$\n?/gm, "");
    const text = await mdToText(body);

    // Determine URL
    const slug = slugFromFile(normalizedFile);
    const url = slug === "" ? "/" : slug;
    entries.push({
      id: `page:${path.basename(normalizedFile)}:${fm.lang || "fr"}`,
      type: "page",
      title: fm.title || fm.name || path.basename(normalizedFile),
      description: fm.description || "",
      content: text.slice(0, 500),
      tags: fm.tags || [],
      url,
      date: fm.date || null,
      lang: fm.lang || (normalizedFile.includes("/en/") ? "en" : "fr"),
      source: normalizedFile,
    });
  }

  return entries;
}

// YAML files are not indexed anymore. If you need to re-enable special cases
// for YAML-based entries (sponsors/organisation) implement them explicitly.
async function indexYamlData() {
  return [];
}

async function indexPublicJson() {
  const patterns = ["public/editions/*.json", "voxxrin/*.json"];
  const files = (await Promise.all(patterns.map((p) => globP(p)))).flat();
  const entries = [];

  for (const file of files) {
    try {
      const content = await readFile(file, "utf8");
      const data = JSON.parse(content);

      if (Array.isArray(data)) {
        for (const item of data) {
          entries.push({
            id: `edition:${item.year || item.id || Math.random().toString(16).slice(2, 8)}`,
            type: "edition",
            title: item.title || item.name || item.year || "",
            description: item.description || item.summary || "",
            content: String(item.description || item.summary || "").slice(0, 1000),
            tags: item.tags || [],
            url: item.url || `/editions/${item.year}`,
            date: item.date || item.year || null,
            lang: item.lang || "fr",
            source: file,
          });
        }
      } else if (typeof data === "object") {
        const item = data;
        entries.push({
          id: `json:${path.basename(file)}`,
          type: "json",
          title: item.title || item.name || path.basename(file),
          description: item.description || "",
          content: String(item.description || "").slice(0, 1000),
          tags: item.tags || [],
          url: item.url || "/",
          date: item.date || null,
          lang: item.lang || "fr",
          source: file,
        });
      }
    } catch (e) {
      console.warn(`Skipping JSON ${file}: ${e.message}`);
    }
  }

  return entries;
}

async function build() {
  const pages = await indexPages();
  const yamlData = await indexYamlData();
  const jsonData = await indexPublicJson();

  const index = [...pages, ...yamlData, ...jsonData];

  const out = path.join(ROOT, "public", "search-index.json");
  await writeFile(out, JSON.stringify(index, null, 2), "utf8");

  console.log(`Wrote ${index.length} entries to ${out}`);
}

build().catch((err) => {
  console.error(err);
  process.exit(1);
});
