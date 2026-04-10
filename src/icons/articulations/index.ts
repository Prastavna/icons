import { createIcon } from "../../core/create-icon.ts";

export const staccato = createIcon({
  name: "articulation-staccato",
  category: "articulation",
  variant: "outline",
  svgContent: '<circle cx="12" cy="12" r="2"/>',
});

export const staccatoFilled = createIcon({
  name: "articulation-staccato-filled",
  category: "articulation",
  variant: "filled",
  svgContent: '<circle cx="12" cy="12" r="3"/>',
});

export const accent = createIcon({
  name: "articulation-accent",
  category: "articulation",
  variant: "outline",
  svgContent: '<polyline points="4,8 20,12 4,16"/>',
});

export const accentFilled = createIcon({
  name: "articulation-accent-filled",
  category: "articulation",
  variant: "filled",
  svgContent: '<polygon points="4,7 20,12 4,17 4,15 16,12 4,9"/>',
});

export const tenuto = createIcon({
  name: "articulation-tenuto",
  category: "articulation",
  variant: "outline",
  svgContent: '<line x1="6" y1="12" x2="18" y2="12"/>',
});

export const tenutoFilled = createIcon({
  name: "articulation-tenuto-filled",
  category: "articulation",
  variant: "filled",
  svgContent: '<rect x="6" y="11" width="12" height="2" rx="1"/>',
});

export const fermata = createIcon({
  name: "articulation-fermata",
  category: "articulation",
  variant: "outline",
  svgContent:
    '<path d="M4 18 C4 10, 12 4, 12 4 C12 4, 20 10, 20 18"/><circle cx="12" cy="16" r="1.5"/>',
});

export const fermataFilled = createIcon({
  name: "articulation-fermata-filled",
  category: "articulation",
  variant: "filled",
  svgContent:
    '<path d="M3 18 C3 9, 12 3, 12 3 C12 3, 21 9, 21 18Z"/><circle cx="12" cy="15" r="2"/>',
});

export const marcato = createIcon({
  name: "articulation-marcato",
  category: "articulation",
  variant: "outline",
  svgContent: '<polyline points="6,18 12,6 18,18"/>',
});

export const marcatoFilled = createIcon({
  name: "articulation-marcato-filled",
  category: "articulation",
  variant: "filled",
  svgContent: '<polygon points="6,18 12,5 18,18 15,18 12,9 9,18"/>',
});

export const staccatissimo = createIcon({
  name: "articulation-staccatissimo",
  category: "articulation",
  variant: "outline",
  svgContent: '<path d="M12 6 L12 14"/><circle cx="12" cy="4" r="1"/>',
});

export const staccatissimoFilled = createIcon({
  name: "articulation-staccatissimo-filled",
  category: "articulation",
  variant: "filled",
  svgContent: '<path d="M10 8 L12 18 L14 8Z"/><circle cx="12" cy="5" r="2"/>',
});
