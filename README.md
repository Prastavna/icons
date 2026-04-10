# @prastavna/icons

Framework-agnostic SVG icon library for music score notation.

148 icons across 16 categories — each available in outline and filled variants. Every icon is a callable function returning an SVG string, with metadata properties for introspection and tree-shakeable subpath exports per category.

## Install

```bash
npm install @prastavna/icons
```

## Usage

### Basic

```ts
import { noteQuarter } from "@prastavna/icons";

// Returns an SVG string
const svg = noteQuarter();

// Inject into the DOM
element.innerHTML = noteQuarter({ size: 20 });
```

### With options

```ts
const svg = noteQuarter({ size: 32, color: "#333" });
const svg = noteQuarter({ class: "icon-note", strokeWidth: 1.5 });
const svg = noteQuarter({ width: 20, height: 24, "aria-hidden": "true" });
```

### Filled variants

```ts
import { noteQuarterFilled } from "@prastavna/icons";

const svg = noteQuarterFilled({ size: 24 });
```

### Subpath imports (tree-shaking)

Import short names directly from a category subpath instead of the root:

```ts
import { quarter, half, whole } from "@prastavna/icons/notes";
import { treble, bass } from "@prastavna/icons/clefs";
import { quarterFilled } from "@prastavna/icons/notes";
```

### Metadata

Every icon function exposes static properties:

```ts
noteQuarter.iconName; // "note-quarter"
noteQuarter.category; // "note"
noteQuarter.variant; // "outline"
noteQuarter.viewBox; // "0 0 24 24"
noteQuarter.svg; // default SVG string (no options applied)
```

## API Reference

### `IconOptions`

```ts
interface IconOptions {
  size?: number; // sets width & height (default: 24)
  width?: number; // overrides width independently
  height?: number; // overrides height independently
  color?: string; // stroke (outline) or fill (filled) color (default: "currentColor")
  class?: string; // CSS class attribute
  viewBox?: string; // overrides viewBox (default: "0 0 24 24")
  strokeWidth?: number; // outline variants only (default: 2)
  [key: string]: string | number | undefined; // any additional SVG attribute
}
```

### `IconFunction`

```ts
interface IconFunction {
  (options?: IconOptions): string; // call to get SVG string
  iconName: string; // kebab-case name, e.g. "note-quarter"
  category: string; // category key, e.g. "note"
  variant: "outline" | "filled";
  viewBox: string; // e.g. "0 0 24 24"
  svg: string; // default SVG string
}
```

## Icon Categories

| Category        | Subpath                            | Icons (per variant) | Examples                                                                                                          |
| --------------- | ---------------------------------- | ------------------- | ----------------------------------------------------------------------------------------------------------------- |
| Notes           | `@prastavna/icons/notes`           | 9                   | `whole`, `half`, `quarter`, `eighth`, `sixteenth`, `thirtySecond`, `dottedHalf`, `dottedQuarter`, `dottedEighth`  |
| Rests           | `@prastavna/icons/rests`           | 6                   | `whole`, `half`, `quarter`, `eighth`, `sixteenth`, `thirtySecond`                                                 |
| Clefs           | `@prastavna/icons/clefs`           | 4                   | `treble`, `bass`, `alto`, `tenor`                                                                                 |
| Accidentals     | `@prastavna/icons/accidentals`     | 5                   | `sharp`, `flat`, `natural`, `doubleSharp`, `doubleFlat`                                                           |
| Time Signatures | `@prastavna/icons/time-signatures` | 7                   | `common`, `cut`, `fourFour`, `threeFour`, `sixEight`, `twoFour`, `twoTwo`                                         |
| Dynamics        | `@prastavna/icons/dynamics`        | 9                   | `piano`, `forte`, `mezzoForte`, `mezzoPiano`, `fortissimo`, `pianissimo`, `crescendo`, `decrescendo`, `sforzando` |
| Articulations   | `@prastavna/icons/articulations`   | 6                   | `staccato`, `accent`, `tenuto`, `fermata`, `marcato`, `staccatissimo`                                             |
| Ornaments       | `@prastavna/icons/ornaments`       | 5                   | `trill`, `mordent`, `turn`, `tremolo`, `graceNote`                                                                |
| Repeats         | `@prastavna/icons/repeats`         | 6                   | `bar`, `sign`, `segno`, `coda`, `dalSegno`, `daCapo`                                                              |
| Barlines        | `@prastavna/icons/barlines`        | 5                   | `single`, `double`, `final`, `repeatStart`, `repeatEnd`                                                           |
| Beams           | `@prastavna/icons/beams`           | 3                   | `single`, `double`, `triple`                                                                                      |
| Ties            | `@prastavna/icons/ties`            | 2                   | `above`, `below`                                                                                                  |
| Slurs           | `@prastavna/icons/slurs`           | 2                   | `above`, `below`                                                                                                  |
| Pedals          | `@prastavna/icons/pedals`          | 2                   | `down`, `up`                                                                                                      |
| Bows            | `@prastavna/icons/bows`            | 2                   | `up`, `down`                                                                                                      |
| Misc            | `@prastavna/icons/misc`            | 6                   | `metronome`, `tuningFork`, `staff`, `ledgerLine`, `brace`, `bracket`                                              |

