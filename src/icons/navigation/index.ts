// SVG paths sourced from Lucide (https://lucide.dev) — MIT License
import { createIcon } from "../../core/create-icon.ts";

const S =
  'stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"';

export const home = createIcon({
  name: "navigation-home",
  category: "navigation",
  variant: "outline",
  svgContent:
    '<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
});

export const homeFilled = createIcon({
  name: "navigation-home-filled",
  category: "navigation",
  variant: "filled",
  svgContent: `<path ${S} d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline ${S} points="9 22 9 12 15 12 15 22"/>`,
});

export const menu = createIcon({
  name: "navigation-menu",
  category: "navigation",
  variant: "outline",
  svgContent:
    '<line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="18" y2="18"/>',
});

export const menuFilled = createIcon({
  name: "navigation-menu-filled",
  category: "navigation",
  variant: "filled",
  svgContent: `<line ${S} x1="4" x2="20" y1="6" y2="6"/><line ${S} x1="4" x2="20" y1="12" y2="12"/><line ${S} x1="4" x2="20" y1="18" y2="18"/>`,
});

export const grid = createIcon({
  name: "navigation-grid",
  category: "navigation",
  variant: "outline",
  svgContent:
    '<rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/>',
});

export const gridFilled = createIcon({
  name: "navigation-grid-filled",
  category: "navigation",
  variant: "filled",
  svgContent: `<rect ${S} width="7" height="7" x="3" y="3" rx="1"/><rect ${S} width="7" height="7" x="14" y="3" rx="1"/><rect ${S} width="7" height="7" x="14" y="14" rx="1"/><rect ${S} width="7" height="7" x="3" y="14" rx="1"/>`,
});

export const list = createIcon({
  name: "navigation-list",
  category: "navigation",
  variant: "outline",
  svgContent:
    '<line x1="8" x2="21" y1="6" y2="6"/><line x1="8" x2="21" y1="12" y2="12"/><line x1="8" x2="21" y1="18" y2="18"/><line x1="3" x2="3.01" y1="6" y2="6"/><line x1="3" x2="3.01" y1="12" y2="12"/><line x1="3" x2="3.01" y1="18" y2="18"/>',
});

export const listFilled = createIcon({
  name: "navigation-list-filled",
  category: "navigation",
  variant: "filled",
  svgContent: `<line ${S} x1="8" x2="21" y1="6" y2="6"/><line ${S} x1="8" x2="21" y1="12" y2="12"/><line ${S} x1="8" x2="21" y1="18" y2="18"/><line ${S} x1="3" x2="3.01" y1="6" y2="6"/><line ${S} x1="3" x2="3.01" y1="12" y2="12"/><line ${S} x1="3" x2="3.01" y1="18" y2="18"/>`,
});

export const sidebar = createIcon({
  name: "navigation-sidebar",
  category: "navigation",
  variant: "outline",
  svgContent:
    '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/><path d="m16 15-3-3 3-3"/>',
});

export const sidebarFilled = createIcon({
  name: "navigation-sidebar-filled",
  category: "navigation",
  variant: "filled",
  svgContent: `<rect ${S} width="18" height="18" x="3" y="3" rx="2"/><path ${S} d="M9 3v18"/><path ${S} d="m16 15-3-3 3-3"/>`,
});

export const externalLink = createIcon({
  name: "navigation-external-link",
  category: "navigation",
  variant: "outline",
  svgContent:
    '<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
});

export const externalLinkFilled = createIcon({
  name: "navigation-external-link-filled",
  category: "navigation",
  variant: "filled",
  svgContent: `<path ${S} d="M15 3h6v6"/><path ${S} d="M10 14 21 3"/><path ${S} d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>`,
});

export const anchor = createIcon({
  name: "navigation-anchor",
  category: "navigation",
  variant: "outline",
  svgContent:
    '<circle cx="12" cy="5" r="3"/><line x1="12" y1="22" x2="12" y2="8"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/>',
});

export const anchorFilled = createIcon({
  name: "navigation-anchor-filled",
  category: "navigation",
  variant: "filled",
  svgContent: `<circle ${S} cx="12" cy="5" r="3"/><line ${S} x1="12" y1="22" x2="12" y2="8"/><path ${S} d="M5 12H2a10 10 0 0 0 20 0h-3"/>`,
});

export const compass = createIcon({
  name: "navigation-compass",
  category: "navigation",
  variant: "outline",
  svgContent:
    '<circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>',
});

export const compassFilled = createIcon({
  name: "navigation-compass-filled",
  category: "navigation",
  variant: "filled",
  svgContent: `<circle ${S} cx="12" cy="12" r="10"/><polygon ${S} points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>`,
});

export const moreHorizontal = createIcon({
  name: "navigation-more-horizontal",
  category: "navigation",
  variant: "outline",
  svgContent:
    '<circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>',
});

export const moreHorizontalFilled = createIcon({
  name: "navigation-more-horizontal-filled",
  category: "navigation",
  variant: "filled",
  svgContent: `<circle ${S} cx="12" cy="12" r="1"/><circle ${S} cx="19" cy="12" r="1"/><circle ${S} cx="5" cy="12" r="1"/>`,
});

export const moreVertical = createIcon({
  name: "navigation-more-vertical",
  category: "navigation",
  variant: "outline",
  svgContent:
    '<circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/>',
});

export const moreVerticalFilled = createIcon({
  name: "navigation-more-vertical-filled",
  category: "navigation",
  variant: "filled",
  svgContent: `<circle ${S} cx="12" cy="12" r="1"/><circle ${S} cx="12" cy="5" r="1"/><circle ${S} cx="12" cy="19" r="1"/>`,
});
