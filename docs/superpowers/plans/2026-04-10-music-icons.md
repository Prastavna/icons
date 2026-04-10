# Music Score Icons Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a framework-agnostic SVG icon library for music score notation with outline/filled variants and a callable function API.

**Architecture:** Core `createIcon` factory produces callable functions with metadata properties. Each icon file defines SVG content and delegates to the factory. Categories are organized as subpath exports. TDD throughout — tests first, then implementation.

**Tech Stack:** TypeScript, Vite+ (vp pack/test/check), vitest via `vite-plus/test`

---

## File Map

| File                                 | Responsibility                                                  |
| ------------------------------------ | --------------------------------------------------------------- |
| `src/core/types.ts`                  | `IconOptions`, `IconConfig`, `IconFunction` type definitions    |
| `src/core/create-icon.ts`            | Factory that builds callable icon functions with metadata       |
| `src/icons/notes/index.ts`           | Note icon definitions + category barrel export                  |
| `src/icons/rests/index.ts`           | Rest icon definitions + category barrel export                  |
| `src/icons/clefs/index.ts`           | Clef icon definitions + category barrel export                  |
| `src/icons/accidentals/index.ts`     | Accidental icon definitions + category barrel export            |
| `src/icons/time-signatures/index.ts` | Time signature icon definitions + category barrel export        |
| `src/icons/dynamics/index.ts`        | Dynamic icon definitions + category barrel export               |
| `src/icons/articulations/index.ts`   | Articulation icon definitions + category barrel export          |
| `src/icons/ornaments/index.ts`       | Ornament icon definitions + category barrel export              |
| `src/icons/repeats/index.ts`         | Repeat icon definitions + category barrel export                |
| `src/icons/barlines/index.ts`        | Barline icon definitions + category barrel export               |
| `src/icons/beams/index.ts`           | Beam icon definitions + category barrel export                  |
| `src/icons/ties/index.ts`            | Tie icon definitions + category barrel export                   |
| `src/icons/slurs/index.ts`           | Slur icon definitions + category barrel export                  |
| `src/icons/pedals/index.ts`          | Pedal icon definitions + category barrel export                 |
| `src/icons/bows/index.ts`            | Bow icon definitions + category barrel export                   |
| `src/icons/misc/index.ts`            | Misc icon definitions + category barrel export                  |
| `src/index.ts`                       | Root barrel — re-exports all icons with category-prefixed names |
| `tests/core/types.test.ts`           | Type-level tests (compile-time checks)                          |
| `tests/core/create-icon.test.ts`     | Factory unit tests                                              |
| `tests/icons/icons.test.ts`          | Per-icon validation (metadata, SVG structure, variant pairs)    |
| `package.json`                       | Subpath exports configuration                                   |
| `vite.config.ts`                     | Pack entry points for subpath exports                           |
| `README.md`                          | Usage docs, icon list, API reference                            |

---

### Task 1: Core Types

**Files:**

- Create: `src/core/types.ts`
- Test: `tests/core/types.test.ts`

- [ ] **Step 1: Write type validation tests**

```ts
// tests/core/types.test.ts
import { expect, test, assertType } from "vite-plus/test";
import type { IconOptions, IconConfig, IconFunction } from "../../src/core/types.ts";

test("IconOptions accepts size", () => {
  const opts: IconOptions = { size: 32 };
  assertType<IconOptions>(opts);
});

test("IconOptions accepts width/height override", () => {
  const opts: IconOptions = { size: 24, width: 48, height: 48 };
  assertType<IconOptions>(opts);
});

test("IconOptions accepts color and class", () => {
  const opts: IconOptions = { color: "red", class: "my-icon" };
  assertType<IconOptions>(opts);
});

test("IconOptions accepts strokeWidth", () => {
  const opts: IconOptions = { strokeWidth: 1.5 };
  assertType<IconOptions>(opts);
});

test("IconOptions accepts arbitrary SVG attributes", () => {
  const opts: IconOptions = { "aria-label": "quarter note", "data-testid": "icon" };
  assertType<IconOptions>(opts);
});

test("IconConfig requires name, category, variant, svgContent", () => {
  const config: IconConfig = {
    name: "note-quarter",
    category: "note",
    variant: "outline",
    svgContent: '<path d="M0 0"/>',
  };
  assertType<IconConfig>(config);
});

test("IconConfig viewBox is optional", () => {
  const config: IconConfig = {
    name: "note-quarter",
    category: "note",
    variant: "outline",
    svgContent: '<path d="M0 0"/>',
  };
  assertType<IconConfig>(config);
  expect(config.viewBox).toBeUndefined();
});

test("IconFunction is callable and has metadata", () => {
  const fn = (() => "<svg></svg>") as IconFunction;
  Object.assign(fn, {
    iconName: "note-quarter",
    category: "note",
    variant: "outline" as const,
    viewBox: "0 0 24 24",
    svg: "<svg></svg>",
  });
  assertType<IconFunction>(fn);
  expect(fn.iconName).toBe("note-quarter");
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `vp test tests/core/types.test.ts`
Expected: FAIL — cannot resolve `../../src/core/types.ts`

- [ ] **Step 3: Implement types**

```ts
// src/core/types.ts
export interface IconOptions {
  size?: number;
  width?: number;
  height?: number;
  color?: string;
  class?: string;
  viewBox?: string;
  strokeWidth?: number;
  [key: string]: string | number | undefined;
}

export interface IconConfig {
  name: string;
  category: string;
  variant: "outline" | "filled";
  viewBox?: string;
  svgContent: string;
}

