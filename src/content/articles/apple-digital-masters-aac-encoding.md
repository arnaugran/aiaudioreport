---
title: "Apple Digital Masters: What Happens to Your File at Ingest"
description: "Apple turns a 24-bit master into 256 kbps AAC through a 32-bit float stage. How that pipeline works, and how to run the same encode on your Mac with afconvert."
pubDate: 2026-11-19
byline: "Arnau Gran i Romero"
basis: documentation
tags: ["mastering", "streaming", "Apple Music"]
faq:
  - q: "What sample rate and bit depth should I send to Apple Music?"
    a: "Apple's Apple Digital Masters brief asks for 24-bit sources at the highest native sample rate you have. It asks you not to upsample, and not to pad a 16-bit file out to 24 bits, because neither adds information."
  - q: "What bitrate does Apple Music stream AAC at?"
    a: "Apple's brief describes its encodes as 256 kbps AAC using variable bit rate, which spends fewer bits on simple passages and more on complex ones. Subscribers with lossless turned on get Apple Lossless (ALAC) made from the same master."
  - q: "How much headroom should I leave for Apple Music?"
    a: "Apple recommends at least 1 dB of headroom, because the oversampling in playback converters can clip a signal sitting at 0 dBFS. Its afclip tool checks for inter-sample clipping by default, and Apple says levels that show no overs in PCM can still clip once encoded."
  - q: "Do I need to send a separate master for Apple lossless?"
    a: "No. Apple says the same Apple Digital Master is used for the ALAC encodes as for the AAC encodes, so one 24-bit file covers both."
sources:
  - title: "Apple, Apple Digital Masters"
    url: "https://www.apple.com/apple-music/apple-digital-masters/"
    checked: 2026-11-19
  - title: "Apple, Apple Digital Masters technology brief (PDF, April 2021)"
    url: "https://www.apple.com/apple-music/apple-digital-masters/docs/apple-digital-masters.pdf"
    checked: 2026-11-19
  - title: "Apple Support, About lossless audio in Apple Music"
    url: "https://support.apple.com/en-us/118295"
    checked: 2026-11-19
draft: false
---

Apple never streams the WAV you uploaded. A listener who hasn't switched lossless on hears a 256 kbps AAC file made from it, and one who has hears an Apple Lossless copy of the same master. The useful part is that Apple gives you the encoder. The exact commands it runs at ingest are published, and the tools ship inside macOS, so you can hear your master the way a subscriber on AirPods will before it leaves your studio.

Everything below comes from Apple's own Apple Digital Masters page and the eight-page technology brief linked from it, dated April 2021, plus Apple's support page on lossless playback. I read all three on 19 November 2026.

## What Apple asks you to deliver

The deliverable is a 24-bit PCM file at the highest native sample rate you have. Apple says this more than once in the brief, and it repeats it after every tool that makes a decoded file: those files are for listening and comparison, and "the deliverable for Apple Digital Masters is the original 24 bit PCM file."

Two things it asks you not to do. Don't upsample a file to a higher rate than it was made at, and don't pad a 16-bit file out to 24 bits. Neither adds information, which is Apple's reasoning and also just arithmetic: zeros in the bottom eight bits are still zeros.

Apple also addresses a habit some mastering engineers have of doing the sample rate conversion themselves and sending a file that's already at the final rate. It asks for the native rate anyway, on the grounds that keeping the highest resolution in its systems lets future improvements reach your music. I'd go along with that. If your session runs at 96 kHz, send 96 kHz, and let the conversion happen once, in Apple's chain, rather than twice.

## The pipeline, in two steps

The brief describes Apple's encode as a two-stage process, and the first stage is the interesting one.

Start with sample rate conversion. If your master runs above Apple's final production rate, it is resampled with what Apple calls mastering-quality SRC. The output of that step is a 32-bit floating-point file in a CAF container, and that matters more than it sounds. A float file can hold values above full scale without clipping them, so the overshoots that resampling can create survive the conversion intact instead of being flattened.

Apple says this intermediate step prevents the aliasing or clipping that could otherwise happen in SRC.

Once that's done, the float file goes into the AAC encoder. Because the encoder is fed the full-resolution signal, Apple says it needs no dither, and makes two claims for that: there's no dither noise added to your track, and the encoder doesn't waste bits encoding noise nobody wanted.

Put those together and you get the reason Apple asks for 24-bit and native rate. Every reduction in resolution happens inside one chain that never truncates and never dithers to 16 bits. The CD route forces exactly the step Apple is avoiding: its 16-bit, 44.1 kHz format, which the brief describes as 44,100 samples a second each given a value between -32,768 and 32,767, means somebody has to reduce the bit depth and pick a dither on the way down.

## What 256 kbps actually is

Apple's AAC encodes target 256 kilobits per second using variable bit rate, so simple passages get fewer bits and complex ones get more. To put that number against your master, uncompressed stereo PCM runs at sample rate times bit depth times two channels:

| Format | Data rate | Ratio to 256 kbps |
|---|---|---|
| 24-bit, 96 kHz | 4,608 kbps | 18 to 1 |
| 24-bit, 48 kHz | 2,304 kbps | 9 to 1 |
| 16-bit, 44.1 kHz | 1,411.2 kbps | about 5.5 to 1 |

