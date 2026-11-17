---
title: "Spotify Loudness Normalization: What Happens to Your Master"
description: "Spotify plays music at -14 LUFS, but it won't always lift a quiet master that far, and Premium's Loud setting adds a limiter. The rules from Spotify's own pages."
pubDate: 2026-11-17
byline: "Arnau Gran i Romero"
basis: documentation
tags: ["mastering", "streaming"]
faq:
  - q: "What LUFS should I master to for Spotify?"
    a: "Spotify's own advice is -14 dB integrated LUFS with true peak below -1 dBTP. If your master is louder than -14 LUFS, it asks for true peak below -2 dBTP, because louder tracks pick up more distortion when they are encoded."
  - q: "Does Spotify turn up quiet songs?"
    a: "Only as far as the peaks allow. Spotify leaves 1 dB of headroom, so its own example track at -20 LUFS with a true peak of -5 dBFS is lifted to -16 LUFS, not -14."
  - q: "Does Spotify normalize on the web player?"
    a: "No. Spotify says the web player and third-party devices such as TVs and speakers don't use loudness normalization, so there a louder master really does play louder."
  - q: "Why does my track sound quieter than others on Spotify?"
    a: "Usually because a heavily limited track and a dynamic one are played at the same measured loudness, and the dynamic one ends up feeling smaller. Spotify also names inaudible high-frequency content as something that can push the measurement up, which gets the track turned down further than it sounds."
sources:
  - title: "Spotify for Artists, Loudness normalization on Spotify"
    url: "https://support.spotify.com/uk/artists/article/loudness-normalization/"
    checked: 2026-11-17
  - title: "Spotify for Artists, Track not as loud as others?"
    url: "https://support.spotify.com/uk/artists/article/track-not-as-loud-as-others/"
    checked: 2026-11-17
---

Spotify turns almost everything down. Its playback target is -14 dB LUFS, so a master limited to -8 LUFS comes out of the app 6 dB quieter than it left your session, and every decibel of limiting you paid for in punch is handed straight back as a lower fader.

That part is well known. The parts below it are less so, and two of them change how I'd master a dynamic track for Spotify. All of it comes from Spotify's two help pages for artists, read on 17 November 2026.

## The basic rule

Spotify measures loudness when you upload, using the ITU 1770 standard, and applies gain while the track plays. Your file isn't altered. Loud masters get negative gain down to -14 LUFS, which Spotify says adds no distortion, since it is only a volume change.

Quiet masters are where it gets interesting.

## Quiet masters don't always reach -14

Positive gain is capped by the track's peaks. Spotify keeps 1 dB of headroom for its lossy encodes, so it raises a quiet track only until the true peak would reach -1 dBTP, and stops there even if that leaves the track short of -14.

Its own example: a track measuring -20 LUFS with a true peak of -5 dBFS gets lifted to -16 LUFS. That's a 4 dB lift, because 4 dB is all the room between -5 and -1. The track then plays 2 dB quieter than everything around it.

So the practical rule for a quiet, open master is simple arithmetic. Spotify will lift it by whichever is smaller: the gap between your integrated loudness and -14, or the gap between your true peak and -1. If you want a dynamic master to sit level with the rest of a playlist, the number to watch is that second gap. A track at -16 LUFS with peaks at -0.5 dBTP gets no lift at all.

## Premium's Loud setting puts a limiter on your track

Premium listeners can pick one of three levels in the app settings:

| Setting | Target |
|---|---|
| Loud | -11 dB LUFS |
| Normal (default) | -14 dB LUFS |
| Quiet | -19 dB LUFS |

Loud is the odd one. Spotify says it sets that level regardless of true peak, and uses a limiter to stop soft dynamic tracks from clipping. The limiter engages at -1 dB in sample values, with a 5 ms attack and a 100 ms decay.

Read that alongside the headroom rule and it means a carefully dynamic master, the kind Spotify's mastering tips encourage, is the one most likely to be limited by Spotify itself when a Premium listener has chosen Loud. A track already squashed to -8 LUFS just gets turned down instead. Spotify doesn't publish how many listeners use Loud, so I can't tell you how much this matters in practice, only that it happens and what the limiter's settings are.

I don't think that's a reason to master louder. Normal is the default, and on Loud a -8 LUFS master is still turned down 3 dB, so squashing it buys nothing there either. It is a reason not to treat -14 LUFS as a promise that your transients will arrive untouched everywhere.

## Albums are normalized as a whole, until someone shuffles

When an album plays in order, Spotify normalizes the entire album at once, so the gain doesn't change between tracks. Your quiet interlude stays quiet, which is what you'd want.

Shuffle the album, or hear one of its tracks in a playlist, and Spotify switches to track-by-track normalization. That interlude now gets lifted toward -14 like everything else, as far as its peaks allow. If a track only makes sense in the context of the album, it's worth hearing what it sounds like on its own at playlist level before you sign off.

## Where loudness still wins

Normalization doesn't happen everywhere. Spotify says the web player and third-party devices, naming TVs and speakers, don't use it. On those, a -8 LUFS master really does play louder than a -14 one.

That's the honest case for a loud master, and it's narrower than the loudness-war arguments usually admit: it applies to the web player and to playback on devices Spotify doesn't normalize, and nowhere else in the app.

## Why your track can sound quieter than it should

Spotify's second help page lists reasons a track sounds quieter than its neighbours, and one of them is genuinely useful if you master your own music. The ITU 1770 measurement doesn't apply a low-pass filter, so high-frequency content you can't hear still counts toward the loudness reading. The meter thinks the track is louder than it sounds, and Spotify turns it down more than your ears would.

If a master keeps measuring hotter than it sounds, it's worth looking at a spectrum analyser above 16 kHz before you reach for more limiting. I'd check that first because it costs nothing and the fix doesn't touch anything audible.

The same page explains the more familiar complaint. A dynamic track at -14 LUFS keeps its peaks, while a track mastered to around -6 LUFS gets turned down. Both play at the same measured loudness, and Spotify notes that the dynamic one's peaks can feel louder by contrast. In my reading that's the main argument for leaving dynamics in: under normalization they cost you nothing in level.

## The delivery targets

Spotify's mastering tips, as published:

- integrated loudness of -14 dB LUFS
- true peak below -1 dBTP, which it says is best for its lossy formats (Ogg Vorbis and AAC)
- true peak below -2 dBTP if the master is louder than -14 LUFS, because louder tracks pick up more distortion when encoded

The page says the same guidelines apply to lossless playback and that you only need to send one high-quality stereo master per track. Spotify prepares the compressed and lossless versions itself.

My reading of all this: master to where the track sounds right, keep true peak under -1 dBTP, and under -2 if you went loud. The -14 target matters less than the peak ceiling, because the ceiling decides how far Spotify can lift a quiet track and how cleanly a loud one survives encoding.

If you're using an AI mastering service, its loudness setting is the thing to check against these numbers. I've compared what [LANDR, eMastered and Ozone](/articles/landr-emastered-ozone/) cost and what each lets you export. Before any of it goes to a distributor, [their AI-music rules](/articles/can-you-upload-ai-music/) are worth knowing too.
