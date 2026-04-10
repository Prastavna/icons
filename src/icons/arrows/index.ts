// SVG paths sourced from Lucide (https://lucide.dev) — MIT License
import { createIcon } from "../../core/create-icon.ts";

const S =
  'stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"';

export const arrowRight = createIcon({
  name: "arrow-right",
  category: "arrow",
  variant: "outline",
  svgContent: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
});

export const arrowRightFilled = createIcon({
  name: "arrow-right-filled",
  category: "arrow",
  variant: "filled",
  svgContent: `<path ${S} d="M5 12h14"/><path ${S} d="m12 5 7 7-7 7"/>`,
});

export const arrowLeft = createIcon({
  name: "arrow-left",
  category: "arrow",
  variant: "outline",
  svgContent: '<path d="M19 12H5"/><path d="m12 19-7-7 7-7"/>',
});

export const arrowLeftFilled = createIcon({
  name: "arrow-left-filled",
  category: "arrow",
  variant: "filled",
  svgContent: `<path ${S} d="M19 12H5"/><path ${S} d="m12 19-7-7 7-7"/>`,
});

export const arrowUp = createIcon({
  name: "arrow-up",
  category: "arrow",
  variant: "outline",
  svgContent: '<path d="M12 19V5"/><path d="m5 12 7-7 7 7"/>',
});

export const arrowUpFilled = createIcon({
  name: "arrow-up-filled",
  category: "arrow",
  variant: "filled",
  svgContent: `<path ${S} d="M12 19V5"/><path ${S} d="m5 12 7-7 7 7"/>`,
});

export const arrowDown = createIcon({
  name: "arrow-down",
  category: "arrow",
  variant: "outline",
  svgContent: '<path d="M12 5v14"/><path d="m19 12-7 7-7-7"/>',
});

export const arrowDownFilled = createIcon({
  name: "arrow-down-filled",
  category: "arrow",
  variant: "filled",
  svgContent: `<path ${S} d="M12 5v14"/><path ${S} d="m19 12-7 7-7-7"/>`,
});

export const arrowUpRight = createIcon({
  name: "arrow-up-right",
  category: "arrow",
  variant: "outline",
  svgContent: '<path d="M7 7h10v10"/><path d="M7 17 17 7"/>',
});

export const arrowUpRightFilled = createIcon({
  name: "arrow-up-right-filled",
  category: "arrow",
  variant: "filled",
  svgContent: `<path ${S} d="M7 7h10v10"/><path ${S} d="M7 17 17 7"/>`,
});

export const arrowDownLeft = createIcon({
  name: "arrow-down-left",
  category: "arrow",
  variant: "outline",
  svgContent: '<path d="M17 17H7V7"/><path d="M17 7 7 17"/>',
});

export const arrowDownLeftFilled = createIcon({
  name: "arrow-down-left-filled",
  category: "arrow",
  variant: "filled",
  svgContent: `<path ${S} d="M17 17H7V7"/><path ${S} d="M17 7 7 17"/>`,
});

export const chevronRight = createIcon({
  name: "chevron-right",
  category: "arrow",
  variant: "outline",
  svgContent: '<path d="m9 18 6-6-6-6"/>',
});

export const chevronRightFilled = createIcon({
  name: "chevron-right-filled",
  category: "arrow",
  variant: "filled",
  svgContent: `<path ${S} d="m9 18 6-6-6-6"/>`,
});

export const chevronLeft = createIcon({
  name: "chevron-left",
  category: "arrow",
  variant: "outline",
  svgContent: '<path d="m15 18-6-6 6-6"/>',
});

export const chevronLeftFilled = createIcon({
  name: "chevron-left-filled",
  category: "arrow",
  variant: "filled",
  svgContent: `<path ${S} d="m15 18-6-6 6-6"/>`,
});

export const chevronUp = createIcon({
  name: "chevron-up",
  category: "arrow",
  variant: "outline",
  svgContent: '<path d="m18 15-6-6-6 6"/>',
});

