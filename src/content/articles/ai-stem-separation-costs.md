---
title: "AI Stem Separation: What It Costs and Where the Catches Are"
description: "LALAL.AI's annual plans cost exactly twelve times the monthly price. Its unlimited queue is free on every paid tier. The best-scoring option costs nothing at all."
pubDate: 2026-11-08
pricesCheckedOn: 2026-11-07
byline: "Fader Report editorial team"
reviewedBy: "Arnau Grani Romero"
basis: documentation+published-reviews
tags: ["pricing", "stem separation"]
sources:
  - title: "LALAL.AI — Pricing"
    url: "https://www.lalal.ai/pricing/"
    checked: 2026-11-07
  - title: "Demucs — source repository and model documentation (Hybrid Transformer Demucs v4)"
    url: "https://github.com/adefossez/demucs"
    checked: 2026-11-07
  - title: "Ultimate Vocal Remover GUI — source repository and system requirements"
    url: "https://github.com/Anjok07/ultimatevocalremovergui"
    checked: 2026-11-07
  - title: "Moises — pricing information page"
    url: "https://moises.ai/pricing/"
    checked: 2026-11-07
---

The highest published separation score of any tool here belongs to the one that costs
nothing. Demucs v4 reports 9.00 dB SDR on the MUSDB HQ test set, it is free, and it runs
on your own machine. The catch is a GPU requirement and a command line, and for a lot of
people that catch is decisive — which is why cloud services can charge for the same job.

So the useful question is not "which is best". It is what the paid services actually
charge once you read the pricing page properly, and that turns out to contain two
surprises.

## LALAL.AI: the metered thing isn't what you think

LALAL.AI runs two queues, and only one of them is rationed. Here is the structure as
published on 7 November 2026.

<div class="tablewrap">

| Plan | Price | Relaxed Queue | Fast Queue | Upload limit |
| --- | --- | --- | --- | --- |
| Starter | Free | 10 minutes | — | 200 MB per file |
| Lite | €6.75/mo, or €81 billed annually | Unlimited | 90 min/month | 2 GB per file |
| Pro | €13.50/mo, or €162 billed annually | Unlimited | 250 min/month | 2 GB per file |

</div>

On both paid plans the Relaxed Queue is **unlimited**. The monthly minute allowance
applies only to the Fast Queue. Nearly every comparison we read treats the Fast Queue
figure as the plan's capacity, which gets the product backwards: on a €6.75 plan you can
separate as much audio as you like, and what you are paying extra for at €13.50 is not
more separation but less waiting.

That reframes the decision. If you are working through an archive on your own schedule,
Lite is not a 90-minute plan, it is an unlimited plan with 90 minutes of queue-skipping
attached. If you are turning stems around against a deadline, the Fast minutes are the
entire product and you should price them as such.

### Annual billing saves you nothing

Check the arithmetic on those annual figures:

- Lite: €81 ÷ 12 = **€6.75** — identical to the monthly price.
- Pro: €162 ÷ 12 = **€13.50** — identical to the monthly price.

There is no annual discount. Paying twelve months up front gets you exactly the same
rate as paying monthly, with your money handed over earlier and, per the pricing page's
FAQ, subscriptions are non-refundable. We checked twice because the usual industry
pattern is two months free, and its absence here is easy to assume away.

Unless you specifically want to be locked in, monthly is strictly better. It is unusual
to be able to say that about a SaaS pricing page without qualification.

### What a Fast minute costs

<div class="tablewrap">

| What you buy | Price | Fast minutes | Cost per minute |
| --- | --- | --- | --- |
| Lite subscription | €6.75/mo | 90/month | **€0.075** |
| Pro subscription | €13.50/mo | 250/month | **€0.054** |
| Master top-up | $50 one-off | 750 | **$0.067** |
| Premium top-up | $190 one-off | 3,000 | **$0.063** |
| Enterprise top-up | $300 one-off | 5,000 | **$0.060** |

</div>

Subscription prices were shown to us in euros and the top-ups in US dollars, so those two
halves of the table are not directly comparable without a conversion we are not going to
invent. LALAL.AI also appears to localise pricing, so the figures you see may differ from
ours; the per-minute column is the part worth carrying away in either case.

Two things fall out of it. Within the subscriptions, Pro's Fast minutes cost about 28%
less each than Lite's. And the marginal maths is better still: the extra €6.75 between
the tiers buys 160 additional Fast minutes, which is roughly €0.042 per extra minute —
about 44% below Lite's rate. If you reliably exceed 90 Fast minutes a month, upgrading is
unusually good value.