Each category has outline + filled variants, so the per-variant count doubles for total exports. Root imports use category-prefixed names (e.g. `noteQuarter`, `clefTreble`); subpath imports use short names (e.g. `quarter`, `treble`).

## Full Icon List

<details>
<summary>Notes (18 exports)</summary>

| Root export               | Subpath export        | Variant |
| ------------------------- | --------------------- | ------- |
| `noteWhole`               | `whole`               | outline |
| `noteWholeFilled`         | `wholeFilled`         | filled  |
| `noteHalf`                | `half`                | outline |
| `noteHalfFilled`          | `halfFilled`          | filled  |
| `noteQuarter`             | `quarter`             | outline |
| `noteQuarterFilled`       | `quarterFilled`       | filled  |
| `noteEighth`              | `eighth`              | outline |
| `noteEighthFilled`        | `eighthFilled`        | filled  |
| `noteSixteenth`           | `sixteenth`           | outline |
| `noteSixteenthFilled`     | `sixteenthFilled`     | filled  |
| `noteThirtySecond`        | `thirtySecond`        | outline |
| `noteThirtySecondFilled`  | `thirtySecondFilled`  | filled  |
| `noteDottedHalf`          | `dottedHalf`          | outline |
| `noteDottedHalfFilled`    | `dottedHalfFilled`    | filled  |
| `noteDottedQuarter`       | `dottedQuarter`       | outline |
| `noteDottedQuarterFilled` | `dottedQuarterFilled` | filled  |
| `noteDottedEighth`        | `dottedEighth`        | outline |
| `noteDottedEighthFilled`  | `dottedEighthFilled`  | filled  |

</details>

<details>
<summary>Rests (12 exports)</summary>

| Root export              | Subpath export       | Variant |
| ------------------------ | -------------------- | ------- |
| `restWhole`              | `whole`              | outline |
| `restWholeFilled`        | `wholeFilled`        | filled  |
| `restHalf`               | `half`               | outline |
| `restHalfFilled`         | `halfFilled`         | filled  |
| `restQuarter`            | `quarter`            | outline |
| `restQuarterFilled`      | `quarterFilled`      | filled  |
| `restEighth`             | `eighth`             | outline |
| `restEighthFilled`       | `eighthFilled`       | filled  |
| `restSixteenth`          | `sixteenth`          | outline |
| `restSixteenthFilled`    | `sixteenthFilled`    | filled  |
| `restThirtySecond`       | `thirtySecond`       | outline |
| `restThirtySecondFilled` | `thirtySecondFilled` | filled  |

</details>

<details>
<summary>Clefs (8 exports)</summary>

| Root export        | Subpath export | Variant |
| ------------------ | -------------- | ------- |
| `clefTreble`       | `treble`       | outline |
| `clefTrebleFilled` | `trebleFilled` | filled  |
| `clefBass`         | `bass`         | outline |
| `clefBassFilled`   | `bassFilled`   | filled  |
| `clefAlto`         | `alto`         | outline |
| `clefAltoFilled`   | `altoFilled`   | filled  |
| `clefTenor`        | `tenor`        | outline |
| `clefTenorFilled`  | `tenorFilled`  | filled  |

</details>

<details>
<summary>Accidentals (10 exports)</summary>

| Root export                   | Subpath export      | Variant |
| ----------------------------- | ------------------- | ------- |
| `accidentalSharp`             | `sharp`             | outline |
| `accidentalSharpFilled`       | `sharpFilled`       | filled  |
| `accidentalFlat`              | `flat`              | outline |
| `accidentalFlatFilled`        | `flatFilled`        | filled  |
| `accidentalNatural`           | `natural`           | outline |
| `accidentalNaturalFilled`     | `naturalFilled`     | filled  |
| `accidentalDoubleSharp`       | `doubleSharp`       | outline |
| `accidentalDoubleSharpFilled` | `doubleSharpFilled` | filled  |
| `accidentalDoubleFlat`        | `doubleFlat`        | outline |
| `accidentalDoubleFlatFilled`  | `doubleFlatFilled`  | filled  |

</details>

<details>
<summary>Time Signatures (14 exports)</summary>

