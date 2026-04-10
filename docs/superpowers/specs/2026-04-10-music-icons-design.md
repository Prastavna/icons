# Design: `@prastavna/icons` — Music Score Icon Library

## Overview

A framework-agnostic SVG icon library covering music score notation symbols for any instrument. Each icon ships in **outline** and **filled** variants, uses a **configurable viewBox** (default 24x24), and is exported as a callable function with metadata properties.

The library exports raw SVG strings — no framework dependencies. Consumers in React, Vue, Svelte, or vanilla JS can use icons directly or wrap them as needed.

## Icon API

Each icon is a callable function with attached metadata:

```ts
// Call for SVG string
noteQuarter(); // default <svg> string
noteQuarter({ size: 32, color: "#fff", class: "icon" }); // customized

// Metadata properties
noteQuarter.name; // "note-quarter"
noteQuarter.category; // "note"
noteQuarter.variant; // "outline"
noteQuarter.viewBox; // "0 0 24 24"
noteQuarter.svg; // default SVG string (same as calling with no args)
```

### Options Interface

```ts
interface IconOptions {
  size?: number; // sets width & height (default: 24)
  width?: number; // override width independently
  height?: number; // override height independently
  color?: string; // sets stroke (outline) or fill (filled)
  class?: string; // CSS class attribute
  viewBox?: string; // override viewBox (default: "0 0 24 24")
  strokeWidth?: number; // outline variant only (default: 2)
  [key: string]: string | number | undefined; // arbitrary SVG attributes
}
```

When both `size` and `width`/`height` are provided, `width`/`height` take precedence. The `color` option sets `stroke` for outline icons and `fill` for filled icons. The index signature allows passing arbitrary SVG attributes (e.g., `id`, `aria-label`, `data-*`).

## Naming Convention

Category-prefixed kebab-case for file names, converted to camelCase for JS exports. Filled variants append `-filled` (kebab) / `Filled` (camelCase).

### Icon Inventory

| Category         | Icons                                                                                                                | Count |
| ---------------- | -------------------------------------------------------------------------------------------------------------------- | ----- |
| `note-*`         | `whole`, `half`, `quarter`, `eighth`, `sixteenth`, `thirty-second`, `dotted-half`, `dotted-quarter`, `dotted-eighth` | 9     |
| `rest-*`         | `whole`, `half`, `quarter`, `eighth`, `sixteenth`, `thirty-second`                                                   | 6     |
| `clef-*`         | `treble`, `bass`, `alto`, `tenor`                                                                                    | 4     |
| `accidental-*`   | `sharp`, `flat`, `natural`, `double-sharp`, `double-flat`                                                            | 5     |
| `time-*`         | `common`, `cut`, `four-four`, `three-four`, `six-eight`, `two-four`, `two-two`                                       | 7     |
| `dynamic-*`      | `piano`, `forte`, `mezzo-forte`, `mezzo-piano`, `fortissimo`, `pianissimo`, `crescendo`, `decrescendo`, `sforzando`  | 9     |
| `articulation-*` | `staccato`, `accent`, `tenuto`, `fermata`, `marcato`, `staccatissimo`                                                | 6     |
| `ornament-*`     | `trill`, `mordent`, `turn`, `tremolo`, `grace-note`                                                                  | 5     |
| `repeat-*`       | `bar`, `sign`, `segno`, `coda`, `dal-segno`, `da-capo`                                                               | 6     |
| `barline-*`      | `single`, `double`, `final`, `repeat-start`, `repeat-end`                                                            | 5     |
| `beam-*`         | `single`, `double`, `triple`                                                                                         | 3     |
| `tie-*`          | `above`, `below`                                                                                                     | 2     |
| `slur-*`         | `above`, `below`                                                                                                     | 2     |
| `pedal-*`        | `down`, `up`                                                                                                         | 2     |
| `bow-*`          | `up`, `down`                                                                                                         | 2     |
| `misc-*`         | `metronome`, `tuning-fork`, `staff`, `ledger-line`, `brace`, `bracket`                                               | 6     |

**Total: ~79 base icons x 2 variants (outline + filled) = ~158 exports**

## Import Patterns

### Root imports (all icons)

```ts
import { noteQuarter, clefTreble } from "@prastavna/icons";
import { noteQuarterFilled, clefTrebleFilled } from "@prastavna/icons";
```

