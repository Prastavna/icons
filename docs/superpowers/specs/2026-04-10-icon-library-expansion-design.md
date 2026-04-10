# Icon Library Expansion Design

**Date:** 2026-04-10
**Status:** Approved

## Overview

Expand `@prastavna/icons` from a music notation library (148 icons, 16 categories) into a broader icon library covering music instruments, music player UI, extended notation, and a full general-purpose icon set — all in the same package.

Target: ~528 icons (1056 with filled variants), up from 148 (296 with filled variants).

## Architecture

No structural changes to the existing codebase. New categories are added as subdirectories under `src/icons/` alongside existing ones, following identical patterns.

```
src/icons/
  # Existing (16 categories — unchanged)
  notes/  rests/  clefs/  accidentals/  time-signatures/  dynamics/
  articulations/  ornaments/  repeats/  barlines/  beams/  ties/
  slurs/  pedals/  bows/  misc/

  # New music categories
  notation-extended/
  instruments/
  player/

  # New generic categories (sourced from Lucide)
  arrows/
  navigation/
  actions/
  files/
  communication/
  ui/
  shapes/
  media/
  data/
  time/
  weather/
  maps/
  social/
  dev/
  commerce/
```

Each category is a self-contained directory with an `index.ts` exporting icon functions via `createIcon()`.

## Icon Source

- **Music icons (notation-extended, instruments, player):** Hand-crafted SVGs.
- **Generic icons:** SVG paths sourced from [Lucide](https://lucide.dev) (MIT License). Every generic category file includes the attribution comment:
  ```ts
  // SVG paths sourced from Lucide (https://lucide.dev) — MIT License
  ```

## Icon Inventory

### New Music Icons (~80 icons, 160 with filled variants)

| Category            | Count | Examples                                                                                                                                               |
| ------------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `notation-extended` | 24    | breath-mark, caesura, glissando, arpeggio, portamento, vibrato, harmonics, snap-pizzicato, bartok-pizzicato, col-legno, sul-ponticello, trill-extended |
| `instruments`       | 32    | guitar, guitar-electric, piano, violin, cello, double-bass, trumpet, saxophone, flute, clarinet, drum, drum-kit, harp, accordion, banjo, ukulele       |
| `player`            | 24    | play, pause, stop, skip-forward, skip-back, shuffle, repeat, repeat-once, volume, volume-mute, volume-low, waveform                                    |

### New Generic Icons (~320 icons, 640 with filled variants)

| Category        | Count | Examples                                                                                               |
| --------------- | ----- | ------------------------------------------------------------------------------------------------------ |
| `arrows`        | 30    | arrow-right/left/up/down, chevron-_, corner-_, diagonal-\*, move, expand                               |
| `actions`       | 40    | edit, trash, copy, save, share, upload, download, refresh, filter, sort, search, plus, minus, check, x |
| `navigation`    | 20    | home, menu, sidebar, grid, list, back, forward, external-link, anchor                                  |
| `files`         | 25    | file, folder, image, video, audio, pdf, code, zip, text, spreadsheet                                   |
| `communication` | 25    | mail, bell, chat, user, users, phone, message, inbox, send                                             |
| `ui`            | 40    | settings, close, eye, eye-off, lock, unlock, star, heart, bookmark, flag, tag, badge                   |
| `shapes`        | 15    | circle, square, triangle, diamond, hexagon, octagon                                                    |
| `media`         | 20    | camera, mic, speaker, screen, tv, headphones, radio                                                    |
| `data`          | 20    | chart-bar, chart-line, chart-pie, table, database, server                                              |
| `time`          | 15    | clock, calendar, timer, hourglass, alarm                                                               |
| `weather`       | 15    | sun, moon, cloud, rain, snow, wind, lightning                                                          |
| `maps`          | 15    | map, map-pin, compass, globe, route                                                                    |
| `social`        | 15    | link, share, rss, qr-code, at-sign                                                                     |
| `dev`           | 20    | code, terminal, bug, git-branch, package, brackets                                                     |
| `commerce`      | 15    | cart, bag, tag, credit-card, receipt, wallet                                                           |

## Naming Convention

All icons follow the existing camelCase category-prefix pattern:

```ts
// Music additions
instrumentGuitar          instrumentGuitarFilled
playerPlay                playerPlayFilled
notationBreathMark        notationBreathMarkFilled

// Generic
arrowRight                arrowRightFilled
actionEdit                actionEditFilled
uiSettings                uiSettingsFilled
fileFolder                fileFolderFilled
communicationMail         communicationMailFilled
```

## Subpath Imports

Every new category is available as a subpath import (added to `package.json` exports):

```ts
import { guitar, piano } from "@prastavna/icons/instruments";
import { play, pause, volume } from "@prastavna/icons/player";
import { arrowRight, chevronDown } from "@prastavna/icons/arrows";
import { edit, trash, save } from "@prastavna/icons/actions";
```

## Changes Required

1. **`src/icons/<category>/index.ts`** — one file per new category with `createIcon()` calls
2. **`src/index.ts`** — new export blocks appended, grouped under comments:
   - `// Music — Notation Extended`
   - `// Music — Instruments`
   - `// Music — Player`
   - `// Generic — Arrows`
   - `// Generic — Actions`
   - ... (one comment block per generic category)
3. **`package.json` exports map** — new subpath entries for all 18 new categories
4. **`README.md`** — update icon count, add new categories to the reference table

## Non-Goals

- No new framework adapters (React, Vue wrappers) — out of scope
- No icon search/discovery UI — out of scope
- No changes to `createIcon()` core API
- No changes to existing icon names or categories
