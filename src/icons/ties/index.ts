import { createIcon } from "../../core/create-icon.ts";

export const above = createIcon({
  name: "tie-above",
  category: "tie",
  variant: "outline",
  svgContent: '<path d="M4 16 C4 8, 20 8, 20 16"/>',
});

export const aboveFilled = createIcon({
  name: "tie-above-filled",
  category: "tie",
  variant: "filled",
  svgContent: '<path d="M4 16 C4 7, 20 7, 20 16 C20 10, 4 10, 4 16Z"/>',
});

export const below = createIcon({
  name: "tie-below",
  category: "tie",
  variant: "outline",
  svgContent: '<path d="M4 8 C4 16, 20 16, 20 8"/>',
});

export const belowFilled = createIcon({
  name: "tie-below-filled",
  category: "tie",
  variant: "filled",
  svgContent: '<path d="M4 8 C4 17, 20 17, 20 8 C20 14, 4 14, 4 8Z"/>',
});