export const chevronUpFilled = createIcon({
  name: "chevron-up-filled",
  category: "arrow",
  variant: "filled",
  svgContent: `<path ${S} d="m18 15-6-6-6 6"/>`,
});

export const chevronDown = createIcon({
  name: "chevron-down",
  category: "arrow",
  variant: "outline",
  svgContent: '<path d="m6 9 6 6 6-6"/>',
});

export const chevronDownFilled = createIcon({
  name: "chevron-down-filled",
  category: "arrow",
  variant: "filled",
  svgContent: `<path ${S} d="m6 9 6 6 6-6"/>`,
});

export const chevronsRight = createIcon({
  name: "chevrons-right",
  category: "arrow",
  variant: "outline",
  svgContent: '<path d="m6 17 5-5-5-5"/><path d="m13 17 5-5-5-5"/>',
});

export const chevronsRightFilled = createIcon({
  name: "chevrons-right-filled",
  category: "arrow",
  variant: "filled",
  svgContent: `<path ${S} d="m6 17 5-5-5-5"/><path ${S} d="m13 17 5-5-5-5"/>`,
});

export const chevronsLeft = createIcon({
  name: "chevrons-left",
  category: "arrow",
  variant: "outline",
  svgContent: '<path d="m18 17-5-5 5-5"/><path d="m11 17-5-5 5-5"/>',
});

export const chevronsLeftFilled = createIcon({
  name: "chevrons-left-filled",
  category: "arrow",
  variant: "filled",
  svgContent: `<path ${S} d="m18 17-5-5 5-5"/><path ${S} d="m11 17-5-5 5-5"/>`,
});

export const chevronsUpDown = createIcon({
  name: "chevrons-up-down",
  category: "arrow",
  variant: "outline",
  svgContent: '<path d="m7 15 5 5 5-5"/><path d="m7 9 5-5 5 5"/>',
});

export const chevronsUpDownFilled = createIcon({
  name: "chevrons-up-down-filled",
  category: "arrow",
  variant: "filled",
  svgContent: `<path ${S} d="m7 15 5 5 5-5"/><path ${S} d="m7 9 5-5 5 5"/>`,
});

export const moveRight = createIcon({
  name: "move-right",
  category: "arrow",
  variant: "outline",
  svgContent: '<path d="M18 8L22 12L18 16"/><path d="M2 12H22"/>',
});

export const moveRightFilled = createIcon({
  name: "move-right-filled",
  category: "arrow",
  variant: "filled",
  svgContent: `<path ${S} d="M18 8L22 12L18 16"/><path ${S} d="M2 12H22"/>`,
});

export const moveLeft = createIcon({
  name: "move-left",
  category: "arrow",
  variant: "outline",
  svgContent: '<path d="M6 8L2 12L6 16"/><path d="M2 12H22"/>',
});

export const moveLeftFilled = createIcon({
  name: "move-left-filled",
  category: "arrow",
  variant: "filled",
  svgContent: `<path ${S} d="M6 8L2 12L6 16"/><path ${S} d="M2 12H22"/>`,
});

export const cornerDownRight = createIcon({
  name: "corner-down-right",
  category: "arrow",
  variant: "outline",
  svgContent: '<path d="m15 10 5 5-5 5"/><path d="M4 4v7a4 4 0 0 0 4 4h12"/>',
});

export const cornerDownRightFilled = createIcon({
  name: "corner-down-right-filled",
  category: "arrow",
  variant: "filled",
  svgContent: `<path ${S} d="m15 10 5 5-5 5"/><path ${S} d="M4 4v7a4 4 0 0 0 4 4h12"/>`,
});

export const cornerUpLeft = createIcon({
  name: "corner-up-left",
  category: "arrow",
  variant: "outline",
  svgContent: '<path d="m9 14-5-5 5-5"/><path d="M20 20v-7a4 4 0 0 0-4-4H4"/>',
});

export const cornerUpLeftFilled = createIcon({
  name: "corner-up-left-filled",
  category: "arrow",
  variant: "filled",
  svgContent: `<path ${S} d="m9 14-5-5 5-5"/><path ${S} d="M20 20v-7a4 4 0 0 0-4-4H4"/>`,
});

