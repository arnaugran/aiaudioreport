---
title: "AI Stem Separation: What It Costs and Where the Catches Are"
description: "LALAL.AI's annual plans cost exactly twelve times the monthly price. Its unlimited queue is free on every paid tier. The best-scoring option costs nothing."
pubDate: 2026-11-08
pricesCheckedOn: 2026-11-07
byline: "AI Audio Report editorial team"
reviewedBy: "Arnau Grani Romero"
basis: documentation+published-reviews
tags: ["pricing", "stem separation"]
sources:
  - title: "LALAL.AI, Pricing"
    url: "https://www.lalal.ai/pricing/"
    checked: 2026-11-07
  - title: "Demucs, source repository and model documentation (Hybrid Transformer Demucs v4)"
    url: "https://github.com/adefossez/demucs"
    checked: 2026-11-07
  - title: "Ultimate Vocal Remover GUI, source repository and system requirements"
    url: "https://github.com/Anjok07/ultimatevocalremovergui"
    checked: 2026-11-07
  - title: "Moises, pricing information page"
    url: "https://moises.ai/pricing/"
    checked: 2026-11-07
---

The highest published separation score of anything here belongs to the tool that costs
nothing. Demucs v4 reports 9.00 dB SDR on the MUSDB HQ test set, it's free, and it runs on
your own machine. The catch is a GPU requirement and a command line, and for plenty of people
that catch settles it. Which is why cloud services can charge for the same job.

So the useful question isn't which one is best. It's what the paid services actually charge
once you read the pricing page properly. That turns out to contain two surprises.

## LALAL.AI: the metered thing isn't what you think

LALAL.AI runs two queues, and only one of them is rationed. Here's the structure as published
on 7 November 2026.

<div class="tablewrap">

| Plan | Price | Relaxed Queue | Fast Queue | Upload limit |
| --- | --- | --- | --- | --- |
| Starter | Free | 10 minutes | none | 200 MB per file |
| Lite | €6.75/mo, or €81 billed annually | Unlimited | 90 min/month | 2 GB per file |
| Pro | €13.50/mo, or €162 billed annually | Unlimited | 250 min/month | 2 GB per file |

</div>

On both paid plans the Relaxed Queue is **unlimited**. The monthly minute allowance only
applies to the Fast Queue. Nearly every comparison we read treats that Fast Queue figure as
the plan's capacity, which gets the product backwards. On a €6.75 plan you can separate as
much audio as you like. What the extra €6.75 buys you at Pro isn't more separation, it's less
waiting.

That changes the decision. Working through an archive on your own schedule? Lite isn't a
90 minute plan, it's an unlimited plan with 90 minutes of queue skipping attached. Turning
stems around against a deadline? The Fast minutes are the whole product, and you should price
them that way.

### Annual billing saves you nothing

Check the arithmetic on those annual figures.

* Lite: €81 divided by 12 is **€6.75**, identical to the monthly price.
* Pro: €162 divided by 12 is **€13.50**, identical to the monthly price.

There's no annual discount. Paying twelve months up front gets you exactly the same rate as
paying monthly, with your money handed over earlier, and the pricing page FAQ says
subscriptions are non-refundable. We checked twice, because the usual pattern in this
industry is two months free, and its absence is easy to assume away.

Unless you specifically want to be locked in, monthly is simply better. It's rare to be able
to say that about a SaaS pricing page without qualifying it.

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

Subscription prices were shown to us in euros and the top-ups in US dollars, so the two
halves of that table aren't directly comparable without a conversion we aren't going to
invent. LALAL.AI also appears to localise pricing, so your figures may differ from ours. The
per-minute column is the part worth carrying away either way.

Two things fall out of it. Within the subscriptions, Pro's Fast minutes cost about 28% less
each than Lite's. The marginal maths is better still: the extra €6.75 between the tiers buys
160 more Fast minutes, which works out at roughly €0.042 per extra minute, about 44% below
Lite's rate. If you reliably go past 90 Fast minutes a month, upgrading is good value.

The counterweight is that **unused Fast minutes don't roll over**. The balance resets each
billing period. So those per-minute figures are a best case that assumes you burn the whole
allowance. Use half your Pro minutes and you paid €0.108 each, which is worse than Lite. Pay
for the tier you actually use, not the one you mean to.

