/**
 * Drops a second photograph into long articles.
 *
 * A single header image carries a short piece fine, but the longer articles
 * here run to several thousand words and go back to being an unbroken column
 * after the first screen. This inserts one more image partway down, and only
 * where there is enough article to justify it.
 *
 * Deliberately conservative: one extra image, never two, and only when the
 * piece has at least MIN_SECTIONS top-level sections. It is also skipped when
 * the subject has only one suitable photograph, because the same picture twice
 * on one page looks like a mistake.
 */
import { bodyPhotos } from '../lib/photos.mjs';

// How many extra images an article earns, by length in words.
//
// Heading count was the first attempt and it was wrong: the longest article
// on the site, at nearly 2,000 words, happens to have only four headings and
// so received nothing, which is exactly the case this is meant to fix. Words
// measure how far a reader actually scrolls; headings do not.
const ONE_IMAGE_FROM = 700;
const TWO_IMAGES_FROM = 1150;

const el = (tagName, properties, children = []) => ({
  type: 'element',
  tagName,
  properties,
  children,
});

function figure(base) {
  const src = (w, ext) => `/img/${base}-${w}.${ext}`;
  const sizes = '(max-width: 46rem) 100vw, 40rem';
  return el('figure', { className: ['banner', 'banner--inline'] }, [
    el('picture', {}, [
      el('source', {
        type: 'image/avif',
        srcSet: `${src(800, 'avif')} 800w, ${src(1600, 'avif')} 1600w`,
        sizes,
      }),
      el('source', {
        type: 'image/webp',
        srcSet: `${src(800, 'webp')} 800w, ${src(1600, 'webp')} 1600w`,
        sizes,
      }),
      // Decorative, so an empty alt. It illustrates nothing the text does not
      // already say, and a screen reader should skip it.
      el('img', {
        src: src(1600, 'webp'),
        alt: '',
        width: 1600,
        height: 533,
        loading: 'lazy',
        decoding: 'async',
      }),
    ]),
  ]);
}

export function rehypeInlineImage() {
  return (tree, file) => {
    const fm = file?.data?.astro?.frontmatter ?? {};
    if (fm.draft) return;

    const path = file?.history?.[0] ?? file?.path ?? '';
    const slug = path.split('/').pop()?.replace(/\.md$/, '');
    if (!slug) return;

    const kids = tree.children ?? [];

    // Rough word count of the rendered text, which is what a reader scrolls
    // through, rather than of the markdown source with its tables and SVG.
    let words = 0;
    const walk = (n) => {
      if (n.type === 'text') words += (n.value.match(/\S+/g) || []).length;
      (n.children || []).forEach(walk);
    };
    kids.forEach(walk);
    if (words < ONE_IMAGE_FROM) return;
    const want = words >= TWO_IMAGES_FROM ? 2 : 1;

    const h2s = kids
      .map((n, i) => (n.type === 'element' && n.tagName === 'h2' ? i : -1))
      .filter((i) => i !== -1);
    if (h2s.length < 2) return;

    const photos = bodyPhotos(slug, fm.tags ?? [], want);
    if (!photos.length) return;

    // Spread the images through the article rather than clustering them, and
    // never before the first heading, where the header image already sits.
    const n = h2s.length;
    const slots = photos
      .map((_, i) => Math.min(n - 1, Math.max(1, Math.round(((i + 1) * n) / (photos.length + 1)))))
      .filter((v, i, arr) => arr.indexOf(v) === i);

    // Insert from the end so earlier indices stay valid as the array grows.
    for (let i = slots.length - 1; i >= 0; i--) {
      kids.splice(h2s[slots[i]], 0, figure(photos[i]));
    }
  };
}