| Root export           | Subpath export    | Variant |
| --------------------- | ----------------- | ------- |
| `timeCommon`          | `common`          | outline |
| `timeCommonFilled`    | `commonFilled`    | filled  |
| `timeCut`             | `cut`             | outline |
| `timeCutFilled`       | `cutFilled`       | filled  |
| `timeFourFour`        | `fourFour`        | outline |
| `timeFourFourFilled`  | `fourFourFilled`  | filled  |
| `timeThreeFour`       | `threeFour`       | outline |
| `timeThreeFourFilled` | `threeFourFilled` | filled  |
| `timeSixEight`        | `sixEight`        | outline |
| `timeSixEightFilled`  | `sixEightFilled`  | filled  |
| `timeTwoFour`         | `twoFour`         | outline |
| `timeTwoFourFilled`   | `twoFourFilled`   | filled  |
| `timeTwoTwo`          | `twoTwo`          | outline |
| `timeTwoTwoFilled`    | `twoTwoFilled`    | filled  |

</details>

<details>
<summary>Dynamics (18 exports)</summary>

| Root export                | Subpath export      | Variant |
| -------------------------- | ------------------- | ------- |
| `dynamicPiano`             | `piano`             | outline |
| `dynamicPianoFilled`       | `pianoFilled`       | filled  |
| `dynamicForte`             | `forte`             | outline |
| `dynamicForteFilled`       | `forteFilled`       | filled  |
| `dynamicMezzoForte`        | `mezzoForte`        | outline |
| `dynamicMezzoForteFilled`  | `mezzoForteFilled`  | filled  |
| `dynamicMezzoPiano`        | `mezzoPiano`        | outline |
| `dynamicMezzoPianoFilled`  | `mezzoPianoFilled`  | filled  |
| `dynamicFortissimo`        | `fortissimo`        | outline |
| `dynamicFortissimoFilled`  | `fortissimoFilled`  | filled  |
| `dynamicPianissimo`        | `pianissimo`        | outline |
| `dynamicPianissimoFilled`  | `pianissimoFilled`  | filled  |
| `dynamicCrescendo`         | `crescendo`         | outline |
| `dynamicCrescendoFilled`   | `crescendoFilled`   | filled  |
| `dynamicDecrescendo`       | `decrescendo`       | outline |
| `dynamicDecrescendoFilled` | `decrescendoFilled` | filled  |
| `dynamicSforzando`         | `sforzando`         | outline |
| `dynamicSforzandoFilled`   | `sforzandoFilled`   | filled  |

</details>

<details>
<summary>Articulations (12 exports)</summary>

| Root export                       | Subpath export        | Variant |
| --------------------------------- | --------------------- | ------- |
| `articulationStaccato`            | `staccato`            | outline |
| `articulationStaccatoFilled`      | `staccatoFilled`      | filled  |
| `articulationAccent`              | `accent`              | outline |
| `articulationAccentFilled`        | `accentFilled`        | filled  |
| `articulationTenuto`              | `tenuto`              | outline |
| `articulationTenutoFilled`        | `tenutoFilled`        | filled  |
| `articulationFermata`             | `fermata`             | outline |
| `articulationFermataFilled`       | `fermataFilled`       | filled  |
| `articulationMarcato`             | `marcato`             | outline |
| `articulationMarcatoFilled`       | `marcatoFilled`       | filled  |
| `articulationStaccatissimo`       | `staccatissimo`       | outline |
| `articulationStaccatissimoFilled` | `staccatissimoFilled` | filled  |

</details>

<details>
<summary>Ornaments (10 exports)</summary>

| Root export               | Subpath export    | Variant |
| ------------------------- | ----------------- | ------- |
| `ornamentTrill`           | `trill`           | outline |
| `ornamentTrillFilled`     | `trillFilled`     | filled  |
| `ornamentMordent`         | `mordent`         | outline |
| `ornamentMordentFilled`   | `mordentFilled`   | filled  |
| `ornamentTurn`            | `turn`            | outline |
| `ornamentTurnFilled`      | `turnFilled`      | filled  |
| `ornamentTremolo`         | `tremolo`         | outline |
| `ornamentTremoloFilled`   | `tremoloFilled`   | filled  |
| `ornamentGraceNote`       | `graceNote`       | outline |
| `ornamentGraceNoteFilled` | `graceNoteFilled` | filled  |

</details>

<details>
<summary>Repeats (12 exports)</summary>

