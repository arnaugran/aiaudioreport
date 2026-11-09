---
title: "Loopcloud Points Explained: How Many You Actually Need"
description: "Plans are sold in points, not sounds, and the exchange rate changes with the file type. Work out your own monthly number before you commit to a tier."
pubDate: 2026-11-08
updatedDate: 2026-11-09
pricesCheckedOn: 2026-11-08
byline: "Arnau Gran i Romero"
basis: documentation
tags: ["pricing", "samples"]
faq:
  - q: "How many points is a Loopcloud loop?"
    a: "Usually two. A one shot, meaning a drum hit or a single synth note, is one point. Longer files cost more, and Loopmasters states certain files such as vocals can be priced up to eight points."
  - q: "Which Loopcloud plan is cheapest per sound?"
    a: "Professional, at 600 points for EUR 22.95 a month, works out lowest per point of the monthly plans. But cheapest per point only matters if you spend the points, and unspent points roll over rather than expiring, so the right plan is the one that matches what you actually download."
  - q: "Do Loopcloud points expire if I stop paying?"
    a: "No. Loopcloud states that unspent points will always roll over and that you will not lose points or purchases if you cancel. They are there if you resubscribe."
sources:
  - title: "Loopmasters help centre, How does the points pricing work?"
    url: "https://help.loopmasters.com/hc/en-us/articles/27012738748444-How-does-the-points-pricing-work"
    checked: 2026-11-08
  - title: "Loopcloud, subscription plans and FAQ"
    url: "https://www.loopcloud.com/cloud/subscriptions"
    checked: 2026-11-07
---

A Loopcloud one-shot costs one point, a loop usually costs two, and some vocal files cost as many as eight. That spread makes the advertised monthly allowance hard to translate into the number of sounds you'll actually take home.

Put in a rough month below and the calculator will estimate your points. It uses the published prices and point costs linked in this article.

<div class="stats">
<div class="stat"><b>1 pt</b><span>One shot: a drum hit, a single synth note</span></div>
<div class="stat"><b>2 pts</b><span>A loop, usually</span></div>
<div class="stat"><b>up to 8</b><span>Longer files. Loopmasters names vocals specifically</span></div>
</div>

So a 300-point plan is 300 one shots, or 150 loops, or somewhere around 37
vocal files. Same plan, three very different libraries.

## Work out your month

Put in what a typical month looks like for you. Everything is calculated from
the published point costs and plan prices above, in your browser. Nothing is
sent anywhere.

<div class="calc">
  <div class="calc-row">
    <label for="c-osh">One shots per month</label>
    <input type="number" id="c-osh" min="0" max="2000" step="1" value="40" inputmode="numeric">
  </div>
  <div class="calc-row">
    <label for="c-loop">Loops per month</label>
    <input type="number" id="c-loop" min="0" max="2000" step="1" value="60" inputmode="numeric">
  </div>
  <div class="calc-row">
    <label for="c-voc">Vocal or long files per month</label>
    <input type="number" id="c-voc" min="0" max="500" step="1" value="4" inputmode="numeric">
  </div>
  <p class="calc-out" id="c-points" aria-live="polite">Enter your numbers above</p>
  <p class="calc-verdict" id="c-verdict"></p>
  <p class="calc-note" id="c-note"></p>
</div>

<noscript>

The calculator needs JavaScript. The arithmetic is simple enough to do by hand:
multiply one shots by 1, loops by 2 and vocal files by 8, add them up, and
compare the total against the plan allowances in the table below.

</noscript>

<script is:inline>
(function () {
  var PLANS = [
    { name: 'Artist',       pts: 100, mo: 9.95,  yr: 99.50 },
    { name: 'Studio',       pts: 300, mo: 14.95, yr: 149.50 },
    { name: 'Professional', pts: 600, mo: 22.95, yr: 229.50 }
  ];
  var ids = ['c-osh', 'c-loop', 'c-voc'];
  var out = document.getElementById('c-points');
  var verdict = document.getElementById('c-verdict');
  var note = document.getElementById('c-note');
  if (!out) return;

  function num(id) {
    var v = parseInt(document.getElementById(id).value, 10);
    return isFinite(v) && v > 0 ? v : 0;
  }
  function eur(n) { return '€' + n.toFixed(2); }

  function update() {
    var osh = num('c-osh'), loop = num('c-loop'), voc = num('c-voc');
    var pts = osh * 1 + loop * 2 + voc * 8;
    var sounds = osh + loop + voc;
    out.textContent = pts.toLocaleString() + ' points a month, for ' +
      sounds.toLocaleString() + ' sound' + (sounds === 1 ? '' : 's');

    var fit = PLANS.filter(function (p) { return p.pts >= pts; })[0];
    if (!fit) {
      verdict.textContent = 'More than Professional allows in a month (600 points).';
      note.textContent = 'Points roll over, so a cheaper plan still gets you there over ' +
        'several months. For this volume every month you would need top-ups on top of Professional.';
      return;
    }
    var perSound = sounds ? fit.mo / sounds : 0;
    verdict.textContent = fit.name + ' covers it: ' + fit.pts + ' points for ' +
      eur(fit.mo) + '/month, or ' + eur(fit.yr) + ' a year.';
    var spare = fit.pts - pts;
    note.textContent =
      (sounds ? 'That is about ' + eur(perSound) + ' per sound on the monthly plan. ' : '') +
      (spare > 0
        ? spare + ' points a month spare, and unspent points roll over rather than expiring.'
        : 'That uses the allowance almost exactly.');
  }
  ids.forEach(function (id) {
    var el = document.getElementById(id);
    el.addEventListener('input', update);
    el.addEventListener('change', update);
  });
  update();
})();
</script>

## The plans, for reference

<div class="tablewrap">

| Plan | Monthly | Annual | Points |
| --- | --- | --- | --- |
| Artist | €9.95/mo | €99.50 (€8.30/mo) | 100/mo, 1,200/yr |
| Studio | €14.95/mo | €149.50 (€12.46/mo) | 300/mo, 3,600/yr |
| Professional | €22.95/mo | €229.50 (€19.13/mo) | 600/mo, 7,200/yr |

</div>

Every annual price is exactly ten months of the monthly price, and the annual
point allowance is exactly twelve times the monthly one. So if you are
confident you will still want it in a year, annual is two months free with no
catch I could find.

## Three things the calculator cannot tell you

**Points roll over.** Loopcloud states unspent points "will always roll over"
and that you will not lose them if you cancel. That changes the maths: you do
not need a plan that covers your busiest month, you need one that covers your
average. Sizing for the peak is the most common way to overpay here.

**Packs are priced differently.** A full pack costs the same in points as it
costs in money on the Loopmasters site, and if you already bought items from
that pack, the price drops by what you already spent. So pack buyers should
work from the pack prices, not from per-sample arithmetic.

**"Up to 8 points" is a ceiling, not a rate.** Loopmasters says certain files
such as vocals can be priced up to 8 points. The calculator uses 8 for vocal
files, which is deliberately pessimistic. Your real number will often be
lower, and the app shows each file's cost before you spend.

## If you are choosing between services

Splice prices the same thing differently: every sample is one credit, whatever
it is. That makes it predictable and makes loops relatively cheap, while
Loopcloud rewards one shots and penalises long vocal files. I went through
both, and what happens to your balance when you stop paying, in
[Splice vs Loopcloud](/articles/splice-vs-loopcloud-credits/).

I checked the prices on 7 and 8 November 2026. [Let me know](/contact/) if they've changed.
