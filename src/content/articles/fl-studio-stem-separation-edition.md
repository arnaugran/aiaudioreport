---
title: "Which FL Studio Edition Has Stem Separation?"
description: "Fruity is $99 and Producer is $139 on Image-Line's sale prices. Which FL Studio edition splits audio into stems, and what the trial and offline use change."
pubDate: 2026-11-11
pricesCheckedOn: 2026-11-11
byline: "Arnau Gran i Romero"
basis: documentation
tags: ["pricing", "stem separation", "DAWs"]
faq:
  - q: "Does FL Studio Fruity Edition have stem separation?"
    a: "No. Image-Line's edition comparison marks Stem Separation as Producer Edition and up, with a cross against Fruity. Fruity also has no audio recording and is limited to 8 audio clips, where the other editions are unlimited."
  - q: "How many stems does FL Studio separate?"
    a: "Up to four. The FL Studio manual says Extract stems from sample pulls Drums, Bass, Instruments and Vocals out of an audio clip, and each stem you tick lands on its own child Playlist track."
  - q: "Does FL Studio stem separation work offline?"
    a: "The model is downloaded the first time you use the feature. Image-Line's knowledge base explains how to copy the Documents, Image-Line, Downloads folder from an online computer to an offline one, but that has to be done from a logged-in licensed copy, not the trial."
  - q: "Can I try FL Studio stem separation in the free trial?"
    a: "Image-Line says the trial is functionally identical to the All Plugins Edition, with every plugin and feature. You can save and export, but the trial will not reopen saved .flp project files until you buy an edition."
sources:
  - title: "Image-Line, FL Studio Pricing and Editions (prices and edition comparison table)"
    url: "https://www.image-line.com/fl-studio/pricing"
    checked: 2026-11-11
  - title: "Image-Line, FL Studio Compare Editions"
    url: "https://www.image-line.com/fl-studio/compare-editions"
    checked: 2026-11-11
  - title: "Image-Line, FL Studio Online Manual: Playlist (Extract stems from sample)"
    url: "https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/playlist.htm"
    checked: 2026-11-11
  - title: "Image-Line Knowledge Base, How do I install Stem separation, Mastering, Declipping or some other downloadable feature on an off-line computer?"
    url: "https://support.image-line.com/action/knowledgebase?ans=689"
    checked: 2026-11-11
  - title: "Image-Line, FL Studio free trial download page"
    url: "https://www.image-line.com/fl-studio-download"
    checked: 2026-11-11
  - title: "Image-Line, FL Studio 21.2 what's new"
    url: "https://www.image-line.com/fl-studio-news/fl-studio-21-2-whats-new"
    checked: 2026-11-11
draft: false
---

Producer Edition and up. Image-Line's own comparison table puts a cross against Fruity on the Stem Separation row and a tick against Producer, Signature Bundle and All Plugins Edition. If you bought Fruity because it was the cheapest box and you are now looking for the stems option on a right-click menu, it is not hidden. It is not there.

The better news is that the step from Fruity to Producer is small, and on the prices Image-Line was showing when I checked, smaller than usual.

## Four editions, three of them separate

I read the prices from Image-Line's pricing page on 11 November 2026, during what the page calls its Black Friday Sale. Three of the four editions were discounted. The page gave no end date for the sale, so treat the struck-through figures as the normal price and the others as temporary.

<figure class="figure">
<p class="f-title">FL Studio sale prices, and which edition separates stems</p>
<svg viewBox="0 0 620 230" role="img" aria-label="FL Studio prices on Image-Line's pricing page on 11 November 2026: Fruity Edition 99 dollars with no stem separation, Producer Edition 139 dollars with stem separation, Signature Bundle 199 dollars with stem separation, All Plugins Edition 224 dollars with stem separation.">
  <text class="lab" x="0" y="26">Fruity Edition</text>
  <rect class="bar-catch" x="186" y="15" width="146" height="14" rx="3"/>
  <text class="val" x="340" y="26">$99, no stems</text>
  <text class="lab" x="0" y="66">Producer Edition</text>
  <rect class="bar-good" x="186" y="55" width="206" height="14" rx="3"/>
  <text class="val" x="400" y="66">$139, stems</text>
  <text class="lab" x="0" y="106">Signature Bundle</text>
  <rect class="bar-good" x="186" y="95" width="293" height="14" rx="3"/>
  <text class="val" x="487" y="106">$199, stems</text>
  <text class="lab" x="0" y="146">All Plugins Edition</text>
  <rect class="bar-good" x="186" y="135" width="330" height="14" rx="3"/>
  <text class="val" x="524" y="146">$224, stems</text>
  <line class="rule" x1="0" y1="172" x2="620" y2="172"/>
  <text class="lab" x="0" y="196">Bar length is the sale price. Stems start $40 above Fruity.</text>
  <text class="lab" x="0" y="216">Prices from image-line.com/fl-studio/pricing, 11 November 2026.</text>
</svg>
<figcaption>Sale prices on Image-Line's own pricing page. Stem Separation availability is taken from the comparison table on the same page.</figcaption>
</figure>

| Edition | Price on 11 Nov 2026 | Listed before sale | Stem Separation | Audio clips |
|---|---|---|---|---|
| Fruity Edition | $99 | $99 | No | 8 |
| Producer Edition | $139 | $179 | Yes | Unlimited |
| Signature Bundle | $199 | $269 | Yes | Unlimited |
| All Plugins Edition | $224 | $449 | Yes | Unlimited |

