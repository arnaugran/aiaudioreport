# AI Audio Report

Static site, Astro 7, deployed to GitHub Pages by GitHub Actions on push to `main`.

## Local

```sh
npm install
npm run dev      # http://localhost:4321/aiaudioreport/
npm run build    # -> dist/
```

## Host configuration

Two env vars control where the site thinks it lives. They are set in
`.github/workflows/deploy.yml`.

| Var | Temporary (now) | After the domain is bought |
|---|---|---|
| `SITE_URL` | `https://arnaugran.github.io` | `https://<domain>` |
| `BASE_PATH` | `/aiaudioreport` | `/` |

Moving to the custom domain: change those two values, add a `public/CNAME` file
containing the bare domain, point DNS at GitHub Pages, and set the custom
domain in the repo's Pages settings. GitHub then 301-redirects the old
`github.io` URLs automatically, so nothing that was indexed is lost.

Moving to Cloudflare Pages instead: build command `npm run build`, output
directory `dist`, same two env vars. The output is plain static files, so
nothing else changes.

## Content rules enforced by the build

`src/content.config.ts` will fail the build if an article:

- has a title over 70 characters or a meta description outside 50–165,
- declares no `sources` (at least one, each with a URL and a `checked` date),
- omits `basis`, which states what the analysis rests on.

### Headlines

A title asks the question or names the subject. It never answers it. "Which
iZotope RX Edition Has Music Rebalance?" is the headline; "Not Elements" is
the article. Giving the answer away in the title is the one thing the owner
has asked twice not to do, so it is written here rather than left to taste.

A second clause is welcome when it promises the answer without spending it:
"Is Splice Worth It? What $19.99 a Month Actually Buys" works, and so does
"Splice vs Loopcloud: What You Keep If You Cancel".

The meta description must not restate the article's opening sentence. The
snippet in the results and the first line of the page are read seconds apart,
and repeating yourself there wastes both.

`pricesCheckedOn` is required in practice for any article quoting prices — the
methodology box renders the date from it.

## Monetisation switches

Both are off, in `src/consts.ts`:

- `AFFILIATES_ENABLED = false` — `<AffiliateLink>` renders a plain link with no
  tracking, and the disclosure box states the page earns nothing. Turning it on
  adds `rel="sponsored nofollow"` and switches the disclosure wording.
- `ADS_ENABLED = false` — `<AdSlot>` renders nothing at all: no markup, no
  reserved space, no layout shift. Phase 3 only, and only after re-fetching the
  ad networks' current requirements.

`ads.txt` is deliberately absent. An ads.txt listing no authorised sellers is
the correct state while no ad partner exists; the file goes in `public/ads.txt`
when there is something true to put in it.

## Analytics

`PUBLIC_GA4_ID` env var. Unset, `<Analytics>` renders nothing. Set, the GA4
script is still only injected after the visitor presses Accept — never on load.
