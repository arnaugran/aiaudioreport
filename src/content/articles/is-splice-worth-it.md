---
title: "Splice Creator pricing and the value of 200 monthly credits"
description: "Splice Creator costs $19.99 a month for 200 credits, not always 200 sounds. Presets and MIDI can use three credits each."
pubDate: 2026-11-08
updatedDate: 2026-11-09
pricesCheckedOn: 2026-11-08
byline: "Arnau Gran i Romero"
basis: documentation
tags: ["pricing", "samples"]
faq:
  - q: "How much does Splice cost per year?"
    a: "On the yearly billing option, Sounds is $10.84/mo and Creator is $16.67/mo, which works out at $130.08 and $200.04 for twelve months. Paying monthly instead costs $155.88 and $239.88. Splice also advertises $10.00/mo for a first year on Creator, which is a promotional rate and not the price you renew at."
  - q: "Do Splice credits expire?"
    a: "Not while you are subscribed. Splice says unused credits automatically roll over to the next month. They expire 28 days after your final billing period ends if you cancel, which is the only point at which unspent credits are actually lost."
  - q: "Do I keep the samples if I stop paying?"
    a: "Yes. Splice's plans page says every download is yours to keep, and the cancellation FAQ says you can still browse your library and re-download samples already in it. What you lose on cancelling is unspent credits, not downloaded sounds."
  - q: "Which Splice plan is the cheapest way in?"
    a: "The Sounds plan at $12.99/mo, or $10.84/mo billed yearly, with around 100 downloads a month. Splice's support pages also document a 500 credit Creator+ plan, but the plans page does not list or price it."
sources:
  - title: "Splice, Plans and pricing"
    url: "https://splice.com/plans"
    checked: 2026-11-08
  - title: "Splice support, Splice plans FAQ"
    url: "https://support.splice.com/en/articles/8652592-splice-plans-faq"
    checked: 2026-11-08
---

Splice is worth it if you use the credits. The part that catches people is what counts as a download: samples and loops usually cost one credit, while presets and MIDI can cost three.

On the Creator plan, that turns 'around 200 downloads' into 200 one-credit sounds or about 66 presets. I went through the plan page and support articles to see what else changes the maths.

## The headline number hides a three-to-one swing

Both plans advertise downloads, but Splice meters in credits, and the two are not the same
thing. The tooltip on the plans page puts it plainly: "Inside Splice these are called credits.
Most sounds cost one; MIDI and presets up to three."

So the advertised "~200 monthly downloads" on Creator is 200 credits. If you only ever grab
one shots and loops, 200 credits is 200 files. If you are mining the preset library for Serum
and Vital, 200 credits is 66 presets. The tilde in front of the number is doing real work.

That changes the price per item by a factor of three:

| What you download on Creator, $19.99/mo | Items you get | Cost each |
|---|---|---|
| Samples and loops only, 1 credit each | 200 | $0.10 |
| Presets or MIDI only, 3 credits each | 66 | $0.30 |

Neither figure is hidden. Neither is on the pricing card either.

## What it costs if you do not finish the bucket

Credits roll over month to month while you are paying, so a quiet month is banked rather than
burned. That matters, and it is more generous than it used to be. The catch arrives at the
end: Splice's cancellation FAQ says remaining credits "will expire 28 days after your final
billing period ends".

The practical effect is that unspent credits are a loan, not a saving. They are only ever
converted into sounds if your heavy months arrive before you quit. If your real average sits
well under the cap, you are paying a subscription price for a fraction of a subscription.

<figure class="figure">
<p class="f-title">What a sound really costs on Creator, at $16.67/mo billed yearly</p>
<svg viewBox="0 0 620 190" role="img" aria-label="Cost per sound on the Splice Creator yearly plan at 16.67 dollars a month: using all 200 credits costs 0.08 dollars per sound, 100 credits costs 0.17, 50 credits costs 0.33, and 20 credits costs 0.83.">
  <text class="lab" x="0" y="26">200 a month, the cap</text>
  <rect class="bar-good" x="196" y="15" width="33" height="14" rx="3"/>
  <text class="val" x="237" y="26">$0.08 each</text>
  <text class="lab" x="0" y="66">100 a month</text>
  <rect class="bar-good" x="196" y="55" width="66" height="14" rx="3"/>
  <text class="val" x="270" y="66">$0.17 each</text>
  <text class="lab" x="0" y="106">50 a month</text>
  <rect class="bar-catch" x="196" y="95" width="132" height="14" rx="3"/>
  <text class="val" x="336" y="106">$0.33 each</text>
  <text class="lab" x="0" y="146">20 a month</text>
  <rect class="bar-catch" x="196" y="135" width="330" height="14" rx="3"/>
  <text class="val" x="534" y="146">$0.83 each</text>
  <line class="rule" x1="0" y1="166" x2="620" y2="166"/>
  <text class="lab" x="0" y="185">Same subscription, same price. Only your usage moves.</text>