### Subpath imports (by category)

```ts
import { quarter, half, whole } from "@prastavna/icons/notes";
import { quarterFilled } from "@prastavna/icons/notes";
import { treble, bass } from "@prastavna/icons/clefs";
```

Subpath exports drop the category prefix since the import path already provides context. Both patterns are tree-shakeable with modern bundlers.

## File Structure

```
src/
  icons/
    notes/
      note-whole.ts
      note-whole-filled.ts
      note-half.ts
      note-half-filled.ts
      ...
      index.ts               # re-exports as { whole, wholeFilled, half, ... }
    rests/
      rest-whole.ts
      ...
      index.ts
    clefs/
      ...
    accidentals/
      ...
    time-signatures/
      ...
    dynamics/
      ...
    articulations/
      ...
    ornaments/
      ...
    repeats/
      ...
    barlines/
      ...
    beams/
      ...
    ties/
      ...
    slurs/
      ...
    pedals/
      ...
    bows/
      ...
    misc/
      ...
  core/
    create-icon.ts           # factory: creates callable function + metadata
    types.ts                 # IconOptions, IconMeta, IconFunction interfaces
  index.ts                   # root barrel export (all icons, prefixed names)
```

### Core Module: `create-icon.ts`

The `createIcon` factory takes SVG path data and metadata, returns a callable function with properties:

```ts
function createIcon(config: {
  name: string; // e.g. "note-quarter"
  category: string; // e.g. "note"
  variant: "outline" | "filled";
  viewBox?: string; // default "0 0 24 24"
  svgContent: string; // inner SVG content (paths, circles, etc.)
}): IconFunction;
```

The factory:

1. Creates a function that accepts `IconOptions` and returns an SVG string
2. Attaches `.name`, `.category`, `.variant`, `.viewBox`, `.svg` properties
3. For outline icons, applies `stroke` from `color` option; for filled, applies `fill`
4. Merges arbitrary attributes from the index signature into the `<svg>` element

### Icon Files

Each icon file exports a single icon via `createIcon`:

```ts
// src/icons/notes/note-quarter.ts
import { createIcon } from "../../core/create-icon.ts";

export const noteQuarter = createIcon({
  name: "note-quarter",
  category: "note",
  variant: "outline",
  svgContent: '<path d="..." stroke="currentColor" fill="none" stroke-width="2"/>',
});
```

## SVG Conventions

- **viewBox**: `0 0 24 24` default, consistent across all icons
- **Outline icons**: `stroke="currentColor"`, `fill="none"`, `stroke-width="2"`, `stroke-linecap="round"`, `stroke-linejoin="round"`
- **Filled icons**: `fill="currentColor"`, `stroke="none"`
- **No inline styles**: all styling via SVG attributes
- **No `id` attributes**: avoids conflicts when multiple instances exist on a page

## Testing Strategy

### Unit tests (`tests/core/`)

- `createIcon` factory: default options, custom options, attribute merging, width/height vs size precedence, color mapping (stroke for outline, fill for filled), arbitrary attribute passthrough

### Per-category tests (`tests/icons/`)

- Each icon has correct `.name`, `.category`, `.variant`, `.viewBox`
- Calling with no args returns valid SVG (starts with `<svg`, ends with `</svg>`)
- Both outline and filled variants exist for every icon
- Outline icons contain `stroke="currentColor"`, filled icons contain `fill="currentColor"`

### Snapshot tests (`tests/snapshot/`)

- Snapshot default SVG output for every icon to catch unintended changes

## Documentation

- **README.md**: installation, usage examples, full icon list table, API reference
- Icon list table generated from the actual exports (stays in sync)

## Build Output

The library builds via `vp pack` (tsdown under the hood). Output:

- `dist/index.mjs` — root barrel (all icons)
- `dist/notes/index.mjs`, `dist/clefs/index.mjs`, etc. — subpath exports
- `dist/*.d.ts` — TypeScript declarations

The `package.json` `exports` field maps subpaths:

```json
{
  "exports": {
    ".": "./dist/index.mjs",
    "./notes": "./dist/notes/index.mjs",
    "./clefs": "./dist/clefs/index.mjs",
    ...
    "./package.json": "./package.json"
  }
}
```
