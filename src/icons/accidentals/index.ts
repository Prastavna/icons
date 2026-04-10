import { createIcon } from "../../core/create-icon.ts";

export const sharp = createIcon({
  name: "accidental-sharp",
  category: "accidental",
  variant: "outline",
  svgContent:
    '<line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/><line x1="5" y1="9" x2="19" y2="7"/><line x1="5" y1="17" x2="19" y2="15"/>',
});

export const sharpFilled = createIcon({
  name: "accidental-sharp-filled",
  category: "accidental",
  variant: "filled",
  svgContent:
    '<rect x="8" y="3" width="2" height="18"/><rect x="14" y="3" width="2" height="18"/><polygon points="5,10 19,8 19,6 5,8"/><polygon points="5,18 19,16 19,14 5,16"/>',
});

export const flat = createIcon({
  name: "accidental-flat",
  category: "accidental",
  variant: "outline",
  svgContent:
    '<line x1="8" y1="3" x2="8" y2="20"/><path d="M8 12 C12 10, 16 11, 16 14 C16 17, 12 19, 8 20"/>',
});

export const flatFilled = createIcon({
  name: "accidental-flat-filled",
  category: "accidental",
  variant: "filled",
  svgContent:
    '<rect x="7" y="3" width="2" height="17"/><path d="M9 12 C13 10, 17 11, 17 14 C17 17.5, 12 20, 9 20Z"/>',
});

export const natural = createIcon({
  name: "accidental-natural",
  category: "accidental",
  variant: "outline",
  svgContent:
    '<line x1="8" y1="3" x2="8" y2="17"/><line x1="16" y1="7" x2="16" y2="21"/><line x1="8" y1="9" x2="16" y2="7"/><line x1="8" y1="17" x2="16" y2="15"/>',
});

export const naturalFilled = createIcon({
  name: "accidental-natural-filled",
  category: "accidental",
  variant: "filled",
  svgContent:
    '<rect x="7" y="3" width="2" height="14"/><rect x="15" y="7" width="2" height="14"/><polygon points="8,10 16,8 16,6 8,8"/><polygon points="8,18 16,16 16,14 8,16"/>',
});

export const doubleSharp = createIcon({
  name: "accidental-double-sharp",
  category: "accidental",
  variant: "outline",
  svgContent: '<line x1="7" y1="7" x2="17" y2="17"/><line x1="17" y1="7" x2="7" y2="17"/>',
});

export const doubleSharpFilled = createIcon({
  name: "accidental-double-sharp-filled",
  category: "accidental",
  variant: "filled",
  svgContent:
    '<path d="M12 9 L15 6 L18 9 L15 12 L18 15 L15 18 L12 15 L9 18 L6 15 L9 12 L6 9 L9 6Z"/>',
});

export const doubleFlat = createIcon({
  name: "accidental-double-flat",
  category: "accidental",
  variant: "outline",
  svgContent:
    '<line x1="6" y1="3" x2="6" y2="20"/><path d="M6 12 C9 10, 12 11, 12 14 C12 17, 9 19, 6 20"/><line x1="13" y1="3" x2="13" y2="20"/><path d="M13 12 C16 10, 19 11, 19 14 C19 17, 16 19, 13 20"/>',
});

export const doubleFlatFilled = createIcon({
  name: "accidental-double-flat-filled",
  category: "accidental",
  variant: "filled",
  svgContent:
    '<rect x="5" y="3" width="2" height="17"/><path d="M7 12 C10 10, 13 11, 13 14 C13 17.5, 10 20, 7 20Z"/><rect x="12" y="3" width="2" height="17"/><path d="M14 12 C17 10, 20 11, 20 14 C20 17.5, 17 20, 14 20Z"/>',
});
