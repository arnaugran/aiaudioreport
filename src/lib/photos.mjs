// Shared photo selection, used by both the header Banner component and the
// rehype plugin that drops a second image into long articles. It lives here
// so the two cannot disagree about which picture belongs to which subject.
//
// Licence and provenance for every file: public/img/CREDITS.txt.

export const BY_SUBJECT = [
  { tags: ['stem separation'], photos: ['mixing-desk', 'studio-console'] },
  { tags: ['mastering'], photos: ['mastering-console', 'mastering-meters'] },
  { tags: ['samples'], photos: ['keys-dark', 'headphones-keys', 'production-setup'] },
  { tags: ['DAWs', 'plugins', 'local tools'], photos: ['daw-screens', 'desk-monitors'] },
  {
    tags: ['licensing', 'AI music', 'distribution'],
    photos: ['vocal-mic', 'vocal-mic-mono', 'mic-headphones'],
  },
];

export const FALLBACK = ['production-setup', 'desk-monitors'];

// Seeded with the FNV prime rather than the usual offset basis. Both are
// valid; this one spread the samples articles across all three of that
// group's photographs where the default put three of them on one. Tested.
export function hash(s) {
  let h = 16777619;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

/** The pool of photographs that suits an article's subject. */
export function poolFor(tags = []) {
  const subject = BY_SUBJECT.find((g) => g.tags.some((t) => tags.includes(t)));
  return subject ? subject.photos : FALLBACK;
}

/** The header photograph: stable per slug, so it never reshuffles. */
export function headerPhoto(seed, tags = []) {
  const pool = poolFor(tags);
  return pool[hash(seed) % pool.length];
}

/**
 * Photographs for further down a long article, in order. Never repeats the
 * header, and never repeats itself, so a page can only carry as many extra
 * images as its subject has spare photographs. Asking for more than that
 * returns fewer rather than the same picture twice.
 */
export function bodyPhotos(seed, tags = [], want = 1) {
  const pool = poolFor(tags);
  if (pool.length < 2 || want < 1) return [];
  const headerIndex = hash(seed) % pool.length;
  const rest = pool.filter((_, i) => i !== headerIndex);
  // Rotate the remainder by a second hash so two articles sharing a subject
  // do not place the same picture at the same point.
  const offset = hash(seed + '#body') % rest.length;
  const ordered = rest.map((_, i) => rest[(i + offset) % rest.length]);
  return ordered.slice(0, Math.min(want, ordered.length));
}
