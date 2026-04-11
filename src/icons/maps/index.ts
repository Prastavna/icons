// SVG paths sourced from Lucide (https://lucide.dev) — MIT License
import { createIcon } from "../../core/create-icon.ts";

const S =
  'stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"';

export const mapPin = createIcon({
  name: "map-pin",
  category: "map",
  variant: "outline",
  svgContent:
    '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
});

export const mapPinFilled = createIcon({
  name: "map-pin-filled",
  category: "map",
  variant: "filled",
  svgContent: `<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>`,
});

export const map = createIcon({
  name: "map",
  category: "map",
  variant: "outline",
  svgContent:
    '<polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/>  <line x1="9" x2="9" y1="3" y2="18"/><line x1="15" x2="15" y1="6" y2="21"/>',
});

export const mapFilled = createIcon({
  name: "map-filled",
  category: "map",
  variant: "filled",
  svgContent: `<polygon ${S} points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/>  <line ${S} x1="9" x2="9" y1="3" y2="18"/><line ${S} x1="15" x2="15" y1="6" y2="21"/>`,
});

export const globe = createIcon({
  name: "globe",
  category: "map",
  variant: "outline",
  svgContent:
    '<circle cx="12" cy="12" r="10"/><line x1="2" x2="22" y1="12" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
});

export const globeFilled = createIcon({
  name: "globe-filled",
  category: "map",
  variant: "filled",
  svgContent: `<circle ${S} cx="12" cy="12" r="10"/><line ${S} x1="2" x2="22" y1="12" y2="12"/><path ${S} d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>`,
});

export const navigation = createIcon({
  name: "navigation",
  category: "map",
  variant: "outline",
  svgContent: '<polygon points="3 11 22 2 13 21 11 13 3 11"/>',
});

export const navigationFilled = createIcon({
  name: "navigation-filled",
  category: "map",
  variant: "filled",
  svgContent: `<polygon points="3 11 22 2 13 21 11 13 3 11"/>`,
});

export const route = createIcon({
  name: "route",
  category: "map",
  variant: "outline",
  svgContent:
    '<circle cx="6" cy="19" r="3"/><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"/><circle cx="18" cy="5" r="3"/>',
});

export const routeFilled = createIcon({
  name: "route-filled",
  category: "map",
  variant: "filled",
  svgContent: `<circle ${S} cx="6" cy="19" r="3"/><path ${S} d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"/><circle ${S} cx="18" cy="5" r="3"/>`,
});
