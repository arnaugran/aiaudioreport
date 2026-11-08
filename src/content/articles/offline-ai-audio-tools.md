---
title: "Which AI Audio Tools Run Offline, and the Hardware Needed"
description: "Whisper releases its model weights under MIT. Demucs doesn't, and says so. If your audio can't be uploaded, that difference decides what you can use."
pubDate: 2026-11-08
byline: "AI Audio Report editorial team"
reviewedBy: "Arnau Gran i Romero"
basis: documentation
tags: ["local tools", "licensing"]
faq:
  - q: "Can I use Whisper commercially?"
    a: "Yes. The Whisper repository states that both its code and its model weights are released under the MIT License, which permits commercial use. That is unusual, and it is the main practical difference between Whisper and Demucs."
  - q: "Can I use Demucs stems in work I sell?"
    a: "Demucs releases its code under MIT, but the project states that the licence of the model weights is not clear, citing research-only MUSDB data and internal Meta datasets. For paid work that is a real ambiguity, and nobody outside the project can resolve it."
  - q: "Which Whisper model should I run?"
    a: "Turbo, if you have about 6 GB of VRAM and no translation requirement. The repository describes it as an optimised large-v3 with minimal accuracy loss at roughly eight times the speed of large. Turbo is not trained for translation, so cross-language work needs large."
sources:
  - title: "OpenAI Whisper, source repository, licence and model size table"
    url: "https://github.com/openai/whisper"
    checked: 2026-11-07
  - title: "Demucs, source repository, licence notes and model documentation"
    url: "https://github.com/adefossez/demucs"
    checked: 2026-11-07
  - title: "Ultimate Vocal Remover GUI, source repository and system requirements"
    url: "https://github.com/Anjok07/ultimatevocalremovergui"
    checked: 2026-11-07
---

There's a category of audio work where "just upload it to a cloud service" isn't an available
answer. Unreleased material you're mixing for someone else. A session under an NDA.
Interviews with people who never agreed to have their voice sent to a third party. Anything
where the file leaving your machine is itself the problem.

For that work the question stops being which tool is best and becomes which tools run
entirely on your own hardware. Then, straight away, whether their licences let you use the
results for paid work. Those two questions have different answers, and the second one is
where this gets interesting.

<div class="takeaways">
<h2>The short version</h2>

- Whisper is MIT on both code and weights, so commercial use is unambiguous.
- Demucs is MIT on code only. The project says its weights licence "is not clear".
- About 6 GB of VRAM is the practical entry point for all of this.
- No GPU still works. Demucs on CPU runs at roughly 1.5 times the track's length.

</div>

## The split that decides everything: code versus weights

An open-source AI tool has two separately licensed parts. The **code** that runs the model,
and the **weights**, meaning the trained model file that does the actual work. A repository
can release one freely and stay vague about the other, and this happens more often than
you'd expect.

Compare the two most useful tools here, read from their own repositories on 7 November 2026.

<div class="tablewrap">

| | Code licence | Weights licence |
| --- | --- | --- |
| **Whisper** (transcription) | MIT | **MIT.** The repository states code *and* model weights are released under it |
| **Demucs** (stem separation) | MIT | **"The license of the weights is not clear"**, in the project's own words |

</div>

Demucs explains why: its training drew on MUSDB data that's research-only, plus internal Meta
datasets. The authors are being straight about an ambiguity rather than papering over it,
which is to their credit, and it also means nobody downstream can resolve it.

The practical consequence is narrow but real. Running Demucs for your own practice, learning
a part, or remixing at home isn't something anyone will question. Making separated stems part
of work you invoice for means depending on weights whose licence the people who trained them
describe as unclear. Whisper carries no equivalent asterisk: MIT on both halves, commercial
use included, nothing to inherit.

If you take one thing from this page, take that. "Free and open source" isn't one property,
and the half that matters commercially is the half people check least.

## Transcription: Whisper, and which size to run

Whisper does speech recognition, speech translation and language identification in a single
model. For audio work the uses are mundane and constant: transcribing interviews, generating
captions, logging takes, making a session searchable.

The repository publishes a model size table, which is the only thing you need to pick one.

<div class="tablewrap">

| Size | Parameters | Required VRAM | Relative speed |
| --- | --- | --- | --- |
| tiny | 39 M | ~1 GB | ~10x |
| base | 74 M | ~1 GB | ~7x |
| small | 244 M | ~2 GB | ~4x |
| medium | 769 M | ~5 GB | ~2x |
| large | 1,550 M | ~10 GB | 1x |
| turbo | 809 M | ~6 GB | ~8x |

</div>

