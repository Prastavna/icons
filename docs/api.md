# API Reference

## `IconOptions`

```ts
interface IconOptions {
  size?: number;
  width?: number;
  height?: number;
  color?: string;
  class?: string;
  viewBox?: string;
  strokeWidth?: number;
  [key: string]: string | number | undefined;
}
```

## Option behavior

| Option        | Type     | Default        | Notes                                            |
| ------------- | -------- | -------------- | ------------------------------------------------ |
| `size`        | `number` | `24`           | Sets both width and height.                      |
| `width`       | `number` | `size`         | Overrides width independently.                   |
| `height`      | `number` | `size`         | Overrides height independently.                  |
| `color`       | `string` | `currentColor` | Maps to `stroke` for outline, `fill` for filled. |
| `class`       | `string` | none           | Adds a `class` attribute to the root `<svg>`.    |
| `viewBox`     | `string` | `0 0 24 24`    | Overrides the icon's default `viewBox`.          |
| `strokeWidth` | `number` | `2`            | Used by outline icons only.                      |

Any additional key is forwarded to the root `<svg>` element.

## `IconFunction`

```ts
interface IconFunction {
  (options?: IconOptions): string;
  iconName: string;
  category: string;
  variant: "outline" | "filled";
  viewBox: string;
  svg: string;
}
```

## Example

```ts
import { noteQuarter } from "@prastavna/icons";

const svg = noteQuarter({
  size: 32,
  color: "#7c3aed",
  class: "music-icon",
  "aria-label": "Quarter note",
});

console.log(noteQuarter.iconName); // note-quarter
console.log(noteQuarter.category); // note
console.log(noteQuarter.variant); // outline
console.log(noteQuarter.viewBox); // 0 0 24 24
console.log(noteQuarter.svg); // default SVG string
```

## Output rules

- All exports return a complete `<svg>` string.
- Outline icons include `stroke-linecap="round"` and `stroke-linejoin="round"`.
- Filled icons set `stroke="none"`.
- The default `svg` metadata value is the same as calling the icon with no options.

## Export surface

- Root exports use names like `noteQuarter`, `restHalf`, `clefTreble`, and `dynamicForte`.
- Filled root exports append `Filled`, such as `noteQuarterFilled`.
- Category subpath exports use shorter names such as `quarter`, `quarterFilled`, `treble`, and `trebleFilled`.
