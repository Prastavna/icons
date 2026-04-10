import { createIcon } from "../../core/create-icon.ts";

export const bar = createIcon({
  name: "repeat-bar",
  category: "repeat",
  variant: "outline",
  svgContent:
    '<line x1="6" y1="4" x2="6" y2="20"/><line x1="18" y1="4" x2="18" y2="20"/><path d="M9 8 L15 12 L9 16Z"/>',
});

export const barFilled = createIcon({
  name: "repeat-bar-filled",
  category: "repeat",
  variant: "filled",
  svgContent:
    '<rect x="5" y="4" width="2" height="16"/><rect x="17" y="4" width="2" height="16"/><polygon points="9,7 16,12 9,17"/>',
});

export const sign = createIcon({
  name: "repeat-sign",
  category: "repeat",
  variant: "outline",
  svgContent:
    '<line x1="4" y1="20" x2="20" y2="4"/><circle cx="8" cy="8" r="2"/><circle cx="16" cy="16" r="2"/>',
});

export const signFilled = createIcon({
  name: "repeat-sign-filled",
  category: "repeat",
  variant: "filled",
  svgContent:
    '<path d="M3 21 L5 21 L21 5 L21 3 L19 3 L3 19Z"/><circle cx="8" cy="8" r="2.5"/><circle cx="16" cy="16" r="2.5"/>',
});

export const segno = createIcon({
  name: "repeat-segno",
  category: "repeat",
  variant: "outline",
  svgContent:
    '<line x1="4" y1="20" x2="20" y2="4"/><path d="M6 14 C6 10, 12 10, 12 12 C12 14, 6 14, 6 14"/><path d="M18 10 C18 14, 12 14, 12 12 C12 10, 18 10, 18 10"/><circle cx="8" cy="6" r="1.5"/><circle cx="16" cy="18" r="1.5"/>',
});

export const segnoFilled = createIcon({
  name: "repeat-segno-filled",
  category: "repeat",
  variant: "filled",
  svgContent:
    '<path d="M3 21 L5 21 L21 5 L21 3 L19 3 L3 19Z"/><path d="M5 15 C5 10, 12 9, 12 12 C12 15, 5 15, 5 15Z"/><path d="M19 9 C19 14, 12 15, 12 12 C12 9, 19 9, 19 9Z"/><circle cx="8" cy="6" r="2"/><circle cx="16" cy="18" r="2"/>',
});

export const coda = createIcon({
  name: "repeat-coda",
  category: "repeat",
  variant: "outline",
  svgContent:
    '<circle cx="12" cy="12" r="6"/><line x1="12" y1="3" x2="12" y2="21"/><line x1="3" y1="12" x2="21" y2="12"/><path d="M12 6 C9 6, 6 9, 6 12 C6 15, 9 18, 12 18 C15 18, 18 15, 18 12 C18 9, 15 6, 12 6"/>',
});

export const codaFilled = createIcon({
  name: "repeat-coda-filled",
  category: "repeat",
  variant: "filled",
  svgContent:
    '<rect x="11" y="3" width="2" height="18"/><rect x="3" y="11" width="18" height="2"/><path d="M12 5 C8 5, 5 8, 5 12 C5 16, 8 19, 12 19 C16 19, 19 16, 19 12 C19 8, 16 5, 12 5Z M12 7 C15 7, 17 9, 17 12 C17 15, 15 17, 12 17 C9 17, 7 15, 7 12 C7 9, 9 7, 12 7Z"/>',
});

export const dalSegno = createIcon({
  name: "repeat-dal-segno",
  category: "repeat",
  variant: "outline",
  svgContent:
    '<path d="M5 6 C5 6, 8 4, 12 4 C16 4, 19 6, 19 9 C19 12, 16 14, 12 14"/><path d="M12 14 L15 11 M12 14 L15 17"/><text x="5" y="20" font-size="8" font-family="serif">D.S.</text>',
});

export const dalSegnoFilled = createIcon({
  name: "repeat-dal-segno-filled",
  category: "repeat",
  variant: "filled",
  svgContent:
    '<path d="M5 5 C5 5, 8 3, 12 3 C17 3, 20 5.5, 20 9 C20 12.5, 17 15, 12 15 L15 18 L13 19 L9 14 L13 9 L15 10 L12 13 C16 13, 18 11.5, 18 9 C18 6.5, 15 5, 12 5 C9 5, 7 6, 5 7Z"/><text x="5" y="20" font-size="8" font-family="serif">D.S.</text>',
});

export const daCapo = createIcon({
  name: "repeat-da-capo",
  category: "repeat",
  variant: "outline",
  svgContent:
    '<path d="M5 6 C5 6, 8 4, 12 4 C16 4, 19 6, 19 9 C19 12, 16 14, 12 14"/><path d="M12 14 L15 11 M12 14 L15 17"/><text x="5" y="20" font-size="8" font-family="serif">D.C.</text>',
});

export const daCapoFilled = createIcon({
  name: "repeat-da-capo-filled",
  category: "repeat",
  variant: "filled",
  svgContent:
    '<path d="M5 5 C5 5, 8 3, 12 3 C17 3, 20 5.5, 20 9 C20 12.5, 17 15, 12 15 L15 18 L13 19 L9 14 L13 9 L15 10 L12 13 C16 13, 18 11.5, 18 9 C18 6.5, 15 5, 12 5 C9 5, 7 6, 5 7Z"/><text x="5" y="20" font-size="8" font-family="serif">D.C.</text>',
});
