// Which photograph belongs to which article.
//
// The rule is absolute: no photograph appears on two articles. It used to be
// a hash into a per-subject pool, which guaranteed the opposite. Twelve files
// covered thirty image slots, so the same picture opened two different pieces
// and the home page showed one of them twice in the same grid.
//
// So the map is written out rather than computed. A hash cannot promise
// uniqueness; a list can, and the check below turns a mistake into a failed
// build instead of something a reader notices first.
//
// First entry is the header. The rest are used further down a long article,
// in order, and an article that is too short to earn them simply leaves them
// unused. Licence and provenance for every file: public/img/CREDITS.txt.

export const ARTICLE_PHOTOS = {
  // Stem separation
  'ai-stem-separation-costs': ['console-warm', 'mixer-lit', 'cone-macro'],
  'izotope-rx-which-edition': ['mixing-desk', 'synth-panel', 'speakers-row'],

  // Mastering
  'landr-emastered-ozone': ['mastering-console', 'vu-vintage', 'monitor-teal'],
  'landr-pricing-unlimited-mastering': ['mastering-meters', 'channel-strip', 'console-vu'],

  // Samples and libraries
  'free-splice-alternatives': ['keys-dark', 'record-crate', 'headphones-yellow'],
  'is-splice-worth-it': ['headphones-keys', 'midi-controller', 'crate-digging'],
  'loopcloud-points-calculator': ['sampler-ko', 'record-shop'],
  'sample-packs-vs-subscription': ['drum-machine-808', 'modular-synth', 'headphones-pink'],
  'splice-vs-loopcloud-credits': ['linn-drum', 'keys-headphones', 'headphones-teal'],

  // Software and tools
  'free-daws-what-they-limit': ['daw-screens', 'studio-desk-two', 'monitor-wood'],
  'offline-ai-audio-tools': ['daw-waveform', 'desk-piano', 'engineer-desk'],
  'plugin-boutique-membership-tiers': ['production-setup', 'home-studio-corner', 'headphones-grey'],
  'ableton-live-stem-separation-edition': ['studio-console'],
  'fl-studio-stem-separation-edition': ['desk-monitors'],
  'serum-2-splice-rent-to-own': ['synth-headphones'],
  'cubase-stem-separation-edition': ['pedal-wall'],

  // Rights, licensing and releasing
  'ai-voice-cloning-rules': ['vocal-mic-mono', 'mic-popfilter', 'headphones-black'],
  'can-you-sell-suno-music': ['vocal-mic', 'mic-dark', 'control-room'],
  'can-you-upload-ai-music': ['mic-headphones', 'live-room', 'headphones-red'],
};

/** Unused files sitting in public/img, waiting for the next article. */
export const SPARE = ['pedalboard-top',
  'guitar-amp-mini', 'pedal-red', 'guitar-pedalboard', 'amp-stack', 'pedals-bokeh',
  'pedalboard-feet', 'pedal-green', 'pedal-shop', 'faders-row', 'desk-lamp-clock',
  'desk-dark-mouse', 'console-purple', 'studio-blue', 'monitor-screen',
  'console-hand'
];

// Enforced at build time. If two articles are ever given the same picture the
// build stops here and names both of them, which is the whole point.
const owner = new Map();
for (const [slug, photos] of Object.entries(ARTICLE_PHOTOS)) {
  for (const photo of photos) {
    if (owner.has(photo)) {
      throw new Error(
        `Photograph "${photo}" is assigned to both "${owner.get(photo)}" and "${slug}". ` +
          `Every article needs its own pictures: see src/lib/photos.mjs.`
      );
    }
    owner.set(photo, slug);
  }
}

/** The header photograph. Stable: it is written down, not derived. */
export function headerPhoto(seed) {
  const photos = ARTICLE_PHOTOS[seed];
  if (photos?.length) return photos[0];
  const taken = new Set([...owner.keys()]);
  const free = SPARE.filter((p) => !taken.has(p));
  if (!free.length) {
    throw new Error(
      `No photograph is assigned to "${seed}" and there are no spares left. ` +
        `Add a file to public/img, credit it in CREDITS.txt, then give it to this ` +
        `article in src/lib/photos.mjs.`
    );
  }
  return free[0];
}

/**
 * Photographs for further down a long article, in the order they were given.
 * An article with nothing left to give returns fewer, which is correct: a
 * repeated picture would look like a bug.
 */
export function bodyPhotos(seed, tags = [], want = 1) {
  if (want < 1) return [];
  return (ARTICLE_PHOTOS[seed] ?? []).slice(1, 1 + want);
}