| Root export            | Subpath export   | Variant |
| ---------------------- | ---------------- | ------- |
| `repeatBar`            | `bar`            | outline |
| `repeatBarFilled`      | `barFilled`      | filled  |
| `repeatSign`           | `sign`           | outline |
| `repeatSignFilled`     | `signFilled`     | filled  |
| `repeatSegno`          | `segno`          | outline |
| `repeatSegnoFilled`    | `segnoFilled`    | filled  |
| `repeatCoda`           | `coda`           | outline |
| `repeatCodaFilled`     | `codaFilled`     | filled  |
| `repeatDalSegno`       | `dalSegno`       | outline |
| `repeatDalSegnoFilled` | `dalSegnoFilled` | filled  |
| `repeatDaCapo`         | `daCapo`         | outline |
| `repeatDaCapoFilled`   | `daCapoFilled`   | filled  |

</details>

<details>
<summary>Barlines (10 exports)</summary>

| Root export                | Subpath export      | Variant |
| -------------------------- | ------------------- | ------- |
| `barlineSingle`            | `single`            | outline |
| `barlineSingleFilled`      | `singleFilled`      | filled  |
| `barlineDouble`            | `double`            | outline |
| `barlineDoubleFilled`      | `doubleFilled`      | filled  |
| `barlineFinal`             | `final`             | outline |
| `barlineFinalFilled`       | `finalFilled`       | filled  |
| `barlineRepeatStart`       | `repeatStart`       | outline |
| `barlineRepeatStartFilled` | `repeatStartFilled` | filled  |
| `barlineRepeatEnd`         | `repeatEnd`         | outline |
| `barlineRepeatEndFilled`   | `repeatEndFilled`   | filled  |

</details>

<details>
<summary>Beams (6 exports)</summary>

| Root export        | Subpath export | Variant |
| ------------------ | -------------- | ------- |
| `beamSingle`       | `single`       | outline |
| `beamSingleFilled` | `singleFilled` | filled  |
| `beamDouble`       | `double`       | outline |
| `beamDoubleFilled` | `doubleFilled` | filled  |
| `beamTriple`       | `triple`       | outline |
| `beamTripleFilled` | `tripleFilled` | filled  |

</details>

<details>
<summary>Ties (4 exports)</summary>

| Root export      | Subpath export | Variant |
| ---------------- | -------------- | ------- |
| `tieAbove`       | `above`        | outline |
| `tieAboveFilled` | `aboveFilled`  | filled  |
| `tieBelow`       | `below`        | outline |
| `tieBelowFilled` | `belowFilled`  | filled  |

</details>

<details>
<summary>Slurs (4 exports)</summary>

| Root export       | Subpath export | Variant |
| ----------------- | -------------- | ------- |
| `slurAbove`       | `above`        | outline |
| `slurAboveFilled` | `aboveFilled`  | filled  |
| `slurBelow`       | `below`        | outline |
| `slurBelowFilled` | `belowFilled`  | filled  |

</details>

<details>
<summary>Pedals (4 exports)</summary>

| Root export       | Subpath export | Variant |
| ----------------- | -------------- | ------- |
| `pedalDown`       | `down`         | outline |
| `pedalDownFilled` | `downFilled`   | filled  |
| `pedalUp`         | `up`           | outline |
| `pedalUpFilled`   | `upFilled`     | filled  |

</details>

<details>
<summary>Bows (4 exports)</summary>

| Root export     | Subpath export | Variant |
| --------------- | -------------- | ------- |
| `bowUp`         | `up`           | outline |
| `bowUpFilled`   | `upFilled`     | filled  |
| `bowDown`       | `down`         | outline |
| `bowDownFilled` | `downFilled`   | filled  |

</details>

<details>
<summary>Misc (12 exports)</summary>

| Root export            | Subpath export     | Variant |
| ---------------------- | ------------------ | ------- |
| `miscMetronome`        | `metronome`        | outline |
| `miscMetronomeFilled`  | `metronomeFilled`  | filled  |
| `miscTuningFork`       | `tuningFork`       | outline |
| `miscTuningForkFilled` | `tuningForkFilled` | filled  |
| `miscStaff`            | `staff`            | outline |
| `miscStaffFilled`      | `staffFilled`      | filled  |
| `miscLedgerLine`       | `ledgerLine`       | outline |
| `miscLedgerLineFilled` | `ledgerLineFilled` | filled  |
| `miscBrace`            | `brace`            | outline |
| `miscBraceFilled`      | `braceFilled`      | filled  |
| `miscBracket`          | `bracket`          | outline |
| `miscBracketFilled`    | `bracketFilled`    | filled  |

</details>

## SVG Conventions

- **viewBox**: `0 0 24 24` (default for all icons)
- **Outline** icons use stroke-based paths. Color maps to `stroke`. `strokeWidth` defaults to `2`.
- **Filled** icons use filled paths. Color maps to `fill`. `strokeWidth` has no effect.
- All icons are self-contained `<svg>` elements with no external dependencies.
- Color defaults to `currentColor`, inheriting from CSS.

## License

MIT
