// Crops and compresses the article header photographs.
//
// Run: node scripts/make-headers.mjs <source-directory>
//
// Source images are Unsplash photographs. The Unsplash Licence, read on
// 8 November 2026, permits commercial use with no permission and no
// attribution required, and forbids only two things that do not apply here:
// selling the images unaltered, and compiling them to build a competing
// image service. Provenance for every file is recorded in
// public/img/CREDITS.txt so the licence position stays auditable.
//
// Output is AVIF plus a WebP fallback at two widths, because a header photo
// on every article is the heaviest thing on the site and an unoptimised JPEG
// would undo the page-weight work.
import sharp from 'sharp';
import { mkdirSync, readdirSync, writeFileSync } from 'node:fs';
import { join, basename, extname } from 'node:path';

const src = process.argv[2];
if (!src) {
  console.error('usage: node scripts/make-headers.mjs <source-directory>');
  process.exit(1);
}

const OUT = 'public/img';
mkdirSync(OUT, { recursive: true });

// 3:1 is wide enough to read as a banner without pushing the headline off a
// phone screen. 1600 covers 2x on the 40rem measure; 800 serves 1x.
const WIDTHS = [1600, 800];
const RATIO = 3;

const files = readdirSync(src).filter((f) => /\.(jpe?g|png)$/i.test(f));
const written = [];

for (const file of files) {
  const name = basename(file, extname(file));
  for (const w of WIDTHS) {
    const h = Math.round(w / RATIO);
    const base = sharp(join(src, file)).resize(w, h, { fit: 'cover', position: 'attention' });
    await base.clone().avif({ quality: 52 }).toFile(`${OUT}/${name}-${w}.avif`);
    await base.clone().webp({ quality: 70 }).toFile(`${OUT}/${name}-${w}.webp`);
  }
  written.push(name);
}

writeFileSync(
  `${OUT}/CREDITS.txt`,
  [
    'Article header photographs.',
    '',
    'Source: Unsplash (https://unsplash.com). Downloaded 8 November 2026.',
    'Licence: https://unsplash.com/license',
    '  "All images can be downloaded and used for free"',
    '  Commercial and non-commercial purposes, no permission needed,',
    '  attribution not required.',
    'Not permitted by that licence, and not done here: selling the images',
    'unaltered, or compiling them to replicate a competing image service.',
    '',
    'Files (cropped to 3:1 and re-encoded, served as AVIF with a WebP fallback):',
    ...written.map((n) => `  ${n}`),
    '',
  ].join('\n')
);

console.log(`wrote ${written.length} header images (${WIDTHS.length} widths, avif + webp) to ${OUT}`);
console.log(written.join(', '));