export interface IconFunction {
  (options?: IconOptions): string;
  iconName: string;
  category: string;
  variant: "outline" | "filled";
  viewBox: string;
  svg: string;
}
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `vp test tests/core/types.test.ts`
Expected: PASS (all 7 tests)

- [ ] **Step 5: Commit**

```bash
git add src/core/types.ts tests/core/types.test.ts
git commit -m "feat: add core type definitions for icon library"
```

---

### Task 2: createIcon Factory

**Files:**

- Create: `src/core/create-icon.ts`
- Test: `tests/core/create-icon.test.ts`

- [ ] **Step 1: Write failing tests for createIcon**

```ts
// tests/core/create-icon.test.ts
import { describe, expect, test } from "vite-plus/test";
import { createIcon } from "../../src/core/create-icon.ts";

const testContent = '<circle cx="12" cy="12" r="4"/>';

describe("createIcon", () => {
  describe("metadata", () => {
    test("attaches iconName property", () => {
      const icon = createIcon({
        name: "note-quarter",
        category: "note",
        variant: "outline",
        svgContent: testContent,
      });
      expect(icon.iconName).toBe("note-quarter");
    });

    test("attaches category property", () => {
      const icon = createIcon({
        name: "note-quarter",
        category: "note",
        variant: "outline",
        svgContent: testContent,
      });
      expect(icon.category).toBe("note");
    });

    test("attaches variant property", () => {
      const icon = createIcon({
        name: "note-quarter",
        category: "note",
        variant: "outline",
        svgContent: testContent,
      });
      expect(icon.variant).toBe("outline");
    });

    test("attaches default viewBox", () => {
      const icon = createIcon({
        name: "note-quarter",
        category: "note",
        variant: "outline",
        svgContent: testContent,
      });
      expect(icon.viewBox).toBe("0 0 24 24");
    });

    test("attaches custom viewBox", () => {
      const icon = createIcon({
        name: "note-quarter",
        category: "note",
        variant: "outline",
        viewBox: "0 0 16 16",
        svgContent: testContent,
      });
      expect(icon.viewBox).toBe("0 0 16 16");
    });

    test("svg property returns default SVG string", () => {
      const icon = createIcon({
        name: "note-quarter",
        category: "note",
        variant: "outline",
        svgContent: testContent,
      });
      expect(icon.svg).toBe(icon());
    });
  });

  describe("calling with no options", () => {
    test("returns valid SVG string", () => {
      const icon = createIcon({
        name: "note-quarter",
        category: "note",
        variant: "outline",
        svgContent: testContent,
      });
      const svg = icon();
      expect(svg).toMatch(/^<svg /);
      expect(svg).toMatch(/<\/svg>$/);
    });

    test("includes viewBox attribute", () => {
      const icon = createIcon({
        name: "note-quarter",
        category: "note",
        variant: "outline",
        svgContent: testContent,
      });
      expect(icon()).toContain('viewBox="0 0 24 24"');
    });

    test("includes default width and height of 24", () => {
      const icon = createIcon({
        name: "note-quarter",
        category: "note",
        variant: "outline",
        svgContent: testContent,
      });
      const svg = icon();
      expect(svg).toContain('width="24"');
      expect(svg).toContain('height="24"');
    });

    test("includes xmlns attribute", () => {
      const icon = createIcon({
        name: "note-quarter",
        category: "note",
        variant: "outline",
        svgContent: testContent,
      });
      expect(icon()).toContain('xmlns="http://www.w3.org/2000/svg"');
    });

    test("includes inner SVG content", () => {
      const icon = createIcon({
        name: "note-quarter",
        category: "note",
        variant: "outline",
        svgContent: testContent,
      });
      expect(icon()).toContain(testContent);
    });
  });

  describe("size option", () => {
    test("sets width and height", () => {
      const icon = createIcon({
        name: "note-quarter",
        category: "note",
        variant: "outline",
        svgContent: testContent,
      });
      const svg = icon({ size: 32 });
      expect(svg).toContain('width="32"');
      expect(svg).toContain('height="32"');
    });
  });

  describe("width/height override", () => {
    test("width overrides size for width only", () => {
      const icon = createIcon({
        name: "note-quarter",
        category: "note",
        variant: "outline",
        svgContent: testContent,
      });
      const svg = icon({ size: 32, width: 48 });
      expect(svg).toContain('width="48"');
      expect(svg).toContain('height="32"');
    });

    test("height overrides size for height only", () => {
      const icon = createIcon({
        name: "note-quarter",
        category: "note",
        variant: "outline",
        svgContent: testContent,
      });
      const svg = icon({ size: 32, height: 48 });
      expect(svg).toContain('width="32"');
      expect(svg).toContain('height="48"');
    });
  });

  describe("color option", () => {
    test("outline variant: sets stroke attribute", () => {
      const icon = createIcon({
        name: "note-quarter",
        category: "note",
        variant: "outline",
        svgContent: testContent,
      });
      const svg = icon({ color: "red" });
      expect(svg).toContain('stroke="red"');
    });

    test("filled variant: sets fill attribute", () => {
      const icon = createIcon({
        name: "note-quarter",
        category: "note",
        variant: "filled",
        svgContent: testContent,
      });
      const svg = icon({ color: "blue" });
      expect(svg).toContain('fill="blue"');
    });

    test("outline variant: defaults stroke to currentColor", () => {
      const icon = createIcon({
        name: "note-quarter",
        category: "note",
        variant: "outline",
        svgContent: testContent,
      });
      expect(icon()).toContain('stroke="currentColor"');
    });

    test("filled variant: defaults fill to currentColor", () => {
      const icon = createIcon({
        name: "note-quarter",
        category: "note",
        variant: "filled",
        svgContent: testContent,
      });
      expect(icon()).toContain('fill="currentColor"');
    });
  });

  describe("class option", () => {
    test("adds class attribute to svg", () => {
      const icon = createIcon({
        name: "note-quarter",
        category: "note",
        variant: "outline",
        svgContent: testContent,
      });
      expect(icon({ class: "my-icon" })).toContain('class="my-icon"');
    });
  });

  describe("viewBox override", () => {
    test("overrides default viewBox", () => {
      const icon = createIcon({
        name: "note-quarter",
        category: "note",
        variant: "outline",
        svgContent: testContent,
      });
      expect(icon({ viewBox: "0 0 16 16" })).toContain('viewBox="0 0 16 16"');
    });
  });

  describe("strokeWidth option", () => {
    test("outline variant: sets stroke-width attribute", () => {
      const icon = createIcon({
        name: "note-quarter",
        category: "note",
        variant: "outline",
        svgContent: testContent,
      });
      expect(icon({ strokeWidth: 1.5 })).toContain('stroke-width="1.5"');
    });

    test("filled variant: ignores strokeWidth", () => {
      const icon = createIcon({
        name: "note-quarter",
        category: "note",
        variant: "filled",
        svgContent: testContent,
      });
      expect(icon({ strokeWidth: 1.5 })).not.toContain("stroke-width");
    });
  });

  describe("arbitrary attributes", () => {
    test("passes through arbitrary SVG attributes", () => {
      const icon = createIcon({
        name: "note-quarter",
        category: "note",
        variant: "outline",
        svgContent: testContent,
      });
      const svg = icon({ "aria-label": "quarter note", "data-testid": "icon" });
      expect(svg).toContain('aria-label="quarter note"');
      expect(svg).toContain('data-testid="icon"');
    });
  });

  describe("outline defaults", () => {
    test("includes fill=none, stroke-linecap=round, stroke-linejoin=round", () => {
      const icon = createIcon({
        name: "note-quarter",
        category: "note",
        variant: "outline",
        svgContent: testContent,
      });
      const svg = icon();
      expect(svg).toContain('fill="none"');
      expect(svg).toContain('stroke-linecap="round"');
      expect(svg).toContain('stroke-linejoin="round"');
    });

    test("includes default stroke-width=2", () => {
      const icon = createIcon({
        name: "note-quarter",
        category: "note",
        variant: "outline",
        svgContent: testContent,
      });
      expect(icon()).toContain('stroke-width="2"');
    });
  });

  describe("filled defaults", () => {
    test("includes stroke=none", () => {
      const icon = createIcon({
        name: "note-quarter",
        category: "note",
        variant: "filled",
        svgContent: testContent,
      });
      expect(icon()).toContain('stroke="none"');
    });
  });
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `vp test tests/core/create-icon.test.ts`
Expected: FAIL — cannot resolve `../../src/core/create-icon.ts`

- [ ] **Step 3: Implement createIcon factory**

```ts
// src/core/create-icon.ts
import type { IconConfig, IconFunction, IconOptions } from "./types.ts";

