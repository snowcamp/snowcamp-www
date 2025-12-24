const input = document.getElementById('search-input');
const resultsEl = document.getElementById('search-results');
const root = document.getElementById('search-root');
const lang = root?.dataset?.lang || document.documentElement.lang || 'fr';

let index = [];
let fuse = null;

function debounce(fn, wait = 200) {
  let t;
  return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), wait); };
}

async function loadIndex() {
  try {
    const res = await fetch('/search-index.json');
    index = await res.json();
    const filtered = index.filter(i => !i.lang || i.lang === lang);

    // Wait for Fuse to be available (from CDN script)
    if (typeof Fuse === 'undefined') {
      // small wait loop
      for (let i = 0; i < 20; i++) {
        if (typeof Fuse !== 'undefined') break;
        await new Promise(r => setTimeout(r, 50));
      }
    }

    if (typeof Fuse === 'undefined') {
      console.error('Fuse not loaded');
      return;
    }

    fuse = new Fuse(filtered, {
      includeScore: true,
      includeMatches: true,
      isCaseSensitive: false,
      findAllMatches: true,
      minMatchCharLength: 2,
      threshold: 0.35,
      ignoreLocation: true,
      keys: [
        { name: 'title', weight: 0.6 },
        { name: 'tags', weight: 0.5 },
        { name: 'description', weight: 0.4 },
        { name: 'content', weight: 0.2 }
      ]
    });
  } catch (e) {
    console.error('Failed to load search index', e);
  }
}

function renderResults(items) {
  if (!items || items.length === 0) {
    resultsEl.hidden = true;
    resultsEl.innerHTML = '';
    return;
  }

  resultsEl.hidden = false;
  resultsEl.innerHTML = items.map(r => {
    const item = r.item || r;
    const title = item.title || '';
    const desc = item.description || item.content || '';
    const descStr = (typeof desc === 'string') ? desc : String(desc || '');
    const href = item.url || '#';
    return `<a href="${href}"><strong>${escapeHtml(title)}</strong><div>${escapeHtml(descStr.slice(0,180))}</div></a>`;
  }).join('');
}

function escapeHtml(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

const onInput = debounce((e) => {
  const q = e.target.value.trim();
  if (!q || !fuse) { renderResults([]); return; }
  const results = fuse.search(q, { limit: 20 });
  renderResults(results);
}, 150);

input?.addEventListener('input', onInput, { passive: true });

document.addEventListener('click', (ev) => {
  if (!root.contains(ev.target)) {
    resultsEl.hidden = true;
  }
});

loadIndex();
