// @ts-check
import fs from 'node:fs';
import path from 'node:path';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { rehypeBaseLinks } from './src/plugins/rehype-base-links.mjs';
import { rehypeInlineImage } from './src/plugins/rehype-inline-image.mjs';

// Host is switched with two env vars so moving from the temporary GitHub Pages
// path to a bought custom domain is a config change, not a rewrite.
//   SITE_URL   https://aiaudioreport.com
//   BASE_PATH  /
const SITE_URL = process.env.SITE_URL ?? 'https://aiaudioreport.com';
const BASE_PATH = process.env.BASE_PATH ?? '/';

// lastmod per article, read straight from the frontmatter so it cannot drift
// from what the page itself says. Pages whose age is not meaningful, the legal
// and contact pages, are left without one: an invented date is worse than none.
const ARTICLES = './src/content/articles';
const DATE = /^(?:updatedDate|pubDate):\s*(\d{4}-\d{2}-\d{2})/gm;
const lastmod = Object.fromEntries(
  fs.readdirSync(ARTICLES).filter((f) => f.endsWith('.md')).map((f) => {
    const src = fs.readFileSync(path.join(ARTICLES, f), 'utf8').split('---')[1] ?? '';
    const dates = [...src.matchAll(DATE)].map((m) => m[1]).sort();
    return [f.replace(/\.md$/, ''), dates.at(-1) ?? null];
  })
);
const newest = Object.values(lastmod).filter(Boolean).sort().at(-1);

export default defineConfig({
  site: SITE_URL,
  base: BASE_PATH,
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'always' },

  // /about/ and /editorial-policy/ shipped at launch and were removed on 8
  // November. Google had already indexed them and sent a real reader to
  // /about/, who landed on the 404. These keep that traffic and tell Google
  // where the pages went, which a deleted file on its own does not.
  redirects: {
    '/about': '/',
    '/editorial-policy': '/',
  },
  integrations: [
    // Neither the 404 nor the post-subscribe page belongs in a sitemap.
    sitemap({
      filter: (page) => !page.includes('/404') && !page.includes('/subscribed'),
      serialize(item) {
        const slug = item.url.match(/\/articles\/([^/]+)\/$/)?.[1];
        // The two index pages change whenever any article does.
        const isIndex = /^https?:\/\/[^/]+\/(articles\/)?$/.test(item.url);
        const d = slug ? lastmod[slug] : (isIndex ? newest : null);
        if (d) item.lastmod = `${d}T00:00:00+00:00`;
        return item;
      },
    }),
  ],
  markdown: { rehypePlugins: [rehypeInlineImage, rehypeBaseLinks] },
  compressHTML: true,
});
