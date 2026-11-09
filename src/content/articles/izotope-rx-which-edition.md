---
title: "Which iZotope RX Edition Has Music Rebalance?"
description: "The feature people buy RX for starts at the 439 euro tier, not the 109 euro one. And if stems are all you need, iZotope sells a cheaper app that does just that."
pubDate: 2026-11-08
updatedDate: 2026-11-09
pricesCheckedOn: 2026-11-08
byline: "Arnau Gran i Romero"
basis: documentation
tags: ["pricing", "stem separation"]
faq:
  - q: "Does RX Elements do stem separation?"
    a: "No. iZotope lists RX 12 Elements' key features as Repair Assistant, Voice De-noise, De-click and Adaptive or Static De-hum, with De-reverb and De-clip described in the body copy. Music Rebalance is not among them. If you buy Elements at 109 euros expecting to split a mix into stems, you have bought the wrong thing."
  - q: "What is the cheapest RX edition with Music Rebalance?"
    a: "Standard, at 439 euros. Its product copy describes splitting audio into stems with Stems View via Scene Rebalance, Music Rebalance or Dialogue Isolate. That is a 330 euro step up from Elements."
  - q: "Is there a cheaper iZotope option for stem separation?"
    a: "Photon, at 284.25 euros on sale from 379 euros when I looked. It is a standalone app and ARA2 plugin built specifically for stem separation and noise removal, with 12 models, and iZotope states it runs locally on your GPU with no uploads."
  - q: "What does RX Advanced add?"
    a: "Four things Standard does not have: Scene Rebalance, Ambience Match, De-rustle and Trim Silence. All four are film and television post-production tools, so for music work the 1,060 euro gap between Standard and Advanced buys nothing you would open."
sources:
  - title: "iZotope, RX 12 Elements"
    url: "https://www.izotope.com/products/rx-elements"
    checked: 2026-11-08
  - title: "iZotope, RX 12 Standard"
    url: "https://www.izotope.com/products/rx-standard"
    checked: 2026-11-08
  - title: "iZotope, RX 12 Advanced"
    url: "https://www.izotope.com/products/rx-advanced"
    checked: 2026-11-08
  - title: "iZotope, Photon"
    url: "https://www.izotope.com/products/photon"
    checked: 2026-11-08
---

RX 12 Elements doesn't include Music Rebalance. The feature starts at RX Standard, listed at €439 when I checked. If stem separation is all you need, iZotope's separate Photon app costs less.

Here's what each option includes, and what the extra money buys if you're considering Advanced.

## The ladder, and where stems appear on it

<figure class="figure">
<p class="f-title">iZotope prices, and which of them separates a mix into stems</p>
<svg viewBox="0 0 620 210" role="img" aria-label="iZotope pricing: RX 12 Elements 109 euros with no Music Rebalance, Photon 284.25 euros which does stem separation, RX 12 Standard 439 euros which includes Music Rebalance, and RX 12 Advanced 1499 euros.">
  <text class="lab" x="0" y="24">RX 12 Elements</text>
  <line class="zero" x1="186" y1="13" x2="202" y2="29"/>
  <line class="zero" x1="202" y1="13" x2="186" y2="29"/>
  <text class="val" x="214" y="24">&#8364;109, no stem separation</text>
  <text class="lab" x="0" y="66">Photon</text>
  <rect class="bar-good" x="186" y="55" width="63" height="14" rx="3"/>
  <text class="val" x="257" y="66">&#8364;284.25, stems, runs locally</text>
  <text class="lab" x="0" y="108">RX 12 Standard</text>
  <rect class="bar-good" x="186" y="97" width="97" height="14" rx="3"/>
  <text class="val" x="291" y="108">&#8364;439, adds Music Rebalance</text>
  <text class="lab" x="0" y="150">RX 12 Advanced</text>
  <rect class="bar-catch" x="186" y="139" width="330" height="14" rx="3"/>
  <text class="val" x="524" y="150">&#8364;1,499</text>
  <line class="rule" x1="0" y1="172" x2="620" y2="172"/>
  <text class="lab" x="0" y="194">Bar length is price. The cheapest edition is the one that cannot do the job people buy RX for.</text>
  <text class="lab" x="0" y="208">Prices read from iZotope's own product pages on 8 November 2026. Photon was on sale from &#8364;379.</text>
