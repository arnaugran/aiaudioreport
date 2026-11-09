---
title: "Free Splice Alternatives: Which Ones You Can Legally Sell"
description: "Two big free libraries, two different answers to the only question that matters: can you sell what you make. One is simple, the other changes file by file."
pubDate: 2026-11-08
updatedDate: 2026-11-09
pricesCheckedOn: 2026-11-08
byline: "Arnau Gran i Romero"
basis: documentation
tags: ["licensing", "samples", "pricing"]
faq:
  - q: "Can I sell music made with Looperman loops?"
    a: "The terms grant registered users a royalty-free right to exploit derivative works in all formats and media, name commercials among the permitted uses, and say it applies in perpetuity with no further payment obligation. A separate clause refers to a registered user who may lawfully sell or assign derivative works, so selling is contemplated by the terms themselves. You must be registered: non-registered users get a licence to listen only."
  - q: "Is everything on Freesound safe to use commercially?"
    a: "No, and this is the one that catches people. Freesound hosts sounds under three licences. CC0 and CC BY allow commercial use, with CC BY requiring you to credit the creator. CC BY-NC does not: the Freesound FAQ puts it as you cannot earn any money with the work you create. The licence is set per sound, so you have to check each file."
  - q: "Do I have to credit anyone?"
    a: "On Freesound, yes for CC BY and CC BY-NC sounds, no for CC0. Looperman's loops licence section does not impose an attribution requirement."
  - q: "Can I use free loops to train an AI model?"
    a: "Not on Looperman. Its terms say it is prohibited for anyone to use its content for the training or improvement of any algorithm."
sources:
  - title: "Looperman, Terms and Conditions"
    url: "https://www.looperman.com/help/terms"
    checked: 2026-11-08
  - title: "Freesound, Frequently Asked Questions"
    url: "https://freesound.org/help/faq/"
    checked: 2026-11-08
  - title: "Splice, Plans and pricing"
    url: "https://splice.com/plans"
    checked: 2026-11-08
---

Looperman's licence lets you use its loops in commercial releases. Freesound is more complicated: each uploader picks a licence, and some of those licences rule out commercial use.

Splice costs money, but its consistent terms are part of what you're paying for. If you're piecing a free library together, check the licence on each sound before you build a release around it.

## What you are actually paying Splice for

Splice's position is simple enough to state in one line. Downloads are "yours forever", the
catalogue is "100% royalty free" and sounds are "cleared for commercial use". Every file
carries the same terms, so you never have to think about it again. The cheapest way in is the
Sounds plan at $12.99/mo, or $10.84/mo billed yearly, for around 100 downloads a month. I
worked through whether that is worth it in
[Is Splice Worth It?](/articles/is-splice-worth-it/).

Uniformity is most of the value. The free alternatives are not worse because the sounds are
worse. They are harder because the terms stop being the same on every file.

## Looperman: free, and the licence is genuinely broad

This one surprised me. Looperman's terms grant registered users "the non-exclusive, royalty
free right to copy, reproduce, edit, adapt, modify, remix, use, incorporate and otherwise
exploit" its loops in new original recordings, and then to exploit those recordings "in all
formats and media".

The list of permitted media names "films, videos, computer games, commercials and other audio
and/or audio-visual products", and the grant runs "throughout the world and the universe" for
the full period of copyright, "without any further obligation (whether payment or otherwise)".

Two details matter more than that wording.

**You have to register.** Non-registered users are granted "a non-exclusive,
non-transferable, royalty free licence to listen to the Loops" and nothing else. Downloading
and using a loop without an account is not covered.

**You get the loop only inside your own track.** The rights cover the loops "solely as they
are embodied in the Derivative Works". So a finished song is yours to sell. Repackaging the
loops themselves as a sample pack is not.

The licence is non-transferable, but the terms handle resale sensibly: if you "lawfully sell,
transfer, assign or otherwise permit third parties to exploit Derivative Works", you must
ensure those parties comply with the same terms. That clause is also the clearest signal in
the document that selling your track is contemplated and permitted.

