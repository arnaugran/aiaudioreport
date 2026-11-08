// @ts-check
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

export default defineConfig({
  site: SITE_URL,
  base: BASE_PATH,
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'always' },
  integrations: [sitemap({ filter: (page) => !page.includes('/404') })],
  markdown: { rehypePlugins: [rehypeInlineImage, rehypeBaseLinks] },
  compressHTML: true,
});