const KNOWN_OPTIONS = new Set([
  "size",
  "width",
  "height",
  "color",
  "class",
  "viewBox",
  "strokeWidth",
]);

function buildAttributes(config: IconConfig, options: IconOptions): Record<string, string> {
  const viewBox = options.viewBox ?? config.viewBox ?? "0 0 24 24";
  const size = options.size ?? 24;
  const width = options.width ?? size;
  const height = options.height ?? size;
  const color = options.color ?? "currentColor";

  const attrs: Record<string, string> = {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox,
    width: String(width),
    height: String(height),
  };

  if (config.variant === "outline") {
    attrs["stroke"] = color;
    attrs["fill"] = "none";
    attrs["stroke-width"] = String(options.strokeWidth ?? 2);
    attrs["stroke-linecap"] = "round";
    attrs["stroke-linejoin"] = "round";
  } else {
    attrs["fill"] = color;
    attrs["stroke"] = "none";
  }

  if (options.class) {
    attrs["class"] = options.class;
  }

  for (const [key, value] of Object.entries(options)) {
    if (!KNOWN_OPTIONS.has(key) && value !== undefined) {
      attrs[key] = String(value);
    }
  }

  return attrs;
}

function renderSvg(attrs: Record<string, string>, content: string): string {
  const attrStr = Object.entries(attrs)
    .map(([k, v]) => `${k}="${v}"`)
    .join(" ");
  return `<svg ${attrStr}>${content}</svg>`;
}

export function createIcon(config: IconConfig): IconFunction {
  const defaultViewBox = config.viewBox ?? "0 0 24 24";

  const fn = ((options?: IconOptions) => {
    const opts = options ?? {};
    const attrs = buildAttributes(config, opts);
    return renderSvg(attrs, config.svgContent);
  }) as IconFunction;

  fn.iconName = config.name;
  fn.category = config.category;
  fn.variant = config.variant;
  fn.viewBox = defaultViewBox;

  Object.defineProperty(fn, "svg", {
    get() {
      return fn();
    },
    enumerable: true,
  });

  return fn;
}
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `vp test tests/core/create-icon.test.ts`
Expected: PASS (all tests)