The counterweight is that **unused Fast minutes do not roll over**; the balance resets
each billing period. So the per-minute figures above are a best case that assumes you
burn the whole allowance. Use half your Pro minutes and you paid €0.108 each, which is
worse than Lite. Pay for the tier you actually consume, not the one you intend to.

The one-off top-ups do not expire with a billing cycle, and scale mildly: the largest
pack is about 10% cheaper per minute than the smallest. That is a thin reward for a
six-fold increase in commitment.

## The free route, and its real price

Demucs is the reference implementation most of this field is measured against. Its
documentation reports 9.00 dB SDR on the MUSDB HQ test set for the fine-tuned v4 Hybrid
Transformer model, separating drums, bass, vocals and other, with a six-stem variant
adding guitar and piano — though the project's own notes say piano performs poorly.

Ultimate Vocal Remover GUI is the usual way to avoid the command line. It is a free
front-end that bundles MDX-Net, VR Architecture and Demucs v3 and v4 models together,
which in practice means you can run several separators and keep whichever handles your
material best.

The hardware requirement is the actual cost:

- **Demucs**: Python 3.10 or newer; roughly 3 GB of GPU memory as a minimum and about
  7 GB with default settings. Without a suitable GPU it runs on CPU, where the
  documentation estimates processing takes around 1.5× the track's duration.
- **UVR**: Nvidia GTX 1060 6 GB described as the minimum for GPU conversions, with 8 GB
  or more of VRAM recommended. 64-bit only, Windows 10+, macOS Big Sur and above, or a
  Debian/Arch Linux install. AMD support is limited and lives on a separate branch.
  FFmpeg is required for anything that is not a WAV.

A CPU-only run at 1.5× realtime is perfectly usable for occasional work — a four-minute
song in about six minutes, unattended. For a hundred tracks it is a weekend, and that is
the point at which paying someone else's GPU bill starts to look sensible.

### A licensing caveat that matters commercially

Demucs's code is released under the MIT licence. Its **model weights are not**. The
project states plainly that "the license of the weights is not clear", citing
research-only MUSDB data and internal Meta datasets in their training.

If you are separating stems for your own practice, remixing at home, or transcription,
this is academic. If separated stems are going into something you intend to sell, you are
relying on weights whose licence the authors themselves describe as unclear, and that is
a different risk profile from a commercial service that has explicitly granted you
rights. It is the same category of problem we ran into when reading
[what Suno's terms permit](/articles/can-you-sell-suno-music/): the tool working is not
the same as the tool being licensed for what you are doing with it.

We are flagging the ambiguity, not resolving it. Nobody can resolve it from the outside.

## What we could not price, and why

We will not publish a price we did not read.

- **Moises** does not expose its plan pricing on a crawlable page. Its public pricing
  page describes a free tier with "a limited number of uploads each month" and points to
  a table inside the logged-in app at `studio.moises.ai/billing/pricing`, which returned
  no plan data to us. It does publish that it separates into 27 stem types.
- **iZotope RX**, which includes the Music Rebalance feature often grouped with these
  tools, rate-limited our request when we tried to read its product page.

Both are on the list to verify properly and add. In the meantime, treat any third-party
page quoting their current prices with suspicion unless it says when it checked — the
secondary sources we sampled while researching this disagreed with each other, and
several were quoting figures over a year old.

We also have no quality comparison between LALAL.AI and Demucs, because LALAL.AI does
not publish an SDR figure and we do not run listening tests. The only head-to-head
benchmark we found in this space was published by one of the vendors being compared,
which tells you what it is worth.

## Who should pick what

**You have an Nvidia GPU with 8 GB and separate stems regularly.** Install UVR. The
best published score in this article costs nothing, and your audio never leaves your
machine — which, if you are working on unreleased material for other people, is an
argument on its own.

**You need stems occasionally and own a laptop.** Run Demucs on CPU and go make coffee,
or use LALAL.AI's free 10 minutes. Do not start a subscription for four tracks a year.

**You have volume but no patience and no GPU.** LALAL.AI Lite at €6.75/month, monthly
not annual, and accept the Relaxed Queue for anything that is not urgent. The unlimited
relaxed processing is the part worth paying for.

**You work to deadlines.** Pro, monthly, and only if you will genuinely use more than 90
Fast minutes a month. The minutes vanish at the end of each period and the upgrade stops
paying for itself the moment you stop consuming it.

Prices here were read on 7 November 2026. We re-check this page roughly every 30 days and
change the date at the top when we do; if you spot a figure that has moved before we do,
[tell us](/contact/).
