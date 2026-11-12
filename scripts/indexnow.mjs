// Tell IndexNow (Bing, Yandex, Seznam, Naver; Bing shares with DuckDuckGo and
// Ecosia) which URLs changed in this push. Runs after the Pages deploy, so the
// key file in public/ is already live when Bing fetches it.
//
// Usage: node scripts/indexnow.mjs <before-sha> <after-sha>
// With no SHAs (manual run) it submits every URL in the sitemap.
import { execSync } from 'node:child_process';

const HOST = 'aiaudioreport.com';
const KEY = 'e633d124e7712dc56fec2c6f860d70ae';
const SITE = `https://${HOST}`;
const [before, after] = process.argv.slice(2);

async function sitemapUrls() {
  const index = await (await fetch(`${SITE}/sitemap-index.xml`)).text();
  const maps = [...index.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  const urls = [];
  for (const m of maps) {
    const xml = await (await fetch(m)).text();
    urls.push(...[...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((x) => x[1]));
  }
  return urls;
}

function changedUrls() {
  const zero = /^0+$/;
  if (!before || !after || zero.test(before)) return null;
  let files;
  try {
    files = execSync(`git diff --name-only ${before} ${after}`, { encoding: 'utf8' })
      .split('\n').filter(Boolean);
  } catch {
    return null; // force-push or shallow history: fall back to the sitemap
  }
  const slugs = files
    .map((f) => f.match(/^src\/content\/articles\/([^/]+)\.md$/)?.[1])
    .filter(Boolean);
  if (slugs.length === 0) return [];
  // A changed article also changes the homepage and the article index.
  return [`${SITE}/`, `${SITE}/articles/`, ...slugs.map((s) => `${SITE}/articles/${s}/`)];
}

let urls = changedUrls();
if (urls === null) urls = await sitemapUrls();
if (urls.length === 0) {
  console.log('IndexNow: no article changed in this push, nothing to submit.');
  process.exit(0);
}

// Only submit pages that are actually live: a deleted article would 404.
const live = [];
for (const u of urls) {
  const r = await fetch(u, { method: 'HEAD', redirect: 'manual' });
  if (r.status === 200) live.push(u);
  else console.log(`IndexNow: skipping ${u} (HTTP ${r.status})`);
}
if (live.length === 0) process.exit(0);

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `${SITE}/${KEY}.txt`, urlList: live }),
});
console.log(`IndexNow: submitted ${live.length} URL(s), HTTP ${res.status}`);
live.forEach((u) => console.log(`  ${u}`));
// 200 and 202 are success. Anything else is reported but never fails the deploy.
