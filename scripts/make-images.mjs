// Renders the raster assets (OG card, apple-touch-icon) from inline SVG.
// Run: node scripts/make-images.mjs
import sharp from 'sharp';
import { mkdirSync } from 'node:fs';

const INK = '#eceef1', MUTED = '#9aa1ab', BG = '#15171a', ACCENT = '#5b8def', ACCENT_SOFT = '#8fb4f7';

const mark = (tx, ty, scale) => `
  <g transform="translate(${tx} ${ty}) scale(${scale})">
    <rect x="0.5"  y="8" width="3" height="8"  rx="1.5" fill="${ACCENT_SOFT}" opacity="0.6"/>
    <rect x="5"    y="5" width="3" height="14" rx="1.5" fill="${ACCENT_SOFT}" opacity="0.6"/>
    <rect x="9.5"  y="2" width="3" height="20" rx="1.5" fill="${ACCENT}"/>
    <rect x="14"   y="6" width="3" height="12" rx="1.5" fill="${ACCENT_SOFT}" opacity="0.6"/>
    <rect x="18.5" y="9" width="3" height="6"  rx="1.5" fill="${ACCENT_SOFT}" opacity="0.6"/>
  </g>`;

const FONT = 'Helvetica Neue, Helvetica, Arial, sans-serif';

const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="1200" height="630" fill="${BG}"/>
  <rect x="0" y="0" width="1200" height="6" fill="${ACCENT}"/>
  ${mark(90, 86, 3.1)}
  <text x="90" y="330" font-family="${FONT}" font-size="86" font-weight="700" fill="${INK}" letter-spacing="-2">AI Audio Report</text>
  <text x="90" y="398" font-family="${FONT}" font-size="34" fill="${MUTED}">Prices with a date on them.</text>
  <text x="90" y="560" font-family="${FONT}" font-size="26" fill="${MUTED}">aiaudioreport.com</text>
</svg>`;

const icon = `<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180">
  <rect width="180" height="180" rx="40" fill="${BG}"/>
  ${mark(39, 24, 5)}
</svg>`;

mkdirSync('public', { recursive: true });
await sharp(Buffer.from(og)).png({ compressionLevel: 9 }).toFile('public/og-default.png');
await sharp(Buffer.from(icon)).png({ compressionLevel: 9 }).toFile('public/apple-touch-icon.png');
console.log('wrote public/og-default.png and public/apple-touch-icon.png');