The stems row is not the only thing Fruity is missing, and I think it is the less important one. The same table marks Audio Recording, Edison and Newtime as Producer Edition and up, and gives Fruity a limit of 8 audio clips against unlimited on the rest. Stem separation produces audio clips, so the feature would sit awkwardly on Fruity even if it were there.

Not everything AI-flavoured is held back. Gopher, which Image-Line describes as FL Studio's AI assistant, and Loop Starter, which generates genre-based loops, are both marked as included in all editions.

## What Producer actually gets you

The feature lives in the Playlist. The FL Studio manual calls it Extract stems from sample, and describes it as pulling "up to 4 tracks from any Audio Clip including Drums, Bass, Instruments and Vocals". Each stem you choose is loaded onto a child Playlist track under the track the source clip sits on, and you can group them with the parent.

When the feature arrived in FL Studio 21.2, Image-Line's release notes described the four parts as vocals, music, bass and drums. The current manual says Instruments where the release notes said music. Same slot, newer name.

The dialog has a handful of options worth knowing before you run it:

- Stems: tick any combination of Drums, Bass, Instruments and Vocals. Each one you tick becomes its own Playlist track.
- Limit CPU usage, so the rest of your computer stays responsive while it works.
- Safe mode, for unexpected audio problems or crashes. The manual warns that "some older CPUs may not include the support for the code used to extract audio".
- Muting: mute the source clip, mute the source track, or do nothing.

The manual is blunt about one thing. Processing a track-length file "can take some time to complete (minutes)" and FL Studio is unresponsive while it runs, deliberately, so you cannot change the project under it. Its advice is "Hands off! Stare at the progress bar and chill." I would plan a session around that rather than reach for it mid-idea.

Image-Line describes the extraction as "based on an Machine Learning 'AI' model with the results dependent on the source audio". It publishes no quality figure, and I have not compared its output with anything, so I make no claim about how clean the stems are.

## The model is a download, and that matters offline

The separation model does not ship inside the installer. The manual says that the first time you use the feature, FL Studio asks to download the machine learning model. Image-Line's knowledge base lists Stem separation alongside Mastering and Declipping as features "downloaded separately on first use in FL Studio". For a studio computer that never goes online, the same knowledge base article gives a workaround. On a connected computer with FL Studio, logged in, you either use the feature once or run FILE, Settings, Troubleshooting, Repair optional features, which fetches every component of that type. You then copy the whole Documents, Image-Line, Downloads folder to a removable drive and recreate it in the same place on the offline machine.

Two catches sit in that article. It says the download "can't be done in the trial", so you need a licensed, logged-in copy somewhere. It also says Image-Line updates these components "from time to time", which means an offline machine keeps whatever version you last copied across until you repeat the exercise.

The short version: you need the internet once, on some computer, to get the model.

## The upgrade path is the reason I would not overthink it

Image-Line's pricing page says you "can upgrade to a higher FL Studio Edition anytime" and "just pay the price difference". Combined with the company's promise of lifetime free updates to your edition, that makes Fruity a less risky starting point than the missing features suggest.

You are not locked out of stems for good. On today's sale prices the gap is $40. On the listed prices before the sale, it is $80.

Even so, I would not buy Fruity today if stem separation is on your list. The sale has shrunk the gap to the point where Fruity saves you $40 and costs you audio recording, Edison, Newtime, unlimited audio clips and stems. That is a lot to give up for the price of a plugin.

All Plugins Edition is the more interesting sale. At $224 against a listed $449, it is $85 above Producer, where normally it would be $270 above. If you were ever going to want the full set, this is the week the arithmetic favours it. If stems are the only feature you came for, Producer gets you exactly the same Stem Separation row as All Plugins does.

## Rent-to-Own Plus

The pricing page also offers Rent-to-Own Plus: monthly payments for FL Studio and FL Cloud together, where "after 12 payments, FL Studio is yours forever, with Lifetime Free Updates" and "FL Cloud continues until cancelled". The page did not show me the monthly amounts, and it notes that "some payment plans might only be available in certain regions", so I leave the price out here.

The structure is worth one warning. When FL Studio becomes yours after 12 payments, the FL Cloud part keeps billing until you cancel it. Put a reminder in your calendar for month twelve if the DAW is all you wanted.

## Try it first, but finish the song in one sitting

Image-Line's trial page says the trial "is functionally identical to the All Plugins Edition" and "contains all plugins and features available in a fully unlocked FL Studio". By that description it includes Stem Separation, so you can run your own material through it on your own computer before paying. Given the manual's warning about older CPUs, I think that test matters more than any review.

The trial's limit is unusual. You can save and export as much as you like, but "FL Studio won't reopen project files (.flp)". Once you close it, the project is locked until you buy an edition. So split the stems, export what you need, and do it before you quit. The stem audio you export is yours to use elsewhere. The project that produced it waits for a licence.

## Who should choose what

If you want stems inside FL Studio, buy Producer Edition. It is the cheapest edition with the feature, and during this sale it costs $40 more than Fruity, which lacks audio recording as well.

If you record and tune vocals, look at Signature Bundle instead. The comparison table marks Newtone and Pitcher as Signature Bundle and up, and at $199 it is $60 above Producer.

If you already own Fruity, upgrade rather than buy again. Image-Line says you pay the difference. And if your studio computer is deliberately offline, buy the licence first and use a connected machine to fetch the model, because the trial cannot do that step for you.

I covered [Ableton Live's version of the same question](/articles/ableton-live-stem-separation-edition/) two days ago, and keep a wider list of [what stem separation costs across tools](/articles/ai-stem-separation-costs/) for anyone who does not want it inside a DAW at all.
