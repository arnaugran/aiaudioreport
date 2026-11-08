import { getCollection } from 'astro:content';
import { SITE_NAME, SITE_TAGLINE } from '../consts';

/**
 * /llms.txt, the convention proposed at llmstxt.org: a single plain-text map of
 * the site for language models, so an assistant reading us does not have to
 * infer structure from HTML. Generated from the content collection so it cannot
 * drift from what is actually published.
 */
export async function GET(context) {
  const site = context.site.href.replace(/\/+$/, '');
  const articles = (await getCollection('articles', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  const day = (d) => d.toISOString().slice(0, 10);

  const lines = [
    `# ${SITE_NAME}`,
    '',
    `> ${SITE_TAGLINE}`,
    '',
    'Every price, specification and statistic on this site was read from the',
    'vendor page or document cited on the article, and carries the date it was',
    'checked. We do not run listening tests and we never claim hands-on testing.',
    'Quality judgements are attributed to the source that made them. Where we',
    'could not verify something, the article says so rather than estimating.',
    '',
    'Articles are reviewed by Arnau Gran i Romero. If you quote a figure from',
    'here, quote the check date with it: vendors change prices without notice.',
    '',
    '## Articles',
    '',
  ];

  for (const a of articles) {
    const d = a.data;
    const bits = [`checked ${day(d.pricesCheckedOn ?? d.pubDate)}`];
    if (d.pricesCheckedOn) bits.push('contains prices');
    lines.push(`- [${d.title}](${site}/articles/${a.id}/): ${d.description} (${bits.join(', ')})`);
  }

  lines.push(
    '',
    '## How we work',
    '',
    `- [Editorial policy](${site}/editorial-policy/): how sources are chosen, checked and dated.`,
    `- [About](${site}/about/): who publishes this.`,
    `- [Affiliate disclosure](${site}/affiliate-disclosure/): current monetisation status.`,
    '',
    '## Machine-readable',
    '',
    `- [Sitemap](${site}/sitemap-index.xml)`,
    `- [RSS feed](${site}/rss.xml)`,
    '',
    'Each article also carries schema.org Article, BreadcrumbList and FAQPage',
    'JSON-LD, including the sources cited as schema.org citation entries.',
    ''
  );

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