</svg>
<figcaption>The monthly fee divided by the credits actually spent, using Splice's published yearly rate for Creator. Rollover softens a single quiet month, but not a quiet year. Prices read from splice.com/plans on 8 November 2026.</figcaption>
</figure>

## The plans page is not the full list

Splice's plans page offers exactly two options. Its own support documentation describes more
than that.

| Plan | Monthly credits | Where it appears |
|---|---|---|
| Sounds | ~100 | Plans page, priced at $12.99/mo |
| Creator | ~200 | Plans page, priced at $19.99/mo |
| Sounds+ | 100 | Support FAQ only |
| Creator+ | 500 | Support FAQ only, no price given |
| INSTRUMENT | No monthly refills | Support FAQ only |
| DAW integration plans | 100 intro credits, no refills | Support FAQ only |

The naming does not line up either. The plans page sells a 100 credit tier called Sounds; the
support FAQ describes a 100 credit tier called Sounds+. I couldn't find a price for Creator+
anywhere on the plans page, so if 500 credits a month is what you need, you will have to ask
Splice what it costs.

### The two pages also disagree about pausing

This one is worth knowing before you click anything. Splice's support FAQ says credits "will
roll over to the next month unless you decide to pause or cancel your subscription". The
cancellation FAQ on the plans page says you can "put your plan on hold for up to two months if
you do not wish to lose the credits you've accrued".

One says pausing stops rollover. The other offers pausing as the way to protect accrued
credits. I couldn't resolve which governs from the published pages, and I won't
guess at it, because the answer decides whether a two month pause costs you a stockpile of
credits. Ask support in writing before pausing a large balance.

## The annual discount is smaller than the badge

The billing toggle on the plans page carries a green "SAVE 50%" badge. The 50% refers to the
first year promotional rate on Creator, $10.00/mo against the $19.99 monthly list price.

The rate you actually renew at is $16.67/mo. Against $19.99 paid monthly, that is a saving of
about 16.6%, which is the same proportion on both plans. It is a real discount and it is worth
taking. It is not half price.

| Plan | Billed monthly | Billed yearly | Twelve months, monthly | Twelve months, yearly |
|---|---|---|---|---|
| Sounds | $12.99/mo | $10.84/mo | $155.88 | $130.08 |
| Creator | $19.99/mo | $16.67/mo | $239.88 | $200.04 |

Both annual options work out at a shade under two months free, which is the ordinary shape of
software annual billing. I found the same two month
gap on every [Loopcloud tier](/articles/splice-vs-loopcloud-credits/).

## What you keep, which is the part Splice gets right

Everything you download stays yours. The plans page states it twice, as "Yours forever" and
"100% royalty free", and the cancellation FAQ confirms you can browse and re-download anything
already in your library after you stop paying. Splice also says its catalogue is human made
and that it will not train AI on your work.

For a subscription, that is an unusually clean deal. You are renting the search and the
catalogue, not the files. Nothing you have already used in a release becomes a problem later
if you cancel, which is not something every sample subscription can say.

## Who should not subscribe

If you make music in bursts, a month on and three months off, this is the wrong shape of
product for you. You will pay through the quiet months to protect a credit balance, or cancel
and watch it expire 28 days later. Buying individual packs outright suits that pattern better.

If you need fewer than about 100 sounds a month, start on Sounds at $12.99 and move up only
when you actually hit the ceiling. Upgrading is immediate, and Splice says your credits roll
over when you do, though note that upgrading also resets your billing date to the day you
upgrade.

If you are downloading steadily and mostly taking loops and one shots rather than presets,
Creator on yearly billing is the cheapest sound on offer here at around eight cents, and it is
straightforwardly worth the money.

The one thing not to do is buy the annual plan on the strength of the 50% badge. Work out your
real monthly download count first, honestly, then pick the tier that sits just above it.
