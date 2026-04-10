import { createIcon } from "../../core/create-icon.ts";

export const trill = createIcon({
  name: "ornament-trill",
  category: "ornament",
  variant: "outline",
  svgContent:
    '<path d="M4 14 C6 10, 8 10, 10 14 C12 18, 14 18, 16 14 C18 10, 20 10, 20 14"/><path d="M11 6 L11 10 M11 6 L14 6 L14 8"/>',
});

export const trillFilled = createIcon({
  name: "ornament-trill-filled",
  category: "ornament",
  variant: "filled",
  svgContent:
    '<path d="M3 15 C5 10, 8 9, 10 13 C12 17, 15 17, 17 13 C19 9, 21 10, 21 13 L21 15 C21 15, 19 12, 17 15 C15 19, 12 19, 10 15 C8 11, 5 12, 3 15Z"/><path d="M10 5 L12 5 L12 9 L10 9Z"/><path d="M12 5 L15 5 L15 7 L12 7Z"/>',
});

export const mordent = createIcon({
  name: "ornament-mordent",
  category: "ornament",
  variant: "outline",
  svgContent:
    '<polyline points="4,12 8,8 12,16 16,8 20,12"/><line x1="12" y1="6" x2="12" y2="18"/>',
});

export const mordentFilled = createIcon({
  name: "ornament-mordent-filled",
  category: "ornament",
  variant: "filled",
  svgContent:
    '<polygon points="4,13 8,8 12,15 16,8 20,13 20,11 16,6 12,13 8,6 4,11"/><rect x="11" y="5" width="2" height="14"/>',
});

export const turn = createIcon({
  name: "ornament-turn",
  category: "ornament",
  variant: "outline",
  svgContent:
    '<path d="M4 12 C4 8, 8 8, 8 12 C8 16, 12 16, 12 12 C12 8, 16 8, 16 12 C16 16, 20 16, 20 12"/>',
});

export const turnFilled = createIcon({
  name: "ornament-turn-filled",
  category: "ornament",
  variant: "filled",
  svgContent:
    '<path d="M3 12 C3 7, 8 7, 8 12 C8 17, 12 17, 12 12 C12 7, 16 7, 16 12 C16 17, 21 17, 21 12 L21 14 C21 18, 17 18, 16 14 C15 18, 9 18, 8 14 C7 18, 3 18, 3 14Z"/>',
});

export const tremolo = createIcon({
  name: "ornament-tremolo",
  category: "ornament",
  variant: "outline",
  svgContent:
    '<line x1="6" y1="8" x2="18" y2="6"/><line x1="6" y1="13" x2="18" y2="11"/><line x1="6" y1="18" x2="18" y2="16"/>',
});

export const tremoloFilled = createIcon({
  name: "ornament-tremolo-filled",
  category: "ornament",
  variant: "filled",
  svgContent:
    '<polygon points="6,7 18,5 18,8 6,10"/><polygon points="6,12 18,10 18,13 6,15"/><polygon points="6,17 18,15 18,18 6,20"/>',
});

export const graceNote = createIcon({
  name: "ornament-grace-note",
  category: "ornament",
  variant: "outline",
  svgContent:
    '<ellipse cx="10" cy="16" rx="3.5" ry="2.5" transform="rotate(-15 10 16)"/><line x1="13.2" y1="14.5" x2="13.2" y2="6"/><path d="M13.2 6 C15.5 7, 17 9, 16 11"/><line x1="7" y1="19" x2="17" y2="9"/>',
});

export const graceNoteFilled = createIcon({
  name: "ornament-grace-note-filled",
  category: "ornament",
  variant: "filled",
  svgContent:
    '<ellipse cx="10" cy="16" rx="3.5" ry="2.5" transform="rotate(-15 10 16)"/><rect x="12.2" y="6" width="2" height="9"/><path d="M13.2 6 C16 7, 18 9, 16.5 11.5 L15 10.5 C16 9, 15 7.5, 13.2 7Z"/><line x1="7" y1="19" x2="17" y2="9" stroke-width="1.5"/>',
});