- [ ] **Step 5: Commit**

```bash
git add src/core/create-icon.ts tests/core/create-icon.test.ts
git commit -m "feat: implement createIcon factory with options and metadata"
```

---

### Task 3: First Icon Category — Notes (9 outline + 9 filled)

**Files:**

- Create: `src/icons/notes/index.ts`
- Test: `tests/icons/notes.test.ts`

- [ ] **Step 1: Write failing tests for note icons**

```ts
// tests/icons/notes.test.ts
import { describe, expect, test } from "vite-plus/test";
import {
  whole,
  wholeFilled,
  half,
  halfFilled,
  quarter,
  quarterFilled,
  eighth,
  eighthFilled,
  sixteenth,
  sixteenthFilled,
  thirtySecond,
  thirtySecondFilled,
  dottedHalf,
  dottedHalfFilled,
  dottedQuarter,
  dottedQuarterFilled,
  dottedEighth,
  dottedEighthFilled,
} from "../../src/icons/notes/index.ts";

const outlineIcons = [
  { icon: whole, name: "note-whole" },
  { icon: half, name: "note-half" },
  { icon: quarter, name: "note-quarter" },
  { icon: eighth, name: "note-eighth" },
  { icon: sixteenth, name: "note-sixteenth" },
  { icon: thirtySecond, name: "note-thirty-second" },
  { icon: dottedHalf, name: "note-dotted-half" },
  { icon: dottedQuarter, name: "note-dotted-quarter" },
  { icon: dottedEighth, name: "note-dotted-eighth" },
];

const filledIcons = [
  { icon: wholeFilled, name: "note-whole-filled" },
  { icon: halfFilled, name: "note-half-filled" },
  { icon: quarterFilled, name: "note-quarter-filled" },
  { icon: eighthFilled, name: "note-eighth-filled" },
  { icon: sixteenthFilled, name: "note-sixteenth-filled" },
  { icon: thirtySecondFilled, name: "note-thirty-second-filled" },
  { icon: dottedHalfFilled, name: "note-dotted-half-filled" },
  { icon: dottedQuarterFilled, name: "note-dotted-quarter-filled" },
  { icon: dottedEighthFilled, name: "note-dotted-eighth-filled" },
];

describe("note icons — outline", () => {
  test.each(outlineIcons)("$name has correct metadata", ({ icon, name }) => {
    expect(icon.iconName).toBe(name);
    expect(icon.category).toBe("note");
    expect(icon.variant).toBe("outline");
    expect(icon.viewBox).toBe("0 0 24 24");
  });

  test.each(outlineIcons)("$name returns valid SVG", ({ icon }) => {
    const svg = icon();
    expect(svg).toMatch(/^<svg /);
    expect(svg).toMatch(/<\/svg>$/);
    expect(svg).toContain('stroke="currentColor"');
    expect(svg).toContain('fill="none"');
  });
});

describe("note icons — filled", () => {
  test.each(filledIcons)("$name has correct metadata", ({ icon, name }) => {
    expect(icon.iconName).toBe(name);
    expect(icon.category).toBe("note");
    expect(icon.variant).toBe("filled");
    expect(icon.viewBox).toBe("0 0 24 24");
  });

  test.each(filledIcons)("$name returns valid SVG", ({ icon }) => {
    const svg = icon();
    expect(svg).toMatch(/^<svg /);
    expect(svg).toMatch(/<\/svg>$/);
    expect(svg).toContain('fill="currentColor"');
    expect(svg).toContain('stroke="none"');
  });
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `vp test tests/icons/notes.test.ts`
Expected: FAIL — cannot resolve `../../src/icons/notes/index.ts`

- [ ] **Step 3: Implement note icons**

Create `src/icons/notes/index.ts` with all 9 outline + 9 filled note icons. Each icon calls `createIcon` with hand-crafted SVG path data representing the music notation symbol. The SVG paths should be visually accurate representations of standard music notation within a 24x24 grid.

The file exports short names (no `note-` prefix) for subpath import: `whole`, `wholeFilled`, `half`, `halfFilled`, `quarter`, `quarterFilled`, `eighth`, `eighthFilled`, `sixteenth`, `sixteenthFilled`, `thirtySecond`, `thirtySecondFilled`, `dottedHalf`, `dottedHalfFilled`, `dottedQuarter`, `dottedQuarterFilled`, `dottedEighth`, `dottedEighthFilled`.

**Pattern for each icon pair:**

```ts
import { createIcon } from "../../core/create-icon.ts";

export const whole = createIcon({
  name: "note-whole",
  category: "note",
  variant: "outline",
  svgContent: '<ellipse cx="12" cy="12" rx="5" ry="3.5" transform="rotate(-15 12 12)"/>',
});

export const wholeFilled = createIcon({
  name: "note-whole-filled",
  category: "note",
  variant: "filled",
  svgContent: '<ellipse cx="12" cy="12" rx="5" ry="3.5" transform="rotate(-15 12 12)"/>',
});

