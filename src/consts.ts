export const SITE_NAME = 'AI Audio Report';
export const SITE_TAGLINE =
  'What AI and software audio tools cost, and what you can actually do with them.';
export const SITE_DESCRIPTION =
  'Independent, dated analysis of music production software. Real prices with the date we checked them, licence terms read from the source, and straight answers instead of rankings.';
export const PUBLISHER = 'AI Audio Report';
export const DEFAULT_BYLINE = 'AI Audio Report editorial team';
export const CONTACT_EMAIL = 'editor@aiaudioreport.com';

/** GA4 only loads when this is set AND the visitor has consented. */
export const GA4_ID: string = import.meta.env.PUBLIC_GA4_ID ?? '';

/** Phase 3 only. Ad slots render nothing while this is false. */
export const ADS_ENABLED = false;

/** Phase 2 only. No affiliate links exist on the site while this is false. */
export const AFFILIATES_ENABLED = false;

export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
  if (!path.startsWith('/')) path = '/' + path;
  return base + path;
}
