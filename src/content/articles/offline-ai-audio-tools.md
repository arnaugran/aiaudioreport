---
title: "Which AI Audio Tools Run Offline, and What Hardware They Need"
description: "Whisper releases its model weights under MIT. Demucs does not, and says so. If your audio cannot be uploaded, that distinction decides what you can actually use."
pubDate: 2026-11-08
byline: "Fader Report editorial team"
reviewedBy: "Arnau Grani Romero"
basis: documentation
tags: ["local tools", "licensing"]
sources:
  - title: "OpenAI Whisper — source repository, licence and model size table"
    url: "https://github.com/openai/whisper"
    checked: 2026-11-07
  - title: "Demucs — source repository, licence notes and model documentation"
    url: "https://github.com/adefossez/demucs"
    checked: 2026-11-07
  - title: "Ultimate Vocal Remover GUI — source repository and system requirements"
    url: "https://github.com/Anjok07/ultimatevocalremovergui"
    checked: 2026-11-07
---

There is a category of audio work where "just upload it to a cloud service" is not an
available answer. Unreleased material you are mixing for somebody else. A session under
an NDA. Interviews with people who did not agree to have their voice sent to a third
party. Anything where the file leaving your machine is itself the problem.

For that work the question stops being which tool is best and becomes which tools run
entirely on your own hardware — and then, immediately, whether their licences let you use
the results for paid work. Those two questions have different answers, and the second one
is where this gets interesting.

## The split that decides everything: code versus weights

An open-source AI tool has two separately licensed parts. The **code** that runs the
model, and the **weights** — the trained model file that does the actual work. A
repository can release one freely and be vague about the other, and this happens more
often than you would expect.

Compare the two most useful tools in this space, read from their own repositories on
7 November 2026:

<div class="tablewrap">

| | Code licence | Weights licence |
| --- | --- | --- |
| **Whisper** (transcription) | MIT | **MIT** — the repository states code *and* model weights are released under it |
| **Demucs** (stem separation) | MIT | **"The license of the weights is not clear"** — the project's own words |

</div>

Demucs explains why: its training drew on MUSDB data that is research-only, plus internal
Meta datasets. The authors are being straight about an ambiguity rather than papering
over it, which is to their credit and also means nobody downstream can resolve it.

The practical consequence is narrow but real. Running Demucs for your own practice,
learning a part, or remixing at home is not something anyone is going to question. Making
separated stems a component of work you invoice for means depending on weights whose
licence the people who trained them describe as unclear. Whisper carries no equivalent
asterisk: MIT on both halves, commercial use included, no ambiguity to inherit.

If you only take one thing from this page, that is it. "Free and open source" is not one
property, and the half that matters commercially is the half people check least.

## Transcription: Whisper, and which size to run

Whisper does speech recognition, speech translation and language identification in a
single model. For audio work the use cases are mundane and constant: transcribing
interviews, generating captions, logging takes, making a session searchable.

The repository publishes a model size table, which is the only thing you need to pick
one:

<div class="tablewrap">

| Size | Parameters | Required VRAM | Relative speed |
| --- | --- | --- | --- |
| tiny | 39 M | ~1 GB | ~10× |
| base | 74 M | ~1 GB | ~7× |
| small | 244 M | ~2 GB | ~4× |
| medium | 769 M | ~5 GB | ~2× |
| large | 1,550 M | ~10 GB | 1× |
| turbo | 809 M | ~6 GB | ~8× |

</div>

Speeds are relative to `large`, measured by the project on an A100 transcribing English.
Your machine will not be an A100; treat the column as ratios between the models rather
than a promise about your laptop.

`turbo` is the one worth knowing about. The repository describes it as an optimised
version of `large-v3` with faster transcription and minimal accuracy loss — roughly
eight times the speed of `large` for about 6 GB of VRAM instead of 10. For most
transcription work that is the sweet spot by a wide margin.

Two caveats the table does not show. `turbo` is **not trained for translation**, so if
you need speech in one language turned into text in another, you are back to `large`.
And the model list splits below `large`: English-only variants (`tiny.en` through
`medium.en`) are published alongside the multilingual ones, but there is no `large.en` or
`turbo.en`. If your material is all English, the `.en` build at your chosen size is worth
trying first — though we have not seen a published accuracy comparison between the two
and are not going to assert one.

## Separation: Demucs and UVR

Covered in detail in our [stem separation pricing piece](/articles/ai-stem-separation-costs/),
so briefly here, because the hardware numbers belong on this page.

**Demucs** needs Python 3.10 or newer and roughly 3 GB of GPU memory as an absolute
minimum, about 7 GB with default settings. The documented workaround for 3 GB is the
`--segment` flag set to 8, with Hybrid Transformer models capped at 7.8-second segments.
With no usable GPU it falls back to CPU, where the project estimates processing takes
about 1.5× the track's duration — a four-minute song in roughly six minutes.

**Ultimate Vocal Remover GUI** is the same family of models with a graphical front end,
bundling MDX-Net, VR Architecture and Demucs v3 and v4 together. Its stated requirements
are an Nvidia GTX 1060 6 GB as the minimum for GPU conversions, with 8 GB or more of VRAM
recommended. It is 64-bit only, targets Windows 10 and above, macOS Big Sur and above on
both arm64 and x86_64, and Debian or Arch-based Linux. AMD support is limited and lives
on a separate branch. FFmpeg is needed for any input that is not a WAV, and Rubber Band
for time-stretch and pitch-shift.

The honest summary of UVR's requirements is: this is an Nvidia application. If you are on
AMD, expect friction.

## What your hardware actually gets you

<div class="tablewrap">

| What you have | Realistic position |
| --- | --- |
| Laptop, no discrete GPU | Whisper `tiny`/`base`/`small` on CPU is fine for transcription. Demucs runs on CPU at ~1.5× realtime — usable per track, painful in bulk. |
| ~6 GB VRAM | Whisper `turbo`. Demucs comfortably. UVR at its stated minimum. This is the practical entry point. |
| 8 GB+ VRAM, Nvidia | Everything here, including UVR's recommended configuration and Whisper `large` at 10 GB. |
| Apple Silicon | Whisper runs well. UVR publishes arm64 builds for Big Sur and later. The GPU figures above are Nvidia VRAM numbers and do not map across — budget time to find out where your machine lands. |

</div>

We have not benchmarked any of this ourselves. Every figure above is the projects' own
stated requirement, linked at the bottom, and real-world performance depends on your
audio, your settings and your machine.

## What does not run offline

Worth stating, because the absence is the useful part.

Cloud separation services, hosted mastering, and essentially all of the well-known music
*generation* tools are services, not downloads. Your audio goes to their servers, and in
the generation case the output comes with contract terms attached that determine what you
may do with it — a problem we went through in detail for
[Suno's terms](/articles/can-you-sell-suno-music/).

This page covers only the three tools we verified against their own repositories. It is
not a complete map of local AI audio tooling, and we would rather it be short and checked
than long and assumed. If something significant is missing,
[tell us what we should be reading](/contact/).

## The short version

For transcription, Whisper, at `turbo` if you have 6 GB of VRAM and no translation
requirement. MIT on both code and weights, so there is nothing to think about on the
licensing side, and nothing leaves your machine.

For separation, UVR if you have an Nvidia card, Demucs on the command line otherwise,
with the weights-licence question parked somewhere you will remember it if the work turns
commercial.

And for anything confidential: the fact that these run locally is not a secondary
feature. It is frequently the only reason the work can be done at all.