// ... repeat for half, quarter, eighth, sixteenth, thirtySecond,
//     dottedHalf, dottedQuarter, dottedEighth
```

Each icon's `svgContent` is the inner SVG elements only (paths, ellipses, circles, lines). The `createIcon` factory wraps them in the `<svg>` tag with appropriate attributes.

- [ ] **Step 4: Run tests to verify they pass**

Run: `vp test tests/icons/notes.test.ts`
Expected: PASS (all 36 tests — 9 outline metadata + 9 outline SVG + 9 filled metadata + 9 filled SVG)

- [ ] **Step 5: Commit**

```bash
git add src/icons/notes/ tests/icons/notes.test.ts
git commit -m "feat: add note icons (outline + filled)"
```

---

### Task 4: Remaining Icon Categories

Each category follows the exact same pattern as Task 3. Implement one category at a time, test, commit.

**Categories and their icons:**

**4a: Rests** (6 pairs)

- File: `src/icons/rests/index.ts`, Test: `tests/icons/rests.test.ts`
- Exports: `whole`, `wholeFilled`, `half`, `halfFilled`, `quarter`, `quarterFilled`, `eighth`, `eighthFilled`, `sixteenth`, `sixteenthFilled`, `thirtySecond`, `thirtySecondFilled`
- Commit: `feat: add rest icons (outline + filled)`

**4b: Clefs** (4 pairs)

- File: `src/icons/clefs/index.ts`, Test: `tests/icons/clefs.test.ts`
- Exports: `treble`, `trebleFilled`, `bass`, `bassFilled`, `alto`, `altoFilled`, `tenor`, `tenorFilled`
- Commit: `feat: add clef icons (outline + filled)`

**4c: Accidentals** (5 pairs)

- File: `src/icons/accidentals/index.ts`, Test: `tests/icons/accidentals.test.ts`
- Exports: `sharp`, `sharpFilled`, `flat`, `flatFilled`, `natural`, `naturalFilled`, `doubleSharp`, `doubleSharpFilled`, `doubleFlat`, `doubleFlatFilled`
- Commit: `feat: add accidental icons (outline + filled)`

**4d: Time Signatures** (7 pairs)

- File: `src/icons/time-signatures/index.ts`, Test: `tests/icons/time-signatures.test.ts`
- Exports: `common`, `commonFilled`, `cut`, `cutFilled`, `fourFour`, `fourFourFilled`, `threeFour`, `threeFourFilled`, `sixEight`, `sixEightFilled`, `twoFour`, `twoFourFilled`, `twoTwo`, `twoTwoFilled`
- Commit: `feat: add time signature icons (outline + filled)`

**4e: Dynamics** (9 pairs)

- File: `src/icons/dynamics/index.ts`, Test: `tests/icons/dynamics.test.ts`
- Exports: `piano`, `pianoFilled`, `forte`, `forteFilled`, `mezzoForte`, `mezzoForteFilled`, `mezzoPiano`, `mezzoPianoFilled`, `fortissimo`, `fortissimoFilled`, `pianissimo`, `pianissimoFilled`, `crescendo`, `crescendoFilled`, `decrescendo`, `decrescendoFilled`, `sforzando`, `sforzandoFilled`
- Commit: `feat: add dynamic icons (outline + filled)`

**4f: Articulations** (6 pairs)

- File: `src/icons/articulations/index.ts`, Test: `tests/icons/articulations.test.ts`
- Exports: `staccato`, `staccatoFilled`, `accent`, `accentFilled`, `tenuto`, `tenutoFilled`, `fermata`, `fermataFilled`, `marcato`, `marcatoFilled`, `staccatissimo`, `staccatissimoFilled`
- Commit: `feat: add articulation icons (outline + filled)`

**4g: Ornaments** (5 pairs)

- File: `src/icons/ornaments/index.ts`, Test: `tests/icons/ornaments.test.ts`
- Exports: `trill`, `trillFilled`, `mordent`, `mordentFilled`, `turn`, `turnFilled`, `tremolo`, `tremoloFilled`, `graceNote`, `graceNoteFilled`
- Commit: `feat: add ornament icons (outline + filled)`

**4h: Repeats** (6 pairs)

- File: `src/icons/repeats/index.ts`, Test: `tests/icons/repeats.test.ts`
- Exports: `bar`, `barFilled`, `sign`, `signFilled`, `segno`, `segnoFilled`, `coda`, `codaFilled`, `dalSegno`, `dalSegnoFilled`, `daCapo`, `daCapoFilled`
- Commit: `feat: add repeat icons (outline + filled)`

**4i: Barlines** (5 pairs)

- File: `src/icons/barlines/index.ts`, Test: `tests/icons/barlines.test.ts`
- Exports: `single`, `singleFilled`, `double`, `doubleFilled`, `final`, `finalFilled`, `repeatStart`, `repeatStartFilled`, `repeatEnd`, `repeatEndFilled`
- Commit: `feat: add barline icons (outline + filled)`

**4j: Beams** (3 pairs)

- File: `src/icons/beams/index.ts`, Test: `tests/icons/beams.test.ts`
- Exports: `single`, `singleFilled`, `double`, `doubleFilled`, `triple`, `tripleFilled`
- Commit: `feat: add beam icons (outline + filled)`

**4k: Ties** (2 pairs)

- File: `src/icons/ties/index.ts`, Test: `tests/icons/ties.test.ts`
- Exports: `above`, `aboveFilled`, `below`, `belowFilled`
- Commit: `feat: add tie icons (outline + filled)`

**4l: Slurs** (2 pairs)

- File: `src/icons/slurs/index.ts`, Test: `tests/icons/slurs.test.ts`
- Exports: `above`, `aboveFilled`, `below`, `belowFilled`
- Commit: `feat: add slur icons (outline + filled)`

**4m: Pedals** (2 pairs)

- File: `src/icons/pedals/index.ts`, Test: `tests/icons/pedals.test.ts`
- Exports: `down`, `downFilled`, `up`, `upFilled`
- Commit: `feat: add pedal icons (outline + filled)`

**4n: Bows** (2 pairs)

- File: `src/icons/bows/index.ts`, Test: `tests/icons/bows.test.ts`
- Exports: `up`, `upFilled`, `down`, `downFilled`
- Commit: `feat: add bow icons (outline + filled)`

**4o: Misc** (6 pairs)

- File: `src/icons/misc/index.ts`, Test: `tests/icons/misc.test.ts`
- Exports: `metronome`, `metronomeFilled`, `tuningFork`, `tuningForkFilled`, `staff`, `staffFilled`, `ledgerLine`, `ledgerLineFilled`, `brace`, `braceFilled`, `bracket`, `bracketFilled`
- Commit: `feat: add misc icons (outline + filled)`

Each test file follows the exact same structure as `tests/icons/notes.test.ts` — define `outlineIcons` and `filledIcons` arrays, use `test.each` to verify metadata and SVG output.

---

### Task 5: Root Barrel Export

**Files:**

- Modify: `src/index.ts`
- Test: `tests/icons/root-exports.test.ts`

- [ ] **Step 1: Write failing tests**

```ts
// tests/icons/root-exports.test.ts
import { describe, expect, test } from "vite-plus/test";
import * as icons from "../../src/index.ts";

