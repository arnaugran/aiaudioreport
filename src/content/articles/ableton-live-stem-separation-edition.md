---
title: "Which Ableton Live Edition Has Stem Separation?"
description: "Live 12.3 added Stem Separation, but Intro at $99, Standard at $349 and Suite at $749 do not all get it. What the trial, rent-to-own and Photon change."
pubDate: 2026-11-09
pricesCheckedOn: 2026-11-09
byline: "Arnau Gran i Romero"
basis: documentation
tags: ["pricing", "stem separation", "DAW"]
faq:
  - q: "Does Ableton Live Standard have stem separation?"
    a: "No. Ableton's Compare Editions page marks Stem Separation as Suite only, with a cross against both Intro and Standard, and its Stem Separation FAQ says the feature is included in Live Suite from version 12.3 onwards."
  - q: "Does Ableton stem separation need an internet connection?"
    a: "No. The Live 12 manual says the model has been optimised for local use, so you can extract stems inside Live without being connected to the internet. On Windows and Intel Macs it uses only the CPU; on Apple silicon Macs it also uses the GPU."
  - q: "Can I try Ableton stem separation for free?"
    a: "Yes, through the Live 12 Suite trial, which runs for 30 days, needs no credit card and lets you save and export. After it expires you can still open Sets made in the trial but can no longer save or export them."
  - q: "How many stems does Ableton Live split a song into?"
    a: "Four: Vocals, Drums, Bass and Others. Others holds everything not detected as vocals, drums or bass. You can choose which of the four to create and merge two or three of them onto a single track."
sources:
  - title: "Ableton, Compare Live 12 Editions"
    url: "https://www.ableton.com/en/live/compare-editions/"
    checked: 2026-11-09
  - title: "Ableton, Shop: Live 12 (prices and rent-to-own FAQ, US store)"
    url: "https://www.ableton.com/en/shop/live/"
    checked: 2026-11-09
  - title: "Ableton, Stem Separation in Ableton Live 12.3 (product page and FAQ)"
    url: "https://www.ableton.com/en/stem-separation-in-ableton-live/"
    checked: 2026-11-09
  - title: "Ableton, Live 12 Reference Manual, chapter 22: Stem Separation"
    url: "https://www.ableton.com/en/live-manual/12/stem-separation/"
    checked: 2026-11-09
  - title: "Ableton, Live 12 Suite free trial and trial FAQ"
    url: "https://www.ableton.com/en/trial/"
    checked: 2026-11-09
  - title: "iZotope, Photon"
    url: "https://www.izotope.com/products/photon"
    checked: 2026-11-09
draft: false
---

Only Suite. Ableton's own edition comparison puts a cross against Intro and Standard on the Stem Separation row, and the feature's FAQ says it is "included in Ableton Live Suite, from version 12.3 onwards". If you own Standard and updated to 12.3 hoping to find a new menu item, it was never coming.

That makes Stem Separation the most expensive single checkbox in Ableton's range, and the rest of this piece is about whether it is worth paying for on its own.

## Three editions, one of them separates

I read the prices from Ableton's US store on 9 November 2026. Ableton shows upgrade prices only to logged-in owners, so the figures below are for new licences.

<figure class="figure">
<p class="f-title">Live 12 prices, and which edition separates a mix into stems</p>
<svg viewBox="0 0 620 200" role="img" aria-label="Ableton Live 12 prices on the US store: Intro 99 dollars with no stem separation, Standard 349 dollars with no stem separation, Suite 749 dollars with stem separation.">
  <text class="lab" x="0" y="26">Live 12 Intro</text>
  <rect class="bar-catch" x="186" y="15" width="44" height="14" rx="3"/>
  <text class="val" x="238" y="26">$99, no stem separation</text>
  <text class="lab" x="0" y="70">Live 12 Standard</text>
  <rect class="bar-catch" x="186" y="59" width="154" height="14" rx="3"/>
  <text class="val" x="348" y="70">$349, no stem separation</text>
  <text class="lab" x="0" y="114">Live 12 Suite</text>
  <rect class="bar-good" x="186" y="103" width="330" height="14" rx="3"/>
  <text class="val" x="524" y="114">$749, stems</text>
  <line class="rule" x1="0" y1="140" x2="620" y2="140"/>
  <text class="lab" x="0" y="164">Bar length is price. The feature sits behind a $400 step from Standard.</text>
  <text class="lab" x="0" y="184">New licence prices from ableton.com/en/shop/live, US store, 9 November 2026.</text>
</svg>
<figcaption>Intro, Standard and Suite on Ableton's own store. Stem Separation availability is taken from Ableton's Compare Editions page.</figcaption>
</figure>

| Edition | New licence | Audio and MIDI tracks | Stem Separation |
|---|---|---|---|
| Live 12 Intro | $99 | 16 | No |
| Live 12 Standard | $349 | Unlimited | No |
| Live 12 Suite | $749 | Unlimited | Yes |

Splice integration, the other headline feature of Live 12.3, is ticked on all three editions. So 12.3 is not a Suite-only update. Stem Separation is the part of it Ableton chose to hold back.

