# Usage

## Core options

```ts
import { noteEighth } from "@prastavna/icons";

noteEighth({ size: 20 });
noteEighth({ width: 18, height: 28 });
noteEighth({ color: "#0f172a", strokeWidth: 1.5 });
noteEighth({ class: "icon icon-note", "aria-hidden": "true" });
noteEighth({ viewBox: "0 0 32 32", id: "note-eighth" });
```

## DOM usage

```ts
import { dynamicForte } from "@prastavna/icons";

const container = document.querySelector("#icon");

if (container) {
  container.innerHTML = dynamicForte({ size: 24, color: "currentColor" });
}
```

## React wrapper

```tsx
import { noteQuarter } from "@prastavna/icons";

export function QuarterNote() {
  return <span dangerouslySetInnerHTML={{ __html: noteQuarter({ size: 24 }) }} />;
}
```

## Vue wrapper

```vue
<script setup lang="ts">
import { clefTreble } from "@prastavna/icons";

const svg = clefTreble({ size: 24, color: "#7c3aed" });
</script>

<template>
  <span v-html="svg" />
</template>
```

## Metadata

Each icon function also exposes metadata.

```ts
import { restQuarter } from "@prastavna/icons";

restQuarter.iconName;
restQuarter.category;
restQuarter.variant;
restQuarter.viewBox;
restQuarter.svg;
```

## Rendering behavior

- Outline icons render with `fill="none"` and map `color` to `stroke`.
- Filled icons render with `stroke="none"` and map `color` to `fill`.
- `size` sets both width and height unless `width` or `height` override it.
- Arbitrary SVG attributes pass through to the root `<svg>` element.

## Categories

| Category        | Subpath                            | Icons per variant |
| --------------- | ---------------------------------- | ----------------: |
| Notes           | `@prastavna/icons/notes`           |                 9 |
| Rests           | `@prastavna/icons/rests`           |                 6 |
| Clefs           | `@prastavna/icons/clefs`           |                 4 |
| Accidentals     | `@prastavna/icons/accidentals`     |                 5 |
| Time Signatures | `@prastavna/icons/time-signatures` |                 7 |
| Dynamics        | `@prastavna/icons/dynamics`        |                 9 |
| Articulations   | `@prastavna/icons/articulations`   |                 6 |
| Ornaments       | `@prastavna/icons/ornaments`       |                 5 |
| Repeats         | `@prastavna/icons/repeats`         |                 6 |
| Barlines        | `@prastavna/icons/barlines`        |                 5 |
| Beams           | `@prastavna/icons/beams`           |                 3 |
| Ties            | `@prastavna/icons/ties`            |                 2 |
| Slurs           | `@prastavna/icons/slurs`           |                 2 |
| Pedals          | `@prastavna/icons/pedals`          |                 2 |
| Bows            | `@prastavna/icons/bows`            |                 2 |
| Misc            | `@prastavna/icons/misc`            |                 6 |
