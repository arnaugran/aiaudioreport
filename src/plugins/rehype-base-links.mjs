/**
 * Rewrites root-relative links and image sources in markdown so they respect
 * Astro's `base`. Lets articles be written with clean `/articles/foo/` links
 * that keep working whether the site is served from a subpath or a root domain.
 */
// The fallback must match the one in astro.config.mjs. It used to be
// '/aiaudioreport', left over from the GitHub Pages subpath, while the config
// already defaulted to '/'. CI sets BASE_PATH explicitly so production was
// never wrong, but any build without it rewrote every markdown link in an
// article to a path that does not exist.
const BASE = (process.env.BASE_PATH ?? '/').replace(/\/+$/, '');

function walk(node, visit) {
  visit(node);
  for (const child of node.children ?? []) walk(child, visit);
}

export function rehypeBaseLinks() {
  return (tree) => {
    if (!BASE) return;
    walk(tree, (node) => {
      if (node.type !== 'element' || !node.properties) return;
      for (const attr of ['href', 'src']) {
        const v = node.properties[attr];
        if (typeof v === 'string' && v.startsWith('/') && !v.startsWith('//') && !v.startsWith(BASE + '/')) {
          node.properties[attr] = BASE + v;
        }
      }
    });
  };
}