So a 96 kHz master gives up about 17 of every 18 bits of data rate on the way to an AAC stream. At 256 kbps a minute of audio comes to about 1.92 MB (256,000 bits times 60 seconds, divided by eight).

Apple's position is that the result is "virtually indistinguishable from the original 24 bit studio masters." That's the company's claim about its own encoder, and the honest response is to check it on your own material, which the tools below let you do.

## The clipping you can't see in your DAW

This is the section I'd read twice. Apple recommends leaving at least 1 dB of headroom, and its reason isn't about the encoder at all. Playback converters commonly oversample, which the brief describes as upsampling the data to four times the original rate. A master already sitting at 0 dBFS can clip in that process, and a master that was already clipped gets worse.

The brief then makes a sharper point about its own clip checker. Levels that show no overs in a PCM file can still cause clipping once encoded, which is why Apple says checking the encoded file matters more than checking the 24-bit master.

Its afclip tool reports each clipped sample with the time, sample number, channel and the amount in decibels over the clipping point. When the sample number in the readout has a decimal, the waveform is clipping between two samples: inter-sample clipping, the kind a sample-peak meter misses entirely. afclip checks for it by default and totals it separately from on-sample clipping.

In my judgement this is where a hot, limiter-heavy master is most exposed on Apple Music, more than in Sound Check. A ceiling of -0.1 dBFS on sample peaks tells you nothing about what happens after the encode. Apple's 1 dB figure is the floor I'd use, and I'd go further on dense material if afclip still finds overs on the AAC file.

## Running Apple's encode yourself

Apple publishes the commands it uses at ingest. If your WAV is already at the final rate, the first step turns it into a CAF and writes Sound Check data into it:

```
afconvert source.wav intermediate.caf -d 0 -f caff -soundcheck-generate
```

If your file runs higher than the final rate, the first step resamples it to 32-bit float as well. Apple's brief uses xxxxx as a placeholder for the final sample rate:

```
afconvert source.wav -d LEF32@xxxxx -f caff -soundcheck-generate --src-complexity bats -r 127 intermediate.caf
```

Then encode to 256 kbps AAC:

```
afconvert intermediate.caf -d aac -f m4af -u pgcm 2 -soundcheck-read -b 256000 -q 127 -s 2 final.m4a
```

To compare properly, decode the result back to a 24-bit WAV with `afconvert final.m4a decode.wav -d LEI24 -f WAVE`. Apple says afconvert's decode keeps the same number of samples as your source, so the two files line up exactly in your DAW for a null test or an A/B. Then run `afclip` on the encoded file and read what it finds.

If you'd rather not touch Terminal, Apple offers the same thing as a drag-and-drop droplet on its Apple Digital Masters page, and an Audio Unit called AURoundTripAAC that plays the encoded version against the source in real time with clip and peak detection.

The page says AURoundTrip and afclip now ship with current versions of macOS. Apple also notes that the encoder version it runs might not match the one in your copy of macOS, and that the difference doesn't change the sonic result or the levels at which the encoder clips.

## Sound Check, briefly

Sound Check is Apple's loudness normalization. The brief says it measures a track's loudness, stores it in the file's metadata and uses that to turn tracks up or down so shuffled songs don't jump in level. It can also work per album, keeping the level differences between tracks that an album depends on.

Apple's advice is the same as Spotify's in spirit: tracks mastered loud get played back quieter and can sound weaker for it, so master for the sound you want rather than for level. I've set out what Spotify publishes about its own normalization, numbers included, in [what Spotify does to your master](/articles/spotify-loudness-normalization-master/).

## The lossless copy, and who hears it

Apple says there's no need to send two masters. The same file feeds the ALAC encodes and the AAC ones.

Apple's lossless support page is worth knowing for what it says about listeners, because it shapes how many people hear which file. Bluetooth connections aren't lossless, and AirPods Pro 1, AirPods 3 and earlier, AirPods Max over Bluetooth and most Beats wireless headphones use Apple's AAC Bluetooth codec instead. On an iPhone, playing anything above 48 kHz needs an external digital-to-analogue converter. The 14-inch and 16-inch MacBook Pro play up to 96 kHz natively, and other Macs need an external converter above 48 kHz.

My reading: anyone on those wireless headphones hears your 96 kHz upload through a lossy chain, whatever they've set in the app. That's the strongest argument for auditioning the AAC encode rather than the WAV.

## Before you upload

Bounce your final master as 24-bit at the session's native rate. Run the two afconvert steps, decode, and run afclip on the decoded file. If it reports any clipped samples, inter-sample ones included, pull the limiter ceiling down and encode again until it reports none.

If you master with an AI service, check whether its export offers 24-bit WAV at your session's rate, since that's what Apple asks for. I've compared what [LANDR, eMastered and Ozone](/articles/landr-emastered-ozone/) cost and let you export. And if any of the track was generated, read [what distributors allow for AI music](/articles/can-you-upload-ai-music/) before it goes anywhere.
