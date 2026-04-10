import { createIcon } from "../../core/create-icon.ts";

export const single = createIcon({
  name: "barline-single",
  category: "barline",
  variant: "outline",
  svgContent: '<line x1="12" y1="4" x2="12" y2="20"/>',
});

export const singleFilled = createIcon({
  name: "barline-single-filled",
  category: "barline",
  variant: "filled",
  svgContent: '<rect x="11" y="4" width="2" height="16"/>',
});

export const double = createIcon({
  name: "barline-double",
  category: "barline",
  variant: "outline",
  svgContent: '<line x1="10" y1="4" x2="10" y2="20"/><line x1="14" y1="4" x2="14" y2="20"/>',
});

export const doubleFilled = createIcon({
  name: "barline-double-filled",
  category: "barline",
  variant: "filled",
  svgContent: '<rect x="9" y="4" width="2" height="16"/><rect x="13" y="4" width="2" height="16"/>',
});

export const final = createIcon({
  name: "barline-final",
  category: "barline",
  variant: "outline",
  svgContent: '<line x1="9" y1="4" x2="9" y2="20"/><rect x="13" y="4" width="3" height="16"/>',
});

export const finalFilled = createIcon({
  name: "barline-final-filled",
  category: "barline",
  variant: "filled",
  svgContent: '<rect x="8" y="4" width="2" height="16"/><rect x="12" y="4" width="4" height="16"/>',
});

export const repeatStart = createIcon({
  name: "barline-repeat-start",
  category: "barline",
  variant: "outline",
  svgContent:
    '<rect x="5" y="4" width="3" height="16"/><line x1="11" y1="4" x2="11" y2="20"/><circle cx="15" cy="10" r="1.5"/><circle cx="15" cy="14" r="1.5"/>',
});

export const repeatStartFilled = createIcon({
  name: "barline-repeat-start-filled",
  category: "barline",
  variant: "filled",
  svgContent:
    '<rect x="4" y="4" width="4" height="16"/><rect x="10" y="4" width="2" height="16"/><circle cx="15" cy="10" r="1.5"/><circle cx="15" cy="14" r="1.5"/>',
});

export const repeatEnd = createIcon({
  name: "barline-repeat-end",
  category: "barline",
  variant: "outline",
  svgContent:
    '<circle cx="9" cy="10" r="1.5"/><circle cx="9" cy="14" r="1.5"/><line x1="13" y1="4" x2="13" y2="20"/><rect x="16" y="4" width="3" height="16"/>',
});

export const repeatEndFilled = createIcon({
  name: "barline-repeat-end-filled",
  category: "barline",
  variant: "filled",
  svgContent:
    '<circle cx="9" cy="10" r="1.5"/><circle cx="9" cy="14" r="1.5"/><rect x="12" y="4" width="2" height="16"/><rect x="16" y="4" width="4" height="16"/>',
});
