import { createIcon } from "../../core/create-icon.ts";

export const whole = createIcon({
  name: "rest-whole",
  category: "rest",
  variant: "outline",
  svgContent: '<rect x="6" y="8" width="12" height="3"/>',
});

export const wholeFilled = createIcon({
  name: "rest-whole-filled",
  category: "rest",
  variant: "filled",
  svgContent: '<rect x="6" y="8" width="12" height="3"/>',
});

export const half = createIcon({
  name: "rest-half",
  category: "rest",
  variant: "outline",
  svgContent: '<rect x="6" y="13" width="12" height="3"/>',
});

export const halfFilled = createIcon({
  name: "rest-half-filled",
  category: "rest",
  variant: "filled",
  svgContent: '<rect x="6" y="13" width="12" height="3"/>',
});

export const quarter = createIcon({
  name: "rest-quarter",
  category: "rest",
  variant: "outline",
  svgContent: '<path d="M10 4 L14 8 L10 12 L14 16 L10 20"/><path d="M14 8 L10 12"/>',
});

export const quarterFilled = createIcon({
  name: "rest-quarter-filled",
  category: "rest",
  variant: "filled",
  svgContent: '<path d="M10 4 L14 8 L10 12 L14 16 L10 20 L12 18 L8 14 L12 10 L8 6Z"/>',
});

export const eighth = createIcon({
  name: "rest-eighth",
  category: "rest",
  variant: "outline",
  svgContent: '<circle cx="12" cy="8" r="1.5"/><line x1="13" y1="9" x2="10" y2="18"/>',
});

export const eighthFilled = createIcon({
  name: "rest-eighth-filled",
  category: "rest",
  variant: "filled",
  svgContent: '<circle cx="12" cy="8" r="2"/><path d="M13.5 8.5 L10 18 L8.5 17.5 L12 8Z"/>',
});

export const sixteenth = createIcon({
  name: "rest-sixteenth",
  category: "rest",
  variant: "outline",
  svgContent:
    '<circle cx="12" cy="7" r="1.5"/><circle cx="14" cy="12" r="1.5"/><line x1="13" y1="8" x2="9" y2="20"/>',
});

export const sixteenthFilled = createIcon({
  name: "rest-sixteenth-filled",
  category: "rest",
  variant: "filled",
  svgContent:
    '<circle cx="12" cy="7" r="2"/><circle cx="14" cy="12" r="2"/><path d="M13.5 7.5 L9 20 L7.5 19.5 L12 7Z"/>',
});

export const thirtySecond = createIcon({
  name: "rest-thirty-second",
  category: "rest",
  variant: "outline",
  svgContent:
    '<circle cx="12" cy="5" r="1.5"/><circle cx="14" cy="10" r="1.5"/><circle cx="12" cy="15" r="1.5"/><line x1="13" y1="6" x2="9" y2="22"/>',
});

export const thirtySecondFilled = createIcon({
  name: "rest-thirty-second-filled",
  category: "rest",
  variant: "filled",
  svgContent:
    '<circle cx="12" cy="5" r="2"/><circle cx="14" cy="10" r="2"/><circle cx="12" cy="15" r="2"/><path d="M13.5 5.5 L9 22 L7.5 21.5 L12 5Z"/>',
});
