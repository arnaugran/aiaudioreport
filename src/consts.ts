export const SITE_NAME = 'AI Audio Report';
export const SITE_TAGLINE =
  'What AI and software audio tools cost, and what you can actually do with them.';
export const SITE_DESCRIPTION =
  'Real prices for AI and music production software, each with the date we checked it, plus licence terms read from the source. Independent and dated, not ranked.';
export const PUBLISHER = 'AI Audio Report';
export const DEFAULT_BYLINE = 'AI Audio Report editorial team';
export const CONTACT_EMAIL = 'editor@aiaudioreport.com';

/** GA4 only loads when this is set AND the visitor has consented. */
export const GA4_ID: string = import.meta.env.PUBLIC_GA4_ID ?? '';

/**
 * AdSense publisher ID. Present so the markup is ready, but nothing is
 * requested from Google until ADS_ENABLED is true AND the visitor consents.
 */
export const ADSENSE_CLIENT = 'ca-pub-3517106202087026';

/**
 * Phase 3 only. Ad slots render nothing while this is false, the ad script is
 * never injected, and the CSP does not open up to Google's ad hosts.
 *
 * DO NOT flip this until BOTH are true:
 *  1. AdSense has approved the site, and
 *  2. a Google-certified, IAB TCF integrated CMP is live. Since 16 Jan 2024
 *     Google requires one to serve personalised ads to EEA and UK visitors.
 *     The hand-built banner in CookieConsent.astro is NOT certified and never
 *     will be, so without a certified CMP this traffic is limited to
 *     non-personalised or limited ads.
 */
export const ADS_ENABLED = false;

/**
 * Ad unit IDs, created in AdSense under Ads > By ad unit. An empty string
 * means that slot renders nothing even when ADS_ENABLED is true, so the site
 * stays safe if ads are switched on before the units exist.
 */
export const AD_SLOTS = {
  articleEnd: '',
  articleFooter: '',
};

/** True once a GA4 measurement ID is actually configured. */
export const ANALYTICS_CONFIGURED = Boolean(import.meta.env.PUBLIC_GA4_ID ?? '');

/** Phase 2 only. No affiliate links exist on the site while this is false. */
export const AFFILIATES_ENABLED = false;

export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
  if (!path.startsWith('/')) path = '/' + path;
  return base + path;
}
