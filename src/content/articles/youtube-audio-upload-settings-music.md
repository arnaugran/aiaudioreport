---
title: "YouTube Audio Upload Settings: What to Export for Music"
description: "YouTube won't take a WAV on its own and recommends 48 kHz AAC at 384 kbps inside an MP4. The audio settings to export for a track, from YouTube's help pages."
pubDate: 2026-11-23
byline: "Arnau Gran i Romero"
basis: documentation
tags: ["mastering", "streaming", "YouTube", "workflow"]
faq:
  - q: "Can I upload a WAV file to YouTube?"
    a: "Not on its own. YouTube's list of supported file formats says audio files such as MP3, WAV or PCM can't be uploaded to create a video, and that you should turn the audio into a video in editing software first. Audio-only files are accepted only as extra language tracks for an existing video."
  - q: "What audio bitrate should I use for YouTube?"
    a: "YouTube's recommended upload encoding settings give 384 kbps for stereo, 128 kbps for mono and 512 kbps for 5.1, with AAC-LC or Opus as the codec and 48 kHz as the sample rate. The same page says audio playback bitrate is not related to video resolution."
  - q: "Does YouTube normalize music volume?"
    a: "YouTube's help page on stable volume says the feature is on by default and keeps adjusting levels to reduce the gap between quiet and loud passages, but that it is turned off for YouTube Music and official music videos."
  - q: "What bitrate does YouTube Music stream at?"
    a: "YouTube Music's help centre lists Low at up to 48 kbps, Normal at up to 128 kbps and High at up to 256 kbps, all AAC or Opus, plus an Always High setting at 256 kbps. Premium members choose the setting, and Normal is the default."
sources:
  - title: "YouTube Help, Supported YouTube file formats"
    url: "https://support.google.com/youtube/troubleshooter/2888402?hl=en"
    checked: 2026-11-23
  - title: "YouTube Help, YouTube recommended upload encoding settings"
    url: "https://support.google.com/youtube/answer/1722171?hl=en"
    checked: 2026-11-23
  - title: "YouTube Help, Video and audio formatting specifications"
    url: "https://support.google.com/youtube/answer/4603579?hl=en"
    checked: 2026-11-23
  - title: "YouTube Help, Control video volume on your device"
    url: "https://support.google.com/youtube/answer/14106294?hl=en"
    checked: 2026-11-23
  - title: "YouTube Music Help, Change your audio quality"
    url: "https://support.google.com/youtubemusic/answer/9076559?hl=en"
    checked: 2026-11-23
  - title: "YouTube Help, Upload videos longer than 15 minutes"
    url: "https://support.google.com/youtube/answer/71673?hl=en"
    checked: 2026-11-23
draft: false
---

The master you bounce for Spotify is the wrong file for YouTube, and not because of loudness. YouTube won't accept it at all. Its list of supported file formats says plainly that audio files, MP3, WAV or PCM, can't be uploaded to create a video. You have to wrap the track in a video first, and the moment you do that, the audio settings are being chosen by whatever made the video, which for most producers is a video editor's export preset rather than the DAW.

That's the part worth getting right. Below is what YouTube's own help pages ask for, read on 23 November 2026, and what I'd do with it.

## The numbers YouTube publishes

YouTube's recommended upload encoding settings page is short on audio, and every line of it matters:

| Setting | YouTube's recommendation |
|---|---|
| Container | MP4, no edit lists, moov atom at the front (Fast Start) |
| Audio codec | AAC-LC, Opus or Eclipsa Audio |
| Channels | Stereo, Stereo + 5.1, or Stereo + Eclipsa Audio |
| Sample rate | 48 kHz |
| Bitrate, stereo | 384 kbps |
| Bitrate, mono | 128 kbps |
| Bitrate, 5.1 | 512 kbps |

The page also carries one sentence I'd pin above every video export dialog: audio playback bitrate is not related to video resolution. A static artwork video at 1080p doesn't get better audio than one at 720p, so there's no reason to render a heavy picture just to protect the sound.

A caveat on that page. It opens with a note saying its features are only available to partners who use YouTube Studio Content Manager, which is the tool labels and distributors use. It is still the only place YouTube writes down audio codec, rate and bitrate figures for uploads, and the ordinary file formats troubleshooter points to it for "more advanced info". I treat it as the spec, because nothing else published contradicts it.

## Turning a track into a file YouTube will take

The accepted list is long: .MOV, .MP4, .MPG, .AVI, .WMV, WebM, ProRes, DNxHR, HEVC and several more. You don't need most of them. An MP4 with AAC-LC audio matches the recommended settings exactly, and it's what almost every editor and free converter can produce.