One restriction worth knowing if you build tools: Looperman says "it is prohibited for anyone
to use our content for the training or improvement of any algorithm".

## Freesound: free, but the licence changes per file

Freesound is not one licence. It is three, chosen by whoever uploaded the sound, and the
difference decides whether you can earn from your track.

| Licence | Credit needed | Commercial release | What the FAQ says |
|---|---|---|---|
| CC0 | No | Yes | "you can do pretty much what you want with the sound" |
| CC BY | Yes | Yes | "you should always mention the original creators" |
| CC BY-NC | Yes | **No** | "you can't earn any money with the piece of work you create!" |

The FAQ also mentions a retired Sampling+ licence, under which "you can't make commercial
advertisement with the sound". Retired, it notes, "just means that Creative Commons is no
longer recommending this particular license", so older files may still carry it.

<figure class="figure">
<p class="f-title">What you are cleared to release, by source</p>
<svg viewBox="0 0 620 220" role="img" aria-label="Commercial clearance by sample source: Splice paid plans are fully cleared, Looperman is fully cleared for registered users, Freesound CC0 is fully cleared, Freesound CC BY is cleared but requires credit, and Freesound CC BY-NC is not cleared for any track you earn money from.">
  <text class="lab" x="0" y="24">Splice, from $12.99/mo</text>
  <rect class="bar-good" x="210" y="13" width="330" height="14" rx="3"/>
  <text class="val" x="548" y="24">cleared</text>
  <text class="lab" x="0" y="62">Looperman, free</text>
  <rect class="bar-good" x="210" y="51" width="330" height="14" rx="3"/>
  <text class="val" x="548" y="62">cleared</text>
  <text class="lab" x="0" y="100">Freesound, CC0</text>
  <rect class="bar-good" x="210" y="89" width="330" height="14" rx="3"/>
  <text class="val" x="548" y="100">cleared</text>
  <text class="lab" x="0" y="138">Freesound, CC BY</text>
  <rect class="bar-catch" x="210" y="127" width="330" height="14" rx="3"/>
  <text class="val" x="548" y="138">credit</text>
  <text class="lab" x="0" y="176">Freesound, CC BY-NC</text>
  <line class="zero" x1="212" y1="165" x2="228" y2="181"/>
  <line class="zero" x1="228" y1="165" x2="212" y2="181"/>
  <text class="val" x="240" y="176">no earnings of any kind from the track</text>
  <line class="rule" x1="0" y1="196" x2="620" y2="196"/>
  <text class="lab" x="0" y="214">On Freesound the licence is set per sound, so this is a per-file question.</text>
</svg>
<figcaption>Read from each service's own licence terms and FAQ on 8 November 2026. Splice pricing from splice.com/plans the same day.</figcaption>
</figure>

The practical danger is not that CC BY-NC exists. It is that nothing in your DAW remembers
which file came from where. You layer eleven sounds, one of them is NC, the track goes on
Spotify two years later, and the condition you broke is in a text field on a web page you
closed in 2026. Write the licence down when you download, not when you release.

## Which to use

If you want free and you want to stop thinking about it, use Looperman and register an
account. The licence is broader than most paid sample subscriptions bother to be, and there is
no attribution to track.

Use Freesound for field recordings, foley and oddities, which is what it is genuinely better
at than anything else here, and filter to CC0 before you download. Freesound's search lets you
restrict by licence, and doing that once is cheaper than auditing a project later.

Pay for Splice when the thing you are short of is time rather than money. You are buying one
set of terms across three million files and a search engine that works, not better audio. At
$12.99 a month that is a reasonable trade for anyone releasing regularly, and a poor one for
anyone who opens a DAW twice a month.

What none of this decides is whether you own what you made when a generator was involved.
That is a separate question and the answer is not in any of these documents. I went through
it for one tool in [Can You Sell Suno Songs?](/articles/can-you-sell-suno-music/), and for the
platforms you would upload to in
[Can You Upload AI Music?](/articles/can-you-upload-ai-music/).