<figure class="figure">
<p class="f-title">Whisper VRAM requirement by model</p>
<svg viewBox="0 0 620 215" role="img" aria-label="VRAM required by Whisper model: tiny and base about 1 GB, small 2 GB, medium 5 GB, turbo 6 GB, large 10 GB.">
  <g>
    <text class="lab" x="0" y="17">tiny</text>
    <rect class="bar-muted" x="110" y="6" width="37" height="14" rx="3"/>
    <text class="val" x="155" y="17">~1 GB</text>
  </g>
  <g>
    <text class="lab" x="0" y="50">base</text>
    <rect class="bar-muted" x="110" y="39" width="37" height="14" rx="3"/>
    <text class="val" x="155" y="50">~1 GB</text>
  </g>
  <g>
    <text class="lab" x="0" y="83">small</text>
    <rect class="bar-muted" x="110" y="72" width="74" height="14" rx="3"/>
    <text class="val" x="192" y="83">~2 GB</text>
  </g>
  <g>
    <text class="lab" x="0" y="116">medium</text>
    <rect class="bar-muted" x="110" y="105" width="185" height="14" rx="3"/>
    <text class="val" x="303" y="116">~5 GB</text>
  </g>
  <g>
    <text class="lab" x="0" y="149">turbo</text>
    <rect class="bar" x="110" y="138" width="222" height="14" rx="3"/>
    <text class="val" x="340" y="149">~6 GB</text>
  </g>
  <g>
    <text class="lab" x="0" y="182">large</text>
    <rect class="bar-muted" x="110" y="171" width="370" height="14" rx="3"/>
    <text class="val" x="488" y="182">~10 GB</text>
  </g>
  <line class="axis" x1="109" y1="0" x2="109" y2="194"/>
  <text class="lab" x="110" y="208">Highlighted: turbo, roughly 8x the speed of large for 6 GB instead of 10</text>
</svg>
<figcaption>Figures as published in the Whisper repository, read 7 November 2026. We have not benchmarked these ourselves.</figcaption>
</figure>

Speeds are relative to `large`, measured by the project on an A100 transcribing English. Your
machine isn't an A100, so treat that column as ratios between the models rather than a
promise about your laptop.

`turbo` is the one worth knowing about. The repository describes it as an optimised version
of `large-v3` with faster transcription and minimal accuracy loss, so roughly eight times the
speed of `large` for about 6 GB of VRAM instead of 10. For most transcription work that's the
sweet spot by a wide margin.

Two caveats the table doesn't show. `turbo` is **not trained for translation**, so if you
need speech in one language turned into text in another, you're back to `large`. And the
model list splits below `large`: English-only variants (`tiny.en` through `medium.en`) are
published alongside the multilingual ones, but there's no `large.en` or `turbo.en`. If your
material is all English, the `.en` build at your chosen size is worth trying first, though we
haven't seen a published accuracy comparison between the two and aren't going to assert one.

## Separation: Demucs and UVR

Covered in detail in our [stem separation pricing piece](/articles/ai-stem-separation-costs/),
so briefly here, because the hardware numbers belong on this page.

**Demucs** needs Python 3.10 or newer, roughly 3 GB of GPU memory as an absolute minimum, and
about 7 GB with default settings. The documented workaround for 3 GB is the `--segment` flag
set to 8, with Hybrid Transformer models capped at 7.8 second segments. With no usable GPU it
falls back to CPU, where the project estimates processing takes about 1.5 times the track's
duration. A four minute song comes out in roughly six minutes.

**Ultimate Vocal Remover GUI** is the same family of models with a graphical front end,
bundling MDX-Net, VR Architecture and Demucs v3 and v4 together. Its stated requirements are
an Nvidia GTX 1060 6 GB as the minimum for GPU conversions, with 8 GB or more of VRAM
recommended. It's 64-bit only, targets Windows 10 and above, macOS Big Sur and above on both
arm64 and x86_64, and Debian or Arch based Linux. AMD support is limited and lives on a
separate branch. FFmpeg is needed for any input that isn't a WAV, and Rubber Band for
time-stretch and pitch-shift.

The honest summary of UVR's requirements: this is an Nvidia application. On AMD, expect
friction.

## What your hardware actually gets you

<div class="tablewrap">

| What you have | Realistic position |
| --- | --- |
| Laptop, no discrete GPU | Whisper `tiny`, `base` or `small` on CPU is fine for transcription. Demucs runs on CPU at about 1.5x realtime, which is usable per track and painful in bulk. |
| About 6 GB VRAM | Whisper `turbo`. Demucs comfortably. UVR at its stated minimum. This is the practical entry point. |
| 8 GB or more VRAM, Nvidia | Everything here, including UVR's recommended configuration and Whisper `large` at 10 GB. |
| Apple Silicon | Whisper runs well. UVR publishes arm64 builds for Big Sur and later. The GPU figures above are Nvidia VRAM numbers and don't map across, so budget some time to find out where your machine lands. |

</div>

We haven't benchmarked any of this ourselves. Every figure above is the projects' own stated
requirement, linked at the bottom, and real performance depends on your audio, your settings
and your machine.

## What doesn't run offline

Worth stating, because the absence is the useful part.

Cloud separation services, hosted mastering, and essentially all the well-known music
*generation* tools are services, not downloads. Your audio goes to their servers, and with
generation the output arrives with contract terms attached that decide what you may do with
it. We went through that in detail for [Suno's terms](/articles/can-you-sell-suno-music/).

This page only covers the three tools we verified against their own repositories. It isn't a
complete map of local AI audio tooling, and we'd rather it be short and checked than long and
assumed. If something significant is missing,
[tell us what we should be reading](/contact/).

## The short version

For transcription, Whisper, at `turbo` if you have 6 GB of VRAM and no translation
requirement. MIT on both code and weights, so there's nothing to think about on the licensing
side, and nothing leaves your machine.

For separation, UVR if you have an Nvidia card, Demucs on the command line otherwise, with
the weights licence question parked somewhere you'll remember it if the work turns
commercial.

And for anything confidential, the fact that these run locally isn't a secondary feature.
Often it's the only reason the work can be done at all.
