import { createIcon } from "../../core/create-icon.ts";

export const single = createIcon({
  name: "beam-single",
  category: "beam",
  variant: "outline",
  svgContent:
    '<line x1="6" y1="18" x2="6" y2="6"/><line x1="18" y1="18" x2="18" y2="8"/><line x1="6" y1="6" x2="18" y2="8"/>',
});

export const singleFilled = createIcon({
  name: "beam-single-filled",
  category: "beam",
  variant: "filled",
  svgContent:
    '<rect x="5" y="6" width="2" height="12"/><rect x="17" y="8" width="2" height="10"/><polygon points="5,5 19,7 19,9 5,7"/>',
});

export const double = createIcon({
  name: "beam-double",
  category: "beam",
  variant: "outline",
  svgContent:
    '<line x1="6" y1="18" x2="6" y2="6"/><line x1="18" y1="18" x2="18" y2="8"/><line x1="6" y1="6" x2="18" y2="8"/><line x1="6" y1="10" x2="18" y2="12"/>',
});

export const doubleFilled = createIcon({
  name: "beam-double-filled",
  category: "beam",
  variant: "filled",
  svgContent:
    '<rect x="5" y="6" width="2" height="12"/><rect x="17" y="8" width="2" height="10"/><polygon points="5,5 19,7 19,9 5,7"/><polygon points="5,9 19,11 19,13 5,11"/>',
});

export const triple = createIcon({
  name: "beam-triple",
  category: "beam",
  variant: "outline",
  svgContent:
    '<line x1="6" y1="18" x2="6" y2="4"/><line x1="18" y1="18" x2="18" y2="6"/><line x1="6" y1="4" x2="18" y2="6"/><line x1="6" y1="8" x2="18" y2="10"/><line x1="6" y1="12" x2="18" y2="14"/>',
});

export const tripleFilled = createIcon({
  name: "beam-triple-filled",
  category: "beam",
  variant: "filled",
  svgContent:
    '<rect x="5" y="4" width="2" height="14"/><rect x="17" y="6" width="2" height="12"/><polygon points="5,3 19,5 19,7 5,5"/><polygon points="5,7 19,9 19,11 5,9"/><polygon points="5,11 19,13 19,15 5,13"/>',
});
