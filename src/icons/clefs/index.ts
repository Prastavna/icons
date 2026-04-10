import { createIcon } from "../../core/create-icon.ts";

export const treble = createIcon({
  name: "clef-treble",
  category: "clef",
  variant: "outline",
  svgContent:
    '<path d="M12 21 C12 21, 8 17, 8 13 C8 10, 10 8, 12 8 C14 8, 16 10, 16 13 C16 16, 13 17, 12 15 C11 13, 12 10, 12 6 C12 4, 12 3, 12 3"/>',
});

export const trebleFilled = createIcon({
  name: "clef-treble-filled",
  category: "clef",
  variant: "filled",
  svgContent:
    '<path d="M12 21 C12 21, 7 17, 7 13 C7 9.5, 9.5 7, 12 7 C14.5 7, 17 9.5, 17 13 C17 16.5, 13 18, 11.5 15 C10.5 13, 11 10, 11 6 C11 4, 11.5 2, 12 2 C12.5 2, 13 4, 13 6 C13 10, 13.5 13, 12.5 15 C14 17, 16.5 16, 16 13 C15.5 10, 14 8, 12 8 C10 8, 8.5 10, 8.5 13 C8.5 16.5, 12 21, 12 21Z"/>',
});

export const bass = createIcon({
  name: "clef-bass",
  category: "clef",
  variant: "outline",
  svgContent:
    '<path d="M6 8 C6 8, 6 16, 12 16 C16 16, 18 13, 18 10 C18 8, 16 6, 14 6"/><circle cx="6" cy="8" r="2"/><circle cx="20" cy="9" r="1"/><circle cx="20" cy="13" r="1"/>',
});

export const bassFilled = createIcon({
  name: "clef-bass-filled",
  category: "clef",
  variant: "filled",
  svgContent:
    '<path d="M6 6 C4 6, 3 7.5, 3 9 C3 10.5, 4 12, 6 12 C7 12, 8 12, 8 14 C8 16, 6 18, 12 18 C17 18, 20 14, 20 10 C20 7, 17 5, 14 5 C12 5, 10 7, 10 10 C10 13, 12 15, 14 14 C15 13, 15 11, 14 10 C13 9, 11 10, 11 11Z"/><circle cx="21" cy="9" r="1.3"/><circle cx="21" cy="13" r="1.3"/>',
});

export const alto = createIcon({
  name: "clef-alto",
  category: "clef",
  variant: "outline",
  svgContent:
    '<line x1="6" y1="4" x2="6" y2="20"/><line x1="9" y1="4" x2="9" y2="20"/><path d="M9 4 C15 4, 18 8, 18 12 C18 8, 15 4, 9 4"/><path d="M9 20 C15 20, 18 16, 18 12 C18 16, 15 20, 9 20"/>',
});

export const altoFilled = createIcon({
  name: "clef-alto-filled",
  category: "clef",
  variant: "filled",
  svgContent:
    '<rect x="5" y="4" width="2" height="16"/><rect x="8" y="4" width="2" height="16"/><path d="M10 4 C16 4, 19 8, 19 12 C19 16, 16 20, 10 20 L10 16 C14 16, 16 14, 16 12 C16 10, 14 8, 10 8Z"/>',
});

export const tenor = createIcon({
  name: "clef-tenor",
  category: "clef",
  variant: "outline",
  svgContent:
    '<line x1="6" y1="4" x2="6" y2="20"/><line x1="9" y1="4" x2="9" y2="20"/><path d="M9 4 C15 4, 18 8, 18 12 C18 8, 15 4, 9 4"/><path d="M9 20 C15 20, 18 16, 18 12 C18 16, 15 20, 9 20"/><line x1="4" y1="16" x2="20" y2="16"/>',
});

export const tenorFilled = createIcon({
  name: "clef-tenor-filled",
  category: "clef",
  variant: "filled",
  svgContent:
    '<rect x="5" y="4" width="2" height="16"/><rect x="8" y="4" width="2" height="16"/><path d="M10 4 C16 4, 19 8, 19 12 C19 16, 16 20, 10 20 L10 16 C14 16, 16 14, 16 12 C16 10, 14 8, 10 8Z"/><rect x="4" y="15" width="16" height="2"/>',
});
