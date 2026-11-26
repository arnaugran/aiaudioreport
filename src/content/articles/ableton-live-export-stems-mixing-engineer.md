---
title: "How to Export Stems in Ableton Live for a Mixing Engineer"
description: "Ableton Live's export dialog renders every track post-fader, groups and returns included. The settings to pick for a mix engineer, from the Live 12 manual."
pubDate: 2026-11-26
byline: "Arnau Gran i Romero"
basis: documentation
tags: ["DAWs", "Ableton Live", "workflow", "mixing"]
faq:
  - q: "How do I export all tracks separately in Ableton?"
    a: "Open File > Export Audio/Video (Ctrl Shift R on Windows, Cmd Shift R on Mac) and set Rendered Track to All Individual Tracks. Live writes one file per track, including Group Tracks, return tracks and the Main track, and every file has the same length so they line up in another DAW."
  - q: "Are Ableton stems exported pre or post fader?"
    a: "Post-fader. Ableton's manual describes every Rendered Track option as the post-fader signal at the track's output, so your volume, pan and automation are in the files. Bounce Track in Place is the pre-mixer alternative: it keeps device processing but leaves volume, panning and sends out."
  - q: "What bit depth should I export stems at in Ableton?"
    a: "Ableton's manual recommends rendering to 32-bit when the file will be processed further, and adding dither only to the final render. Live offers 16, 24 and 32 bit, and dither options only apply below 32-bit."
  - q: "Why are my Ableton stems out of sync?"
    a: "If you exported MP3, that is the likely cause. Ableton's manual says Live adds a small amount of silence to the start of every exported MP3, which can cause alignment problems in another DAW. Export WAV, AIFF or FLAC instead."
sources:
  - title: "Ableton Reference Manual Version 12, Managing Files and Sets (5.1.3 Exporting Audio and Video)"
    url: "https://www.ableton.com/en/manual/managing-files-and-sets/"
    checked: 2026-11-26
  - title: "Ableton Reference Manual Version 12, Bounce to Audio"
    url: "https://www.ableton.com/en/manual/bounce-to-audio/"
    checked: 2026-11-26
draft: false
---

Live's stem export has one setting that does most of the work and three that quietly decide whether the mixing engineer can use what you send. The one doing the work is Rendered Track, set to All Individual Tracks. The three that matter are what happens to your Group Tracks, what happens to your reverb returns, and what happens to whatever you put on the Main track.

Everything below comes from two chapters of Ableton's Live 12 reference manual, read on 26 November 2026: the section on exporting audio and video, and the chapter on bouncing. Where I'm giving my own advice rather than Ableton's, I say so.

## Where the export lives

The dialog is File > Export Audio/Video, or Ctrl Shift R on Windows and Cmd Shift R on a Mac. The Rendered Track chooser at the top offers four kinds of output:

| Option | What Live renders |
|---|---|
| Main | The post-fader signal at the Main track's output, as one file |
| All Individual Tracks | One post-fader file per track, including Group Tracks, return tracks and the Main track |
| Selected Tracks Only | The same, but only for tracks you selected before opening the dialog |
| A single named track | The post-fader output of that one track |

The word that keeps coming up is post-fader. Your fader positions, your pans and your volume automation are all printed into the files. That's usually what you want, because an engineer who loads every file at unity gain hears your rough mix straight away and can start from there.

If you'd rather they didn't inherit your balance, Live has a different tool for it. The Bounce chapter says Bounce Track in Place and Bounce to New Track work post-FX and pre-mixer: device processing is committed, but volume, panning and sends are left out and stay on the new track's mixer instead. Bounce Track in Place also replaces the old Freeze and Flatten commands, according to the same chapter.

## All Individual Tracks sends more than you think

The manual is specific about what gets written, and it's more than the tracks you play.

Group Tracks are exported as files of their own. So are return tracks, and so is the Main track. A Set with 24 tracks, three groups and two returns produces 24 + 3 + 2 + 1 = 30 files, and six of them are not instruments.

That matters most for the groups. A drum group file contains the kick, snare and hats that also arrive as their own files, so an engineer who drags the whole folder into a session and hits play hears the drums twice. The clean fix, in my judgement, is to either delete the group files before you upload, or switch to Selected Tracks Only and pick exactly the tracks that should be stems. If you work in groups and want to send the summed group instead of its contents (eight drum tracks as one drum stem, say), select the group and leave its children out.

The Main file is the one I'd always keep. It's your reference mix, rendered at exactly the same length as everything else, and it's the quickest way for an engineer to check that their import matches what you heard.

Two smaller rules from the manual. Only tracks that output audio are exported, so a MIDI track with no instrument and no effects is skipped. A MIDI track with effects but no instrument does get a file, and that file is silent. If an engineer asks why there's a dead track in the folder, that's the usual reason.

## Returns and the Main track: the setting that ruins stems

