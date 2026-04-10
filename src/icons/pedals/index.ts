import { createIcon } from "../../core/create-icon.ts";

export const down = createIcon({
  name: "pedal-down",
  category: "pedal",
  variant: "outline",
  svgContent:
    '<path d="M4 6 L4 18 L12 12 L20 18 L20 6"/><text x="8" y="10" font-size="6" font-family="serif">Ped</text>',
});

export const downFilled = createIcon({
  name: "pedal-down-filled",
  category: "pedal",
  variant: "filled",
  svgContent:
    '<path d="M3 5 L3 19 L12 12 L21 19 L21 5 L19 5 L19 16 L12 10 L5 16 L5 5Z"/><text x="8" y="10" font-size="6" font-family="serif">Ped</text>',
});

export const up = createIcon({
  name: "pedal-up",
  category: "pedal",
  variant: "outline",
  svgContent:
    '<line x1="4" y1="18" x2="12" y2="6"/><line x1="12" y1="6" x2="20" y2="18"/><circle cx="12" cy="16" r="2"/>',
});

export const upFilled = createIcon({
  name: "pedal-up-filled",
  category: "pedal",
  variant: "filled",
  svgContent:
    '<polygon points="3,19 12,5 21,19 18,19 12,8 6,19"/><circle cx="12" cy="16" r="2.5"/>',
});
