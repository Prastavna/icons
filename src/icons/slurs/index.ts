import { createIcon } from "../../core/create-icon.ts";

export const above = createIcon({
  name: "slur-above",
  category: "slur",
  variant: "outline",
  svgContent: '<path d="M3 18 C3 6, 21 6, 21 18"/>',
});

export const aboveFilled = createIcon({
  name: "slur-above-filled",
  category: "slur",
  variant: "filled",
  svgContent: '<path d="M3 18 C3 5, 21 5, 21 18 C21 9, 3 9, 3 18Z"/>',
});

export const below = createIcon({
  name: "slur-below",
  category: "slur",
  variant: "outline",
  svgContent: '<path d="M3 6 C3 18, 21 18, 21 6"/>',
});

export const belowFilled = createIcon({
  name: "slur-below-filled",
  category: "slur",
  variant: "filled",
  svgContent: '<path d="M3 6 C3 19, 21 19, 21 6 C21 15, 3 15, 3 6Z"/>',
});
