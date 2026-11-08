// Renders the raster assets from inline SVG: the default OG card, the
// apple-touch-icon, and one OG card per article.
//
// Run: node scripts/make-images.mjs
//
// Per-article cards exist because a link to this site previously shared the
// same generic image whatever you linked to. The card now carries the
// article's own headline, which is the whole point of the format.
import sharp from 'sharp';
import { mkdirSync, readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

// These track src/styles/global.css. The accent was #5b8def, a blue left over
// from before the palette moved to teal, so every shared link carried the old
// brand colour.
const INK = '#e9ebee', MUTED = '#9aa1ab', BG = '#16181c';
const ACCENT = '#4fc0b0', ACCENT_SOFT = '#7fd3c7';

const mark = (tx, ty, scale) => `
  <g transform="translate(${tx} ${ty}) scale(${scale})">
    <rect x="0.5"  y="8" width="3" height="8"  rx="1.5" fill="${ACCENT_SOFT}" opacity="0.6"/>
    <rect x="5"    y="5" width="3" height="14" rx="1.5" fill="${ACCENT_SOFT}" opacity="0.6"/>
    <rect x="9.5"  y="2" width="3" height="20" rx="1.5" fill="${ACCENT}"/>
    <rect x="14"   y="6" width="3" height="12" rx="1.5" fill="${ACCENT_SOFT}" opacity="0.6"/>
    <rect x="18.5" y="9" width="3" height="6"  rx="1.5" fill="${ACCENT_SOFT}" opacity="0.6"/>
  </g>`;

const FONT = 'Helvetica Neue, Helvetica, Arial, sans-serif';
const esc = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// Rough wrap. Helvetica Bold at 60px averages a shade over half the font size
// per character, so 30 characters a line keeps a 1020px measure comfortably.
function wrap(text, max = 30, lines = 3) {
  const words = text.split(/\s+/);
  const out = [];
  let line = '';
  for (const w of words) {
    if (!line) line = w;
    else if ((line + ' ' + w).length <= max) line += ' ' + w;
    else { out.push(line); line = w; }
    if (out.length === lines) break;
  }
  if (line && out.length < lines) out.push(line);
  return out;
}

const defaultCard = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
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

function articleCard(title, checked) {
  const lines = wrap(title);
  const startY = 300 - (lines.length - 1) * 36;
  const body = lines
    .map((l, i) =>
      `<text x="90" y="${startY + i * 76}" font-family="${FONT}" font-size="60" font-weight="700" fill="${INK}" letter-spacing="-1.4">${esc(l)}</text>`
    )
    .join('\n  ');
  const stamp = checked ? `Prices checked ${checked}` : 'Every figure dated and sourced';
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="1200" height="630" fill="${BG}"/>
  <rect x="0" y="0" width="1200" height="6" fill="${ACCENT}"/>
  ${mark(90, 78, 2.2)}
  <text x="152" y="112" font-family="${FONT}" font-size="30" font-weight="700" fill="${MUTED}" letter-spacing="-0.4">AI Audio Report</text>
  ${body}
  <line x1="90" y1="500" x2="1110" y2="500" stroke="#2b2f36" stroke-width="1"/>
  <text x="90" y="552" font-family="${FONT}" font-size="26" fill="${MUTED}">${esc(stamp)}</text>
  <text x="1110" y="552" text-anchor="end" font-family="${FONT}" font-size="26" fill="${MUTED}">aiaudioreport.com</text>
</svg>`;
}

function frontmatter(raw) {
  const m = raw.match(/^---\n([\s\S]*?)\n---/);
  if (!m) return {};
  const out = {};
  for (const line of m[1].split('\n')) {
    const kv = line.match(/^(title|pricesCheckedOn|draft):\s*(.*)$/);
    if (kv) out[kv[1]] = kv[2].trim().replace(/^["']|["']$/g, '');
  }
  return out;
}

const fmtDate = (iso) => {
  const d = new Date(iso);
  return Number.isNaN(d.valueOf())
    ? null
    : d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
};

mkdirSync('public', { recursive: true });
mkdirSync('public/og', { recursive: true });

await sharp(Buffer.from(defaultCard)).png({ compressionLevel: 9 }).toFile('public/og-default.png');
await sharp(Buffer.from(icon)).png({ compressionLevel: 9 }).toFile('public/apple-touch-icon.png');

const dir = 'src/content/articles';
let n = 0;
for (const file of readdirSync(dir).filter((f) => f.endsWith('.md'))) {
  const fm = frontmatter(readFileSync(join(dir, file), 'utf8'));
  if (!fm.title || fm.draft === 'true') continue;
  const svg = articleCard(fm.title, fm.pricesCheckedOn ? fmtDate(fm.pricesCheckedOn) : null);
  await sharp(Buffer.from(svg))
    .png({ compressionLevel: 9 })
    .toFile(`public/og/${file.replace(/\.md$/, '')}.png`);
  n++;
}

console.log(`wrote public/og-default.png, public/apple-touch-icon.png and ${n} article cards`);