Start in the DAW. Bounce a 24-bit WAV at 48 kHz from the finished master, so the sample rate is already what YouTube asks for before any lossy step happens. If your session runs at 44.1 kHz, something will convert it to 48 kHz on the way: your DAW, your video editor or YouTube. My preference is the DAW, because that is the converter whose settings you can see. That's judgement, not a measurement.

Once that's done, put the WAV in the video editor alongside your artwork or footage, and go straight to the audio section of the export settings. Set the codec to AAC, the sample rate to 48 kHz, channels to stereo and the bitrate to 384 kbps. A preset built for video is set up around the picture, so don't assume its audio defaults match YouTube's figure.

The arithmetic on file size explains why there's no reason to save bits here. A four minute track is 240 seconds:

| Audio inside the video | Data rate | Four minutes |
|---|---|---|
| AAC at 384 kbps | 384 kbps | about 11.5 MB |
| PCM, 48 kHz, 16-bit stereo | 1,536 kbps | about 46 MB |
| PCM, 48 kHz, 24-bit stereo | 2,304 kbps | about 69 MB |

YouTube's maximum upload is 256 GB or 12 hours, whichever is less. Even the 24-bit figure is a rounding error against that, and against the picture: YouTube's own recommended video bitrate for 1080p at standard frame rates is 8 Mbps, more than 20 times the 384 kbps audio.

One limit catches people with long mixes. By default, YouTube lets you upload videos up to 15 minutes long. An hour-long DJ mix or an album in one video needs a verified account, which YouTube does by text or voice call from the mobile app.

## YouTube re-encodes it anyway

Whatever you send, it isn't what listeners hear. YouTube's specifications page for label and distributor partners says YouTube always re-encodes videos to optimise playback, and encourages uploads as close to the original source as possible. The point of 384 kbps is to hand that encoder a clean starting file, so the generation loss happens once, at YouTube, and not twice.

You can put a ceiling on that from the YouTube Music side. Its help centre lists the bitrates a listener gets:

| YouTube Music setting | Up to | Codec |
|---|---|---|
| Low | 48 kbps | AAC or Opus |
| Normal (default) | 128 kbps | AAC or Opus |
| High | 256 kbps | AAC or Opus |
| Always High | 256 kbps | AAC or Opus |

Premium members choose the setting, and anyone who hasn't chosen gets Normal for their location. So the best case for a listener is 256 kbps, and the recommended upload is 1.5 times that. The default listener is on 128 kbps, a third of what you sent.

If your track reaches YouTube through a distributor rather than your own channel, the delivery rules are the distributor's. YouTube's partner specification lists the audio formats it takes in that route as MP3 in an MP3 or WAV container, PCM in WAV, AAC in MOV, and FLAC, with a 64 kbps floor for lossy files and a minimum of 33 seconds of audible audio. YouTube says those guidelines are also what it uses to match your tracks against the audio in other people's uploads, so a sketch shorter than 33 seconds falls below the floor for that route.

## Volume: what YouTube says it does

What YouTube documents about playback volume is stable volume, which it says is on by default and continuously adjusts levels to reduce the gap between quiet and loud passages. As described, that's continuous levelling, a different thing from the per-track gain covered in my piece on [Spotify loudness normalization](/articles/spotify-loudness-normalization-master/).

The same page says stable volume is turned off for YouTube Music and official music videos. A beat or a track you upload to your own channel as an ordinary video isn't described as either. On a phone or a TV, then, I'd assume a viewer may be hearing your dynamics through stable volume unless they've switched it off. YouTube also says voice boost, which reduces background sound to bring out dialogue, turns stable volume off when it's on. Neither setting changes your file.

I don't think stable volume is a reason to master differently for YouTube. You can't predict whether it's on, and squashing a master to pre-empt an automatic leveller just means the viewers who've switched it off get the squashed version. It is a reason not to judge your YouTube upload by how it sounds on a phone in the YouTube app.

## Who should do something else

If a distributor delivers your release to YouTube, you don't make this file at all. You send the distributor its usual lossless master, and the format YouTube receives is between them and YouTube. And if you already master for lossy streaming, the headroom habits from my piece on [Apple Digital Masters](/articles/apple-digital-masters-aac-encoding/) carry over, since YouTube's encode is one more lossy step.

For everyone uploading their own track as a video, the one setting to check before you hit export is the audio bitrate field in the video editor. If it says 128 or 192, change it to 384, and set 48 kHz while you're there.
