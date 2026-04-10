import { createIcon } from "../../core/create-icon.ts";

export const up = createIcon({
  name: "bow-up",
  category: "bow",
  variant: "outline",
  svgContent: '<polyline points="6,20 12,4 18,20"/>',
});

export const upFilled = createIcon({
  name: "bow-up-filled",
  category: "bow",
  variant: "filled",
  svgContent: '<polygon points="5,20 12,3 19,20 16,20 12,8 8,20"/>',
});

export const down = createIcon({
  name: "bow-down",
  category: "bow",
  variant: "outline",
  svgContent:
    '<rect x="5" y="4" width="14" height="4"/><line x1="5" y1="8" x2="5" y2="20"/><line x1="19" y1="8" x2="19" y2="20"/>',
});

export const downFilled = createIcon({
  name: "bow-down-filled",
  category: "bow",
  variant: "filled",
  svgContent:
    '<rect x="4" y="4" width="16" height="4"/><rect x="4" y="8" width="2" height="12"/><rect x="18" y="8" width="2" height="12"/>',
});
