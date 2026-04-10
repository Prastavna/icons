import { createIcon } from "../../core/create-icon.ts";

export const piano = createIcon({
  name: "dynamic-piano",
  category: "dynamic",
  variant: "outline",
  svgContent: '<path d="M7 6 L7 18 M7 6 C7 6, 14 6, 14 9.5 C14 13, 7 13, 7 13"/>',
});

export const pianoFilled = createIcon({
  name: "dynamic-piano-filled",
  category: "dynamic",
  variant: "filled",
  svgContent:
    '<path d="M6 5 L8 5 L8 12 C11 12, 13 11, 13 9.5 C13 8, 11 7, 8 7 L8 5 C12 5, 15 7, 15 9.5 C15 13, 11 14, 8 14 L8 19 L6 19Z"/>',
});

export const forte = createIcon({
  name: "dynamic-forte",
  category: "dynamic",
  variant: "outline",
  svgContent:
    '<path d="M10 4 C10 4, 16 4, 16 4 M10 4 L10 20 C10 20, 6 22, 6 18"/><line x1="7" y1="11" x2="15" y2="11"/>',
});

export const forteFilled = createIcon({
  name: "dynamic-forte-filled",
  category: "dynamic",
  variant: "filled",
  svgContent:
    '<path d="M9 3 L17 3 L17 5 L11 5 L11 10 L15 10 L15 12 L11 12 L11 19 C11 21, 8 23, 6 21 C5 20, 6 18, 7 18 C8 18, 9 19, 9 20 L9 3Z"/>',
});

export const mezzoForte = createIcon({
  name: "dynamic-mezzo-forte",
  category: "dynamic",
  variant: "outline",
  svgContent:
    '<path d="M3 18 L3 10 C3 7, 5 6, 7 8 L7 18 M7 10 C7 7, 9 6, 11 8 L11 18"/><path d="M14 5 L20 5 M14 5 L14 20 C14 20, 11 22, 11 19"/><line x1="12" y1="11" x2="18" y2="11"/>',
});

export const mezzoForteFilled = createIcon({
  name: "dynamic-mezzo-forte-filled",
  category: "dynamic",
  variant: "filled",
  svgContent:
    '<path d="M2 18 L2 10 C2 6, 5 5, 7 7 C7 5, 10 5, 12 7 L12 18 L10 18 L10 9 C10 8, 9 7, 8 8 L8 18 L6 18 L6 9 C6 8, 5 7, 4 8 L4 18Z"/><path d="M13 4 L21 4 L21 6 L15 6 L15 10 L19 10 L19 12 L15 12 L15 19 C15 21, 12 23, 11 20 L13 19 C13 20, 13 19, 13 4Z"/>',
});

export const mezzoPiano = createIcon({
  name: "dynamic-mezzo-piano",
  category: "dynamic",
  variant: "outline",
  svgContent:
    '<path d="M3 18 L3 10 C3 7, 5 6, 7 8 L7 18 M7 10 C7 7, 9 6, 11 8 L11 18"/><path d="M14 6 L14 18 M14 6 C14 6, 20 6, 20 9.5 C20 13, 14 13, 14 13"/>',
});

export const mezzoPianoFilled = createIcon({
  name: "dynamic-mezzo-piano-filled",
  category: "dynamic",
  variant: "filled",
  svgContent:
    '<path d="M2 18 L2 10 C2 6, 5 5, 7 7 C7 5, 10 5, 12 7 L12 18 L10 18 L10 9 C10 8, 9 7, 8 8 L8 18 L6 18 L6 9 C6 8, 5 7, 4 8 L4 18Z"/><path d="M13 5 L15 5 L15 12 C18 12, 19 11, 19 9.5 C19 8, 17 7, 15 7 L15 5 C18 5, 21 7, 21 9.5 C21 13, 18 14, 15 14 L15 19 L13 19Z"/>',
});

export const fortissimo = createIcon({
  name: "dynamic-fortissimo",
  category: "dynamic",
  variant: "outline",
  svgContent:
    '<path d="M6 4 L12 4 M6 4 L6 20 C6 20, 3 22, 3 18"/><line x1="3" y1="11" x2="10" y2="11"/><path d="M14 4 L20 4 M14 4 L14 20 C14 20, 11 22, 11 18"/><line x1="11" y1="11" x2="18" y2="11"/>',
});

export const fortissimoFilled = createIcon({
  name: "dynamic-fortissimo-filled",
  category: "dynamic",
  variant: "filled",
  svgContent:
    '<path d="M5 3 L13 3 L13 5 L7 5 L7 10 L11 10 L11 12 L7 12 L7 19 C7 21, 4 23, 3 20 L5 3Z"/><path d="M13 3 L21 3 L21 5 L15 5 L15 10 L19 10 L19 12 L15 12 L15 19 C15 21, 12 23, 11 20 L13 3Z"/>',
});

export const pianissimo = createIcon({
  name: "dynamic-pianissimo",
  category: "dynamic",
  variant: "outline",
  svgContent:
    '<path d="M4 6 L4 18 M4 6 C4 6, 10 6, 10 9.5 C10 13, 4 13, 4 13"/><path d="M13 6 L13 18 M13 6 C13 6, 19 6, 19 9.5 C19 13, 13 13, 13 13"/>',
});

export const pianissimoFilled = createIcon({
  name: "dynamic-pianissimo-filled",
  category: "dynamic",
  variant: "filled",
  svgContent:
    '<path d="M3 5 L5 5 L5 12 C8 12, 9 11, 9 9.5 C9 8, 7 7, 5 7 L5 5 C8 5, 11 7, 11 9.5 C11 13, 8 14, 5 14 L5 19 L3 19Z"/><path d="M12 5 L14 5 L14 12 C17 12, 18 11, 18 9.5 C18 8, 16 7, 14 7 L14 5 C17 5, 20 7, 20 9.5 C20 13, 17 14, 14 14 L14 19 L12 19Z"/>',
});

export const crescendo = createIcon({
  name: "dynamic-crescendo",
  category: "dynamic",
  variant: "outline",
  svgContent: '<polyline points="4,18 20,12 4,6"/>',
});

export const crescendoFilled = createIcon({
  name: "dynamic-crescendo-filled",
  category: "dynamic",
  variant: "filled",
  svgContent: '<polygon points="4,18 20,12 4,6 4,8 17,12 4,16"/>',
});

export const decrescendo = createIcon({
  name: "dynamic-decrescendo",
  category: "dynamic",
  variant: "outline",
  svgContent: '<polyline points="20,18 4,12 20,6"/>',
});

export const decrescendoFilled = createIcon({
  name: "dynamic-decrescendo-filled",
  category: "dynamic",
  variant: "filled",
  svgContent: '<polygon points="20,18 4,12 20,6 20,8 7,12 20,16"/>',
});

export const sforzando = createIcon({
  name: "dynamic-sforzando",
  category: "dynamic",
  variant: "outline",
  svgContent:
    '<path d="M16 6 C12 4, 6 6, 8 9 C10 12, 16 12, 14 15 C12 18, 6 20, 6 18"/><path d="M16 6 L18 4 M16 6 L18 8"/>',
});

export const sforzandoFilled = createIcon({
  name: "dynamic-sforzando-filled",
  category: "dynamic",
  variant: "filled",
  svgContent:
    '<path d="M16 5 C12 3, 5 5, 7 9 C9 12.5, 17 12.5, 15 16 C13 19, 5 21, 5 18 L7 17 C7 19, 12 17, 13 15 C14 13, 9 12, 8 10 C7 7, 10 5, 14 6Z"/><path d="M15 5 L19 3 L18 7Z"/>',
});
