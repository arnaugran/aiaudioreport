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
import { secondPhoto } from '../lib/photos.mjs';

const MIN_SECTIONS = 5;
// Counted in h2s, so the image lands after a section break rather than in the
// middle of an argument.
const AFTER_SECTION = 3;

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
    const h2s = kids
      .map((n, i) => (n.type === 'element' && n.tagName === 'h2' ? i : -1))
      .filter((i) => i !== -1);
    if (h2s.length < MIN_SECTIONS) return;

    const photo = secondPhoto(slug, fm.tags ?? []);
    if (!photo) return;

    // Insert immediately before the chosen heading so the image closes the
    // previous section rather than separating a heading from its text.
    const at = h2s[AFTER_SECTION];
    if (at === undefined) return;
    kids.splice(at, 0, figure(photo));
  };
}