## What the feature actually does

The Live 12 manual describes it plainly. Any mono or stereo audio file splits into four stems: Vocals, Drums, Bass and Others, where Others is everything not detected as the first three. You right-click a clip or a file in the browser, pick Separate Stems to New Audio Tracks, tick the stems you want, and Live drops each one onto its own track inside a new Group Track.

A few details from the manual that are easy to miss:

- You can merge two or three stems onto one track, but not one or all four.
- There are two modes. High Speed does everything in one pass. High Quality runs Vocals, Drums and Bass through their own dedicated passes and builds Others from what is left, which the manual says scores a higher Signal-to-Distortion Ratio at the cost of time.
- In High Quality mode, leaving Others out saves time. Including it does not, because every part has to be processed to work out the remainder.
- The stem files are written into the project folder under Samples, Processed, Stems, at 44.1 kHz and the same bit depth as the source.

That last point matters if you work at 48 kHz or higher. Whatever your session rate, the stems come out at 44.1.

Ableton's product page says the separation is "powered by algorithms from Music AI, the creators of Moises". I have not compared its output against anything, and Ableton publishes no SDR figure for it, only the statement that High Quality scores higher than High Speed. So I make no quality claim either way.

## It runs on your machine, which is the good news

The manual says the model "has been optimized for local use", so you can separate stems "without being connected to the internet or needing to install any other external tools". The product page says the same thing in marketing language: "everything runs locally".

That is the right design for anyone separating material they do not own outright. A client's unreleased mix, a session you were sent for a remix, a sample you have not cleared: none of it leaves your computer. I keep a longer list of [AI audio tools that run offline](/articles/offline-ai-audio-tools/) for exactly this reason, and Live Suite now belongs on it.

The cost of local is speed on older hardware. Ableton's manual is unusually frank here. On older Windows computers and Intel Macs only the CPU is used, so separation "may take a while", while Apple silicon Macs also use the GPU. Even High Speed mode "may still take several minutes on older system configurations".

## The $400 question

For a Standard owner, Stem Separation is the visible reason to move up, but Ableton does not sell it separately. The $400 gap between a new Standard and a new Suite licence also buys Max for Live and the larger instrument, effect and sound library Ableton lists against Suite. If you already wanted those, stems arrive as a bonus and the decision is easy.

If you only want stems, the arithmetic turns against Suite. iZotope's Photon, a standalone app and ARA plugin built for stem separation and noise cleanup, was listed at $259 on sale from $349 when I checked on the same day. iZotope says its models "all run locally on your GPU", and its Music 4 Stems model produces the same four-way split as Live: voice, drums, bass and other elements.

So Standard plus Photon came to $608 at the sale price and $698 at Photon's regular price. Both totals sit below a new Suite licence at $749, and Photon works inside other DAWs too, through ARA. What you give up is the in-Live workflow, where stems land on tracks in a Group with your clip automation already copied across.

My view: for a new buyer who is undecided, Suite is the better purchase, because stems inside the arrangement are more useful day to day than stems in a second app. For an existing Standard owner who wants nothing else from Suite, I would look at Photon first, and at the [free and cheaper separators](/articles/ai-stem-separation-costs/) before either.

## Rent-to-own, and a catch for offline users

Suite is the only edition Ableton sells on rent-to-own. The store quoted $31.21 a month for 24 months, which adds up to $749.04, a few cents over the one-off price. Ableton's FAQ says you "pay the same amount as you would for a one-off purchase", and once the payments are complete the licence is yours. You can pause, and you keep access to the end of the billing cycle you are in.

There is a wrinkle for anyone who chose Live's stem separation precisely because it works offline. While a rent-to-own plan is running, Ableton says Live "will periodically verify that your plan is active" and that you can work offline "for up to 3 days between verification checks". Stay offline longer and "saving and exporting will be disabled until Live can reconnect".

The separation itself runs locally. The licence paying for it does not stay quiet for long. If your studio machine is deliberately kept off the network, buy outright.

## Try it before paying

Ableton's 30-day trial is of Live 12 Suite, so it includes Stem Separation. The trial page says it needs no credit card and lets you save and export your music.

When it expires you can still open Live Sets made during the trial, but "you will no longer be able to save or export your work". Thirty days is long enough to run your own material through both quality modes on your own computer, which is the only listening test that tells you anything about your hardware and your genre.

Students and teachers should check the education shop first. The trial FAQ says eligible buyers save 50% on a new Intro, Standard or Suite licence, and Suite is also available on rent-to-own for those licences.

## Who should choose what

If you are buying Live for the first time and stem separation is on your list, buy Suite or don't count on having stems. Ableton ties the feature to the Suite edition, not to a version number that Intro and Standard reach by updating.

If you own Standard and want stems alone, the cheaper move is a separate local separator, and Photon is the one I priced.

If you want stems on a computer that never touches the internet, Suite bought outright is the configuration that matches the promise on Ableton's own product page. Rent-to-own does not.
