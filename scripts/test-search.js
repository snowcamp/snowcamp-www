import fs from 'fs/promises';
import Fuse from 'fuse.js';

async function run() {
  const raw = await fs.readFile('public/search-index.json', 'utf8');
  const index = JSON.parse(raw);
  const filtered = index.filter(i => i.lang === 'fr');

  const fuse = new Fuse(filtered, {
    includeScore: true,
    keys: ['title', 'description', 'content']
  });

  const q = process.argv[2] || 'sponsor';
  const res = fuse.search(q, { limit: 5 });
  console.log(`Query: ${q} => ${res.length} results`);
  for (const r of res) console.log('-', r.item.title, r.item.url);
}

run().catch(e => { console.error(e); process.exit(1); });
