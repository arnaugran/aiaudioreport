import { getCollection } from 'astro:content';

// Search index for the articles page. Built at build time so there is no
// server to query and nothing is sent anywhere when someone types.
//
// Body text is reduced to a deduplicated token set rather than shipped whole.
// Full bodies would be roughly 120 KB; the token set is a fraction of that and
// loses nothing that matters for matching, because a word either appears in an
// article or it does not. Snippets shown in the results come from the
// description, which is already written to be a summary.

const STOP = new Set(
  `the a an and or but if then than that this these those of to in on at by for with from as is
   are was were be been being it its do does did not no nor so such own same too very can will
   just don should now you your we our us they them their he she his her what which who whom
   when where why how all any both each few more most other some only own over under again
   further once here there about into out up down off above below between through during before
   after also has have had having would could may might must shall into per via`
    .split(/\s+/)
);

function tokenise(text) {
  return (text.toLowerCase().match(/[a-z0-9][a-z0-9+.\-]{1,}/g) || []).filter(
    (w) => w.length >= 3 && !STOP.has(w)
  );
}

function stripMarkdown(md) {
  return md
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/[#>*_`|]/g, ' ');
}

export async function GET() {
  const articles = (await getCollection('articles', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  const docs = articles.map((a) => {
    const body = stripMarkdown(a.body || '');
    // Headings carry more signal than prose, so they are kept as text and
    // scored separately rather than folded into the token bag.
    const headings = (a.body?.match(/^#{2,3}\s+(.+)$/gm) || [])
      .map((h) => h.replace(/^#+\s+/, '').trim())
      .join(' ');
    const bodyTokens = [...new Set(tokenise(body))].sort();
    return {
      s: a.id,
      t: a.data.title,
      d: a.data.description,
      g: a.data.tags,
      h: headings,
      b: bodyTokens.join(' '),
      // Formatted here rather than in the browser: the result row shows it
      // as written everywhere else on the site, not as an ISO string.
      p: a.data.pricesCheckedOn
        ? a.data.pricesCheckedOn.toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          })
        : null,
    };
  });

  return new Response(JSON.stringify(docs), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
}