The one-off top-ups don't expire with a billing cycle, and they scale mildly: the largest
pack is about 10% cheaper per minute than the smallest. That's a thin reward for a six-fold
increase in commitment.

## The free route, and what it really costs

Demucs is the reference implementation most of this field gets measured against. Its
documentation reports 9.00 dB SDR on the MUSDB HQ test set for the fine-tuned v4 Hybrid
Transformer model, separating drums, bass, vocals and other, with a six-stem variant adding
guitar and piano. The project's own notes say the piano performs poorly.

Ultimate Vocal Remover GUI is the usual way to avoid the command line. It's a free front end
bundling MDX-Net, VR Architecture and Demucs v3 and v4 models together, so in practice you
can run several separators and keep whichever handles your material best.

The hardware requirement is the real cost.

**Demucs** needs Python 3.10 or newer, roughly 3 GB of GPU memory as a minimum and about 7 GB
with default settings. Without a suitable GPU it runs on CPU, where the documentation
estimates processing takes around 1.5 times the track's duration.

**UVR** lists an Nvidia GTX 1060 6 GB as the minimum for GPU conversions, with 8 GB or more
of VRAM recommended. It's 64-bit only, on Windows 10 and up, macOS Big Sur and up, or a
Debian or Arch based Linux install. AMD support is limited and lives on a separate branch.
FFmpeg is required for anything that isn't a WAV.

A CPU-only run at 1.5 times realtime is fine for occasional work. A four minute song takes
about six minutes, unattended. For a hundred tracks it's a weekend, and that's the point where
paying for someone else's GPU starts making sense.

### A licensing catch that matters commercially

Demucs's code is released under the MIT licence. Its **model weights are not**. The project
states plainly that "the license of the weights is not clear", citing research-only MUSDB data
and internal Meta datasets used in training.

If you're separating stems for your own practice, remixing at home, or transcription, this is
academic. If separated stems are going into something you intend to sell, you're relying on
weights whose licence the authors themselves describe as unclear, and that's a different risk
from a commercial service that has explicitly granted you rights. It's the same shape of
problem we ran into reading [what Suno's terms permit](/articles/can-you-sell-suno-music/):
a tool working is not the same as a tool being licensed for what you're doing with it.

We're flagging the ambiguity, not resolving it. Nobody can resolve it from outside.

## What we couldn't price, and why

We won't publish a price we didn't read.

**Moises** doesn't expose its plan pricing on a crawlable page. Its public pricing page
describes a free tier with "a limited number of uploads each month" and points to a table
inside the logged-in app at `studio.moises.ai/billing/pricing`, which returned no plan data
to us. It does publish that it separates into 27 stem types.

**iZotope RX**, which includes the Music Rebalance feature often grouped with these tools,
rate-limited our request when we tried to read its product page.

Both are on the list to verify properly and add. Until then, treat any third-party page
quoting their current prices with suspicion unless it says when it checked. The secondary
sources we sampled while researching this disagreed with each other, and several were quoting
figures over a year old.

We also have no quality comparison between LALAL.AI and Demucs, because LALAL.AI doesn't
publish an SDR figure and we don't run listening tests. The only head-to-head benchmark we
found in this space was published by one of the vendors being compared, which tells you what
it's worth.

## Who should pick what

**An Nvidia GPU with 8 GB, separating stems regularly.** Install UVR. The best published
score in this article costs nothing, and your audio never leaves your machine. If you're
working on unreleased material for other people, that last point is an argument on its own.

**Stems occasionally, on a laptop.** Run Demucs on CPU and go make coffee, or use LALAL.AI's
free 10 minutes. Don't start a subscription for four tracks a year.

**Volume, no patience, no GPU.** LALAL.AI Lite at €6.75/month, monthly rather than annual,
and accept the Relaxed Queue for anything that isn't urgent. The unlimited relaxed processing
is the part worth paying for.

**Deadlines.** Pro, monthly, and only if you'll genuinely use more than 90 Fast minutes a
month. The minutes vanish at the end of each period, and the upgrade stops paying for itself
the moment you stop consuming it.

Prices here were read on 7 November 2026. We re-check this page roughly every 30 days and
change the date at the top when we do. If you spot a figure that's moved before we do,
[tell us](/contact/).