export const arrowUpDown = createIcon({
  name: "arrow-up-down",
  category: "arrow",
  variant: "outline",
  svgContent:
    '<path d="m21 16-4 4-4-4"/><path d="M17 20V4"/><path d="m3 8 4-4 4 4"/><path d="M7 4v16"/>',
});

export const arrowUpDownFilled = createIcon({
  name: "arrow-up-down-filled",
  category: "arrow",
  variant: "filled",
  svgContent: `<path ${S} d="m21 16-4 4-4-4"/><path ${S} d="M17 20V4"/><path ${S} d="m3 8 4-4 4 4"/><path ${S} d="M7 4v16"/>`,
});

export const arrowLeftRight = createIcon({
  name: "arrow-left-right",
  category: "arrow",
  variant: "outline",
  svgContent:
    '<path d="M8 3 4 7l4 4"/><path d="M4 7h16"/><path d="m16 21 4-4-4-4"/><path d="M20 17H4"/>',
});

export const arrowLeftRightFilled = createIcon({
  name: "arrow-left-right-filled",
  category: "arrow",
  variant: "filled",
  svgContent: `<path ${S} d="M8 3 4 7l4 4"/><path ${S} d="M4 7h16"/><path ${S} d="m16 21 4-4-4-4"/><path ${S} d="M20 17H4"/>`,
});

export const rotateCw = createIcon({
  name: "rotate-cw",
  category: "arrow",
  variant: "outline",
  svgContent: '<path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/>',
});

export const rotateCwFilled = createIcon({
  name: "rotate-cw-filled",
  category: "arrow",
  variant: "filled",
  svgContent: `<path ${S} d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/><path ${S} d="M21 3v5h-5"/>`,
});

export const rotateCcw = createIcon({
  name: "rotate-ccw",
  category: "arrow",
  variant: "outline",
  svgContent: '<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>',
});

export const rotateCcwFilled = createIcon({
  name: "rotate-ccw-filled",
  category: "arrow",
  variant: "filled",
  svgContent: `<path ${S} d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path ${S} d="M3 3v5h5"/>`,
});

export const expand = createIcon({
  name: "expand",
  category: "arrow",
  variant: "outline",
  svgContent:
    '<path d="m21 21-6-6m6 6v-4.8m0 4.8h-4.8"/><path d="M3 16.2V21m0 0h4.8M3 21l6-6"/><path d="M21 7.8V3m0 0h-4.8M21 3l-6 6"/><path d="M3 7.8V3m0 0h4.8M3 3l6 6"/>',
});

export const expandFilled = createIcon({
  name: "expand-filled",
  category: "arrow",
  variant: "filled",
  svgContent: `<path ${S} d="m21 21-6-6m6 6v-4.8m0 4.8h-4.8"/><path ${S} d="M3 16.2V21m0 0h4.8M3 21l6-6"/><path ${S} d="M21 7.8V3m0 0h-4.8M21 3l-6 6"/><path ${S} d="M3 7.8V3m0 0h4.8M3 3l6 6"/>`,
});

export const shrink = createIcon({
  name: "shrink",
  category: "arrow",
  variant: "outline",
  svgContent:
    '<path d="m15 15 6 6m-6-6v4.8m0-4.8h4.8"/><path d="M9 19.8V15m0 0H4.2M9 15l-6 6"/><path d="M15 4.2V9m0 0h4.8M15 9l6-6"/><path d="M9 4.2V9m0 0H4.2M9 9 3 3"/>',
});

export const shrinkFilled = createIcon({
  name: "shrink-filled",
  category: "arrow",
  variant: "filled",
  svgContent: `<path ${S} d="m15 15 6 6m-6-6v4.8m0-4.8h4.8"/><path ${S} d="M9 19.8V15m0 0H4.2M9 15l-6 6"/><path ${S} d="M15 4.2V9m0 0h4.8M15 9l6-6"/><path ${S} d="M9 4.2V9m0 0H4.2M9 9 3 3"/>`,
});