Below the selection area is a toggle called Include Return and Main Effects. With it on, each exported track also carries the signal from any return tracks it uses, plus any effects on the Main track. Ableton suggests it for stems meant for live performance or a remix, where you want the processing baked in.

For a mixing engineer I'd leave it off, and the Main half of the option is why. Whatever is on your Main track gets rendered into every stem. If you've got a limiter, a bus compressor or a mastering chain sitting there, each file is printed through it separately, and the engineer gets 24 tracks that have each been squashed on their own and can't be undone.

With the toggle off, the return tracks still arrive as separate files, because All Individual Tracks exports them anyway. The engineer gets dry tracks plus your reverb and delay returns as their own stems. They can use your returns, rebuild them, or mute them, which is the choice they'll want.

My own habit, as judgement rather than anything Ableton prescribes: before exporting, I'd deactivate every device on the Main track and render one Main file with them back on as the reference. The stems then carry no bus processing at all, and the engineer still hears how the finished thing was meant to sound.

## Length and alignment

By default Render Start and Render Length cover the whole Set. You can narrow the range by making a time selection in Arrangement View before you open the dialog, but for stems I'd keep the full length. The manual says all files from an individual-tracks export share the same length, which is exactly what lets them line up at bar one in another DAW, and a stem that starts later than the others throws that away.

There's a trap if you play from Session View. The manual says the export only contains what you heard before rendering, so if Session clips were playing alongside the Arrangement, only the active clip on each track is captured. Stop every Session clip before you export, so the Arrangement is the only thing Live renders.

Render as Loop is for loops, not songs. It runs two passes and wraps any effect tail from the end back onto the start of the file, so a reverb tail that runs past your last clip ends up at the top of the stem. For a song that's the last thing you want. Leave it off.

## Format, bit depth and sample rate

Under Encode PCM, Live offers WAV, AIFF or FLAC, at 16, 24 or 32 bit. Ask the engineer which they prefer. If they don't mind, WAV is the one nobody will have trouble opening.

On bit depth, the manual is direct: if the file will be processed further, render to 32-bit first and add dither only to the final render. Dither options only appear below 32-bit, and the manual says dither should be applied once to any file, with POW-r never used on files headed for a further mastering stage. Stems for a mix are about as "processed further" as audio gets, so 32-bit with no dither is the setting that follows from Ableton's own advice.

The cost is disk space, and it's easy to work out. A stereo file at 48 kHz and 24-bit takes 48,000 × 3 bytes × 2 channels, or 288,000 bytes per second. For a 3 minute 30 song that's about 60.5 MB per file. At 32-bit it's 4 bytes per sample, so about 80.6 MB. Across the 30 files from the example Set, that's roughly 1.8 GB at 24-bit against 2.4 GB at 32-bit. Most file transfer services handle either, but check before you assume.

For sample rate, pick the one your Set already runs at, which you'll find in the In/Out Sample Rate chooser in Live's Audio Settings. The manual explains that choosing a lower rate than the Set makes Live render at the project rate and then downsample in a second step with the SoX resampler.

It describes that result as having extremely low distortion, so it's not a disaster, but there's no reason to resample stems the engineer will mix at your rate anyway.

Leave Normalize off. The manual says it raises the gain until the highest peak reaches the maximum available headroom. Applied to stems, I read that as each file being raised by its own amount, which would undo the balance that post-fader export was preserving. Leave Convert to Mono off too, unless the engineer asked for mono files on mono sources.

## Never send MP3 stems

Encode MP3 renders a constant 320 kbps file, and you can tick it alongside PCM. The manual warns that Live adds a small amount of silence to the start of every exported MP3, whatever the render start point, and that this can cause alignment problems in another DAW. A set of MP3 stems all offset by the same sliver might line up with each other, but they won't line up with the WAV you send later as a fix.

Use MP3 for a quick reference bounce to a phone, if at all.

## If you use outboard gear

Rendering is normally offline. The manual says it becomes real time when a track is routed through an External Audio Effect or External Instrument, and only for the Main output and the tracks using external devices. Before starting, Live waits 10 seconds so any lingering hardware output can fade out, and you can lengthen or skip that wait.

There's an Auto-Restart on drop-outs toggle that starts the render again if Live detects gaps or glitches. With a big stem export through hardware, I'd turn that on and close every other application before pressing Export, since a real-time render that drops out halfway through means starting over.

## The settings, in one place

Open File > Export Audio/Video and set Rendered Track to All Individual Tracks, or Selected Tracks Only if you work with groups. Switch Include Return and Main Effects off, and Render as Loop, Normalize and Convert to Mono with it. Choose WAV at 32-bit, sample rate matching the Set. Leave Encode MP3 unticked. Then open the export folder and delete any group files you didn't mean to send before the zip goes anywhere.

If the stems are coming back to you for mastering, the delivery numbers for each platform are a separate job: I've covered [what Spotify does to your master](/articles/spotify-loudness-normalization-master/) and [what to export for YouTube](/articles/youtube-audio-upload-settings-music/).