describe("root barrel export", () => {
  test("exports note icons with category prefix", () => {
    expect(icons.noteQuarter).toBeDefined();
    expect(icons.noteQuarter.iconName).toBe("note-quarter");
    expect(icons.noteQuarterFilled).toBeDefined();
    expect(icons.noteQuarterFilled.iconName).toBe("note-quarter-filled");
  });

  test("exports clef icons with category prefix", () => {
    expect(icons.clefTreble).toBeDefined();
    expect(icons.clefTreble.iconName).toBe("clef-treble");
    expect(icons.clefTrebleFilled).toBeDefined();
  });

  test("exports rest icons with category prefix", () => {
    expect(icons.restQuarter).toBeDefined();
    expect(icons.restQuarter.iconName).toBe("rest-quarter");
  });

  test("exports accidental icons with category prefix", () => {
    expect(icons.accidentalSharp).toBeDefined();
    expect(icons.accidentalSharp.iconName).toBe("accidental-sharp");
  });

  test("exports time signature icons with category prefix", () => {
    expect(icons.timeCommon).toBeDefined();
    expect(icons.timeCommon.iconName).toBe("time-common");
  });

  test("exports dynamic icons with category prefix", () => {
    expect(icons.dynamicForte).toBeDefined();
    expect(icons.dynamicForte.iconName).toBe("dynamic-forte");
  });

  test("exports articulation icons with category prefix", () => {
    expect(icons.articulationStaccato).toBeDefined();
    expect(icons.articulationStaccato.iconName).toBe("articulation-staccato");
  });

  test("exports ornament icons with category prefix", () => {
    expect(icons.ornamentTrill).toBeDefined();
    expect(icons.ornamentTrill.iconName).toBe("ornament-trill");
  });

  test("exports repeat icons with category prefix", () => {
    expect(icons.repeatSegno).toBeDefined();
    expect(icons.repeatSegno.iconName).toBe("repeat-segno");
  });

  test("exports barline icons with category prefix", () => {
    expect(icons.barlineSingle).toBeDefined();
    expect(icons.barlineSingle.iconName).toBe("barline-single");
  });

  test("exports beam icons with category prefix", () => {
    expect(icons.beamSingle).toBeDefined();
    expect(icons.beamSingle.iconName).toBe("beam-single");
  });

  test("exports tie icons with category prefix", () => {
    expect(icons.tieAbove).toBeDefined();
    expect(icons.tieAbove.iconName).toBe("tie-above");
  });

  test("exports slur icons with category prefix", () => {
    expect(icons.slurAbove).toBeDefined();
    expect(icons.slurAbove.iconName).toBe("slur-above");
  });

  test("exports pedal icons with category prefix", () => {
    expect(icons.pedalDown).toBeDefined();
    expect(icons.pedalDown.iconName).toBe("pedal-down");
  });

  test("exports bow icons with category prefix", () => {
    expect(icons.bowUp).toBeDefined();
    expect(icons.bowUp.iconName).toBe("bow-up");
  });

  test("exports misc icons with category prefix", () => {
    expect(icons.miscMetronome).toBeDefined();
    expect(icons.miscMetronome.iconName).toBe("misc-metronome");
  });

  test("all exports are callable functions", () => {
    for (const [key, value] of Object.entries(icons)) {
      expect(typeof value).toBe("function");
      const svg = (value as () => string)();
      expect(svg).toMatch(/^<svg /);
    }
  });
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `vp test tests/icons/root-exports.test.ts`
Expected: FAIL

- [ ] **Step 3: Implement root barrel**

```ts
// src/index.ts
// Notes
export {
  whole as noteWhole,
  wholeFilled as noteWholeFilled,
  half as noteHalf,
  halfFilled as noteHalfFilled,
  quarter as noteQuarter,
  quarterFilled as noteQuarterFilled,
  eighth as noteEighth,
  eighthFilled as noteEighthFilled,
  sixteenth as noteSixteenth,
  sixteenthFilled as noteSixteenthFilled,
  thirtySecond as noteThirtySecond,
  thirtySecondFilled as noteThirtySecondFilled,
  dottedHalf as noteDottedHalf,
  dottedHalfFilled as noteDottedHalfFilled,
  dottedQuarter as noteDottedQuarter,
  dottedQuarterFilled as noteDottedQuarterFilled,
  dottedEighth as noteDottedEighth,
  dottedEighthFilled as noteDottedEighthFilled,
} from "./icons/notes/index.ts";

// Rests
export {
  whole as restWhole,
  wholeFilled as restWholeFilled,
  half as restHalf,
  halfFilled as restHalfFilled,
  quarter as restQuarter,
  quarterFilled as restQuarterFilled,
  eighth as restEighth,
  eighthFilled as restEighthFilled,
  sixteenth as restSixteenth,
  sixteenthFilled as restSixteenthFilled,
  thirtySecond as restThirtySecond,
  thirtySecondFilled as restThirtySecondFilled,
} from "./icons/rests/index.ts";

// Clefs
export {
  treble as clefTreble,
  trebleFilled as clefTrebleFilled,
  bass as clefBass,
  bassFilled as clefBassFilled,
  alto as clefAlto,
  altoFilled as clefAltoFilled,
  tenor as clefTenor,
  tenorFilled as clefTenorFilled,
} from "./icons/clefs/index.ts";

// Accidentals
export {
  sharp as accidentalSharp,
  sharpFilled as accidentalSharpFilled,
  flat as accidentalFlat,
  flatFilled as accidentalFlatFilled,
  natural as accidentalNatural,
  naturalFilled as accidentalNaturalFilled,
  doubleSharp as accidentalDoubleSharp,
  doubleSharpFilled as accidentalDoubleSharpFilled,
  doubleFlat as accidentalDoubleFlat,
  doubleFlatFilled as accidentalDoubleFlatFilled,
} from "./icons/accidentals/index.ts";

// Time Signatures
export {
  common as timeCommon,
  commonFilled as timeCommonFilled,
  cut as timeCut,
  cutFilled as timeCutFilled,
  fourFour as timeFourFour,
  fourFourFilled as timeFourFourFilled,
  threeFour as timeThreeFour,
  threeFourFilled as timeThreeFourFilled,
  sixEight as timeSixEight,
  sixEightFilled as timeSixEightFilled,
  twoFour as timeTwoFour,
  twoFourFilled as timeTwoFourFilled,
  twoTwo as timeTwoTwo,
  twoTwoFilled as timeTwoTwoFilled,
} from "./icons/time-signatures/index.ts";

// Dynamics
export {
  piano as dynamicPiano,
  pianoFilled as dynamicPianoFilled,
  forte as dynamicForte,
  forteFilled as dynamicForteFilled,
  mezzoForte as dynamicMezzoForte,
  mezzoForteFilled as dynamicMezzoForteFilled,
  mezzoPiano as dynamicMezzoPiano,
  mezzoPianoFilled as dynamicMezzoPianoFilled,
  fortissimo as dynamicFortissimo,
  fortissimoFilled as dynamicFortissimoFilled,
  pianissimo as dynamicPianissimo,
  pianissimoFilled as dynamicPianissimoFilled,
  crescendo as dynamicCrescendo,
  crescendoFilled as dynamicCrescendoFilled,
  decrescendo as dynamicDecrescendo,
  decrescendoFilled as dynamicDecrescendoFilled,
  sforzando as dynamicSforzando,
  sforzandoFilled as dynamicSforzandoFilled,
} from "./icons/dynamics/index.ts";

// Articulations
export {
  staccato as articulationStaccato,
  staccatoFilled as articulationStaccatoFilled,
  accent as articulationAccent,
  accentFilled as articulationAccentFilled,
  tenuto as articulationTenuto,
  tenutoFilled as articulationTenutoFilled,
  fermata as articulationFermata,
  fermataFilled as articulationFermataFilled,
  marcato as articulationMarcato,
  marcatoFilled as articulationMarcatoFilled,
  staccatissimo as articulationStaccatissimo,
  staccatissimoFilled as articulationStaccatissimoFilled,
} from "./icons/articulations/index.ts";

// Ornaments
export {
  trill as ornamentTrill,
  trillFilled as ornamentTrillFilled,
  mordent as ornamentMordent,
  mordentFilled as ornamentMordentFilled,
  turn as ornamentTurn,
  turnFilled as ornamentTurnFilled,
  tremolo as ornamentTremolo,
  tremoloFilled as ornamentTremoloFilled,
  graceNote as ornamentGraceNote,
  graceNoteFilled as ornamentGraceNoteFilled,
} from "./icons/ornaments/index.ts";

// Repeats
export {
  bar as repeatBar,
  barFilled as repeatBarFilled,
  sign as repeatSign,
  signFilled as repeatSignFilled,
  segno as repeatSegno,
  segnoFilled as repeatSegnoFilled,
  coda as repeatCoda,
  codaFilled as repeatCodaFilled,
  dalSegno as repeatDalSegno,
  dalSegnoFilled as repeatDalSegnoFilled,
  daCapo as repeatDaCapo,
  daCapoFilled as repeatDaCapoFilled,
} from "./icons/repeats/index.ts";

// Barlines
export {
  single as barlineSingle,
  singleFilled as barlineSingleFilled,
  double as barlineDouble,
  doubleFilled as barlineDoubleFilled,
  final as barlineFinal,
  finalFilled as barlineFinalFilled,
  repeatStart as barlineRepeatStart,
  repeatStartFilled as barlineRepeatStartFilled,
  repeatEnd as barlineRepeatEnd,
  repeatEndFilled as barlineRepeatEndFilled,
} from "./icons/barlines/index.ts";

// Beams
export {
  single as beamSingle,
  singleFilled as beamSingleFilled,
  double as beamDouble,
  doubleFilled as beamDoubleFilled,
  triple as beamTriple,
  tripleFilled as beamTripleFilled,
} from "./icons/beams/index.ts";

// Ties
export {
  above as tieAbove,
  aboveFilled as tieAboveFilled,
  below as tieBelow,
  belowFilled as tieBelowFilled,
} from "./icons/ties/index.ts";

// Slurs
export {
  above as slurAbove,
  aboveFilled as slurAboveFilled,
  below as slurBelow,
  belowFilled as slurBelowFilled,
} from "./icons/slurs/index.ts";

// Pedals
export {
  down as pedalDown,
  downFilled as pedalDownFilled,
  up as pedalUp,
  upFilled as pedalUpFilled,
} from "./icons/pedals/index.ts";

// Bows
export {
  up as bowUp,
  upFilled as bowUpFilled,
  down as bowDown,
  downFilled as bowDownFilled,
} from "./icons/bows/index.ts";

// Misc
export {
  metronome as miscMetronome,
  metronomeFilled as miscMetronomeFilled,
  tuningFork as miscTuningFork,
  tuningForkFilled as miscTuningForkFilled,
  staff as miscStaff,
  staffFilled as miscStaffFilled,
  ledgerLine as miscLedgerLine,
  ledgerLineFilled as miscLedgerLineFilled,
  brace as miscBrace,
  braceFilled as miscBraceFilled,
  bracket as miscBracket,
  bracketFilled as miscBracketFilled,
} from "./icons/misc/index.ts";

// Re-export types
export type { IconOptions, IconFunction } from "./core/types.ts";
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `vp test tests/icons/root-exports.test.ts`
Expected: PASS

- [ ] **Step 5: Remove old test file**

Delete `tests/index.test.ts` (the placeholder test from the starter template).

- [ ] **Step 6: Commit**

```bash
git add src/index.ts tests/icons/root-exports.test.ts
git rm tests/index.test.ts
git commit -m "feat: add root barrel export with category-prefixed names"
```

---

### Task 6: Package Configuration (subpath exports + build)

**Files:**

- Modify: `package.json`
- Modify: `vite.config.ts`

- [ ] **Step 1: Update package.json exports**

```json
{
  "exports": {
    ".": "./dist/index.mjs",
    "./notes": "./dist/icons/notes/index.mjs",
    "./rests": "./dist/icons/rests/index.mjs",
    "./clefs": "./dist/icons/clefs/index.mjs",
    "./accidentals": "./dist/icons/accidentals/index.mjs",
    "./time-signatures": "./dist/icons/time-signatures/index.mjs",
    "./dynamics": "./dist/icons/dynamics/index.mjs",
    "./articulations": "./dist/icons/articulations/index.mjs",
    "./ornaments": "./dist/icons/ornaments/index.mjs",
    "./repeats": "./dist/icons/repeats/index.mjs",
    "./barlines": "./dist/icons/barlines/index.mjs",
    "./beams": "./dist/icons/beams/index.mjs",
    "./ties": "./dist/icons/ties/index.mjs",
    "./slurs": "./dist/icons/slurs/index.mjs",
    "./pedals": "./dist/icons/pedals/index.mjs",
    "./bows": "./dist/icons/bows/index.mjs",
    "./misc": "./dist/icons/misc/index.mjs",
    "./package.json": "./package.json"
  }
}
```

Also update `description` to `"SVG icon library for music score notation"` and `name` to confirm `@prastavna/icons`.

- [ ] **Step 2: Verify vite.config.ts pack config**

The existing `pack: { exports: true }` config should auto-detect entry points from the `exports` field. No changes needed to `vite.config.ts` if `exports: true` handles subpath detection.

- [ ] **Step 3: Run build**

Run: `vp pack`
Expected: builds successfully, creates `dist/` with `index.mjs` and subpath entry points

- [ ] **Step 4: Run all tests**

Run: `vp test`
Expected: all tests pass

- [ ] **Step 5: Commit**

```bash
git add package.json
git commit -m "feat: configure subpath exports for all icon categories"
```

---

### Task 7: README Documentation

**Files:**

- Modify: `README.md`

- [ ] **Step 1: Write README**

Replace `README.md` with:

- Package name and one-line description
- Install instructions (`vp add @prastavna/icons` / `npm install @prastavna/icons`)
- Usage examples (root import, subpath import, options usage)
- Full API reference (IconOptions, IconFunction properties)
- Complete icon list table (all 16 categories with icon names)
- SVG conventions section (viewBox, stroke/fill defaults)

- [ ] **Step 2: Run full check**

Run: `vp check && vp test`
Expected: all checks and tests pass

- [ ] **Step 3: Commit**

```bash
git add README.md
git commit -m "docs: add README with usage examples, API reference, and icon list"
```

---

## Summary

| Task  | Description                 | Files | Est.   |
| ----- | --------------------------- | ----- | ------ |
| 1     | Core types                  | 2     | 3 min  |
| 2     | createIcon factory          | 2     | 5 min  |
| 3     | Note icons (first category) | 2     | 5 min  |
| 4a-4o | Remaining 15 categories     | 30    | 30 min |
| 5     | Root barrel export          | 2     | 5 min  |
| 6     | Package config              | 2     | 3 min  |
| 7     | README                      | 1     | 5 min  |

**Total: ~41 files, 7 tasks (22 subtasks)**
