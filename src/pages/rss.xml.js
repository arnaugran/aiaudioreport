import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_NAME, SITE_DESCRIPTION } from '../consts';

export async function GET(context) {
  const articles = (await getCollection('articles', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
  return rss({
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    site: context.site,
    // pubDate is the real publication date from frontmatter, never a build
    // timestamp, so it does not move when the site is rebuilt.
    //
    // pricesCheckedOn is exposed as custom data because it, not pubDate, is
    // the date that decides whether an article has gone stale. Without it a
    // freshness check reading this feed measures the wrong thing and can
    // never fire. Articles with no prices omit the element entirely.
    items: articles.map((a) => ({
      title: a.data.title,
      description: a.data.description,
      pubDate: a.data.pubDate,
      link: `${base}/articles/${a.id}/`,
      customData: [
        a.data.pricesCheckedOn
          ? `<pricesCheckedOn>${a.data.pricesCheckedOn.toISOString().slice(0, 10)}</pricesCheckedOn>`
          : '',
        a.data.updatedDate
          ? `<updatedDate>${a.data.updatedDate.toISOString().slice(0, 10)}</updatedDate>`
          : '',
      ].join(''),
    })),
  });
}
