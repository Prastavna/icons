import { createIcon } from "../../core/create-icon.ts";

export const whole = createIcon({
  name: "note-whole",
  category: "note",
  variant: "outline",
  svgContent:
    '<ellipse cx="12" cy="12" rx="5" ry="3.5" transform="rotate(-15 12 12)"/><ellipse cx="12" cy="12" rx="2" ry="1.5" transform="rotate(-15 12 12)"/>',
});

export const wholeFilled = createIcon({
  name: "note-whole-filled",
  category: "note",
  variant: "filled",
  svgContent: '<ellipse cx="12" cy="12" rx="5" ry="3.5" transform="rotate(-15 12 12)"/>',
});

export const half = createIcon({
  name: "note-half",
  category: "note",
  variant: "outline",
  svgContent:
    '<ellipse cx="10" cy="16" rx="4.5" ry="3" transform="rotate(-15 10 16)"/><line x1="14.3" y1="14" x2="14.3" y2="4"/>',
});

export const halfFilled = createIcon({
  name: "note-half-filled",
  category: "note",
  variant: "filled",
  svgContent:
    '<ellipse cx="10" cy="16" rx="4.5" ry="3" transform="rotate(-15 10 16)"/><rect x="13.3" y="4" width="2" height="10"/>',
});

export const quarter = createIcon({
  name: "note-quarter",
  category: "note",
  variant: "outline",
  svgContent:
    '<ellipse cx="10" cy="16" rx="4.5" ry="3" transform="rotate(-15 10 16)"/><line x1="14.3" y1="14" x2="14.3" y2="4"/>',
});

export const quarterFilled = createIcon({
  name: "note-quarter-filled",
  category: "note",
  variant: "filled",
  svgContent:
    '<ellipse cx="10" cy="16" rx="4.5" ry="3" transform="rotate(-15 10 16)"/><rect x="13.3" y="4" width="2" height="10"/>',
});

export const eighth = createIcon({
  name: "note-eighth",
  category: "note",
  variant: "outline",
  svgContent:
    '<ellipse cx="10" cy="16" rx="4.5" ry="3" transform="rotate(-15 10 16)"/><line x1="14.3" y1="14" x2="14.3" y2="4"/><path d="M14.3 4 C17 5, 19 7, 17 10"/>',
});

export const eighthFilled = createIcon({
  name: "note-eighth-filled",
  category: "note",
  variant: "filled",
  svgContent:
    '<ellipse cx="10" cy="16" rx="4.5" ry="3" transform="rotate(-15 10 16)"/><rect x="13.3" y="4" width="2" height="10"/><path d="M14.3 4 C17 5, 19 7, 17 10 L15.3 9 C16.5 7, 15.5 5.5, 14.3 5Z"/>',
});

export const sixteenth = createIcon({
  name: "note-sixteenth",
  category: "note",
  variant: "outline",
  svgContent:
    '<ellipse cx="10" cy="16" rx="4.5" ry="3" transform="rotate(-15 10 16)"/><line x1="14.3" y1="14" x2="14.3" y2="4"/><path d="M14.3 4 C17 5, 19 7, 17 10"/><path d="M14.3 7 C17 8, 19 10, 17 13"/>',
});

export const sixteenthFilled = createIcon({
  name: "note-sixteenth-filled",
  category: "note",
  variant: "filled",
  svgContent:
    '<ellipse cx="10" cy="16" rx="4.5" ry="3" transform="rotate(-15 10 16)"/><rect x="13.3" y="4" width="2" height="10"/><path d="M14.3 4 C17 5, 19 7, 17 10 L15.3 9 C16.5 7, 15.5 5.5, 14.3 5Z"/><path d="M14.3 7 C17 8, 19 10, 17 13 L15.3 12 C16.5 10, 15.5 8.5, 14.3 8Z"/>',
});

export const thirtySecond = createIcon({
  name: "note-thirty-second",
  category: "note",
  variant: "outline",
  svgContent:
    '<ellipse cx="10" cy="17" rx="4" ry="2.5" transform="rotate(-15 10 17)"/><line x1="13.8" y1="15" x2="13.8" y2="3"/><path d="M13.8 3 C16.5 4, 18.5 6, 16.5 9"/><path d="M13.8 6 C16.5 7, 18.5 9, 16.5 12"/><path d="M13.8 9 C16.5 10, 18.5 12, 16.5 15"/>',
});

export const thirtySecondFilled = createIcon({
  name: "note-thirty-second-filled",
  category: "note",
  variant: "filled",
  svgContent:
    '<ellipse cx="10" cy="17" rx="4" ry="2.5" transform="rotate(-15 10 17)"/><rect x="12.8" y="3" width="2" height="12"/><path d="M13.8 3 C16.5 4, 18.5 6, 16.5 9 L14.8 8 C16 6.5, 15 5, 13.8 4Z"/><path d="M13.8 6 C16.5 7, 18.5 9, 16.5 12 L14.8 11 C16 9.5, 15 8, 13.8 7Z"/><path d="M13.8 9 C16.5 10, 18.5 12, 16.5 15 L14.8 14 C16 12.5, 15 11, 13.8 10Z"/>',
});

export const dottedHalf = createIcon({
  name: "note-dotted-half",
  category: "note",
  variant: "outline",
  svgContent:
    '<ellipse cx="9" cy="16" rx="4.5" ry="3" transform="rotate(-15 9 16)"/><line x1="13.3" y1="14" x2="13.3" y2="4"/><circle cx="17" cy="16" r="1"/>',
});

export const dottedHalfFilled = createIcon({
  name: "note-dotted-half-filled",
  category: "note",
  variant: "filled",
  svgContent:
    '<ellipse cx="9" cy="16" rx="4.5" ry="3" transform="rotate(-15 9 16)"/><rect x="12.3" y="4" width="2" height="10"/><circle cx="17" cy="16" r="1.2"/>',
});

export const dottedQuarter = createIcon({
  name: "note-dotted-quarter",
  category: "note",
  variant: "outline",
  svgContent:
    '<ellipse cx="9" cy="16" rx="4.5" ry="3" transform="rotate(-15 9 16)"/><line x1="13.3" y1="14" x2="13.3" y2="4"/><circle cx="17" cy="16" r="1"/>',
});

export const dottedQuarterFilled = createIcon({
  name: "note-dotted-quarter-filled",
  category: "note",
  variant: "filled",
  svgContent:
    '<ellipse cx="9" cy="16" rx="4.5" ry="3" transform="rotate(-15 9 16)"/><rect x="12.3" y="4" width="2" height="10"/><circle cx="17" cy="16" r="1.2"/>',
});

export const dottedEighth = createIcon({
  name: "note-dotted-eighth",
  category: "note",
  variant: "outline",
  svgContent:
    '<ellipse cx="9" cy="16" rx="4.5" ry="3" transform="rotate(-15 9 16)"/><line x1="13.3" y1="14" x2="13.3" y2="4"/><path d="M13.3 4 C16 5, 18 7, 16 10"/><circle cx="17" cy="16" r="1"/>',
});

export const dottedEighthFilled = createIcon({
  name: "note-dotted-eighth-filled",
  category: "note",
  variant: "filled",
  svgContent:
    '<ellipse cx="9" cy="16" rx="4.5" ry="3" transform="rotate(-15 9 16)"/><rect x="12.3" y="4" width="2" height="10"/><path d="M13.3 4 C16 5, 18 7, 16 10 L14.3 9 C15.5 7, 14.5 5.5, 13.3 5Z"/><circle cx="17" cy="16" r="1.2"/>',
});