</svg>
<figcaption>RX 12 Elements, Standard and Advanced, plus Photon, priced in euros on iZotope's own store on 8 November 2026.</figcaption>
</figure>

**RX 12 Elements, €109.** iZotope summarises it as six plugins and lists the key features as
Repair Assistant, Voice De-noise, De-click and Adaptive or Static De-hum. The body copy adds
De-reverb and De-clip. Music Rebalance is not mentioned anywhere in its own feature
descriptions.

**RX 12 Standard, €439.** Here the product copy says you can "Visually split your audio into
stems with Stems View (via Scene Rebalance, Music Rebalance, or Dialogue Isolate), then apply
any RX tool exactly where you need it."

**RX 12 Advanced, €1,499.** Key features are listed as Dialogue Isolate, Ambience Match,
Spectral Repair, stem separation and advanced noise reduction, and iZotope files it under
audio post production rather than music.

## The thing that makes the ladder look silly

iZotope also sells Photon, which was €284.25 when I looked, reduced from €379. It is a
standalone app and an ARA2 plugin, and it exists to do exactly the job that sends people to
RX in the first place: "splits mixes into stems and cleans noisy audio".

It ships 12 machine learning models, can split up to six voices apart, and iZotope's own
summary says it "Runs locally on your GPU. No uploads, no cutoffs, no interruptions."

So if stem separation is what you want, the cheapest iZotope product that does it is not an
RX edition. Photon at €284.25 undercuts RX Standard by about €155, and the gap against
Advanced is over €1,200.

That local-processing claim matters beyond price. Most of the convenient stem separators
upload your audio to someone else's server, which is a problem if the material is not yours
to share. I went through which tools avoid that in
[which AI audio tools run offline](/articles/offline-ai-audio-tools/).

## Before you spend anything

The uncomfortable comparison is with free software. Demucs publishes 9.00 dB SDR on the MUSDB
HQ test set for its fine-tuned v4 model, which is the highest published separation figure
among the tools I looked at, and it costs nothing. I set that out with the hardware
requirements in
[AI Stem Separation Pricing](/articles/ai-stem-separation-costs/).

I haven't compared Photon's output quality against Demucs, and I won't guess.
iZotope publishes no SDR figure I could find. What I can say is that the paid products buy
you a graphical interface, an ARA2 plugin that sits in your DAW, and no command line, and that
those are the things you are actually paying for rather than measured superiority.

## What €1,060 more actually buys

The jump from Standard at €439 to Advanced at €1,499 is the biggest number in
this comparison, so it is worth knowing exactly what crosses that line.

Reading iZotope's own edition comparison, Advanced adds **four** things that
Standard does not have:

| Advanced only | What it is for |
|---|---|
| Scene Rebalance | Separating dialogue, music and effects in a finished scene |
| Ambience Match | Matching room tone across edits |
| De-rustle | Removing clothing noise from lavalier mics |
| Trim Silence | Bulk-trimming silence from long recordings |

Every one of those is a film and television post-production tool. None of them
touches music. If you are mastering tracks or pulling stems out of a mix, the
€1,060 between Standard and Advanced buys you nothing you will open.

The same table settles the Elements question from the other direction.
Elements carries seven modules: Repair Assistant, Voice De-noise, De-click,
De-clip, De-hum, De-reverb and the improved Repair Assistant neural nets.
Stems View, Music Rebalance and Dialogue Isolate all appear first at Standard.

One caveat on price rather than features. The €284.25 I quote for Photon was
a sale price, and sales end. The regular price on the same page was €379, and
that is the number to plan around.

## My pick

Do not buy RX Elements for stem separation. At €109 it is a reasonable noise repair toolkit
and a poor stem separator, because it is not a stem separator at all.

If stem separation is the whole reason you are here, look at Photon before RX Standard. It is
cheaper, it is built for the job, and it runs on your own machine.

If you need spectral repair and noise reduction as well, Standard at €439 is the edition where
RX becomes the tool people describe, and the €330 over Elements buys a genuinely different
program rather than a few extra presets.

And try Demucs first if you have a GPU and any tolerance for a command line. It is free, and
on the one published measurement anyone has put a number to, it wins.
