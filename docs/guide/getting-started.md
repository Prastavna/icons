# Getting Started

`@prastavna/icons` exports icons as plain SVG strings.

## Install

```bash
npm install @prastavna/icons
```

## Basic usage

```ts
import { noteQuarter } from "@prastavna/icons";

const svg = noteQuarter();
const large = noteQuarter({ size: 32, color: "#111827" });

element.innerHTML = large;
```

## Filled variants

```ts
import { noteQuarterFilled } from "@prastavna/icons";

const svg = noteQuarterFilled({ size: 24 });
```

## Tree-shakeable subpath imports

Use category subpaths when you want shorter names and tighter imports.

```ts
import { quarter, quarterFilled } from "@prastavna/icons/notes";
import { treble, bass } from "@prastavna/icons/clefs";
```

## Import styles

| Pattern          | Example                                            | Notes                                            |
| ---------------- | -------------------------------------------------- | ------------------------------------------------ |
| Root import      | `import { noteQuarter } from '@prastavna/icons'`   | Category-prefixed names across the full library. |
| Category subpath | `import { quarter } from '@prastavna/icons/notes'` | Shorter names scoped to one category.            |

## What each icon returns

Every icon is a callable function.

```ts
import { clefTreble } from "@prastavna/icons";

const svg = clefTreble({
  size: 28,
  color: "rebeccapurple",
  class: "score-icon",
  "aria-label": "Treble clef",
});
```

That call returns a complete `<svg>` string, ready to inject into the DOM or pass into your framework wrapper.

## Next steps

- Read [Usage](/guide/usage) for integration patterns.
- Read [API](/api) for the full option and metadata reference.
- Open the [Gallery](/gallery) to browse all icon categories.
