// SVG paths sourced from Lucide (https://lucide.dev) — MIT License
import { createIcon } from "../../core/create-icon.ts";

const S =
  'stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"';

export const edit = createIcon({
  name: "action-edit",
  category: "action",
  variant: "outline",
  svgContent:
    '<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>',
});

export const editFilled = createIcon({
  name: "action-edit-filled",
  category: "action",
  variant: "filled",
  svgContent: `<path ${S} d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path ${S} d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>`,
});

export const trash = createIcon({
  name: "action-trash",
  category: "action",
  variant: "outline",
  svgContent:
    '<path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>',
});

export const trashFilled = createIcon({
  name: "action-trash-filled",
  category: "action",
  variant: "filled",
  svgContent: `<path ${S} d="M3 6h18"/><path ${S} d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path ${S} d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>`,
});

export const copy = createIcon({
  name: "action-copy",
  category: "action",
  variant: "outline",
  svgContent:
    '<rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>',
});

export const copyFilled = createIcon({
  name: "action-copy-filled",
  category: "action",
  variant: "filled",
  svgContent: `<rect ${S} width="14" height="14" x="8" y="8" rx="2" ry="2"/><path ${S} d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>`,
});

export const save = createIcon({
  name: "action-save",
  category: "action",
  variant: "outline",
  svgContent:
    '<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/>',
});

export const saveFilled = createIcon({
  name: "action-save-filled",
  category: "action",
  variant: "filled",
  svgContent: `<path ${S} d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline ${S} points="17 21 17 13 7 13 7 21"/><polyline ${S} points="7 3 7 8 15 8"/>`,
});

export const share = createIcon({
  name: "action-share",
  category: "action",
  variant: "outline",
  svgContent:
    '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/>',
});

export const shareFilled = createIcon({
  name: "action-share-filled",
  category: "action",
  variant: "filled",
  svgContent: `<circle ${S} cx="18" cy="5" r="3"/><circle ${S} cx="6" cy="12" r="3"/><circle ${S} cx="18" cy="19" r="3"/><line ${S} x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line ${S} x1="15.41" x2="8.59" y1="6.51" y2="10.49"/>`,
});

export const upload = createIcon({
  name: "action-upload",
  category: "action",
  variant: "outline",
  svgContent:
    '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/>',
});

export const uploadFilled = createIcon({
  name: "action-upload-filled",
  category: "action",
  variant: "filled",
  svgContent: `<path ${S} d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline ${S} points="17 8 12 3 7 8"/><line ${S} x1="12" x2="12" y1="3" y2="15"/>`,
});

export const download = createIcon({
  name: "action-download",
  category: "action",
  variant: "outline",
  svgContent:
    '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>',
});

export const downloadFilled = createIcon({
  name: "action-download-filled",
  category: "action",
  variant: "filled",
  svgContent: `<path ${S} d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline ${S} points="7 10 12 15 17 10"/><line ${S} x1="12" x2="12" y1="15" y2="3"/>`,
});

export const refresh = createIcon({
  name: "action-refresh",
  category: "action",
  variant: "outline",
  svgContent:
    '<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>',
});

export const refreshFilled = createIcon({
  name: "action-refresh-filled",
  category: "action",
  variant: "filled",
  svgContent: `<path ${S} d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path ${S} d="M21 3v5h-5"/><path ${S} d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path ${S} d="M8 16H3v5"/>`,
});

export const filter = createIcon({
  name: "action-filter",
  category: "action",
  variant: "outline",
  svgContent: '<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>',
});

export const filterFilled = createIcon({
  name: "action-filter-filled",
  category: "action",
  variant: "filled",
  svgContent: `<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>`,
});

export const sort = createIcon({
  name: "action-sort",
  category: "action",
  variant: "outline",
  svgContent:
    '<path d="m21 16-4 4-4-4"/><path d="M17 20V4"/><path d="m3 8 4-4 4 4"/><path d="M7 4v16"/>',
});

export const sortFilled = createIcon({
  name: "action-sort-filled",
  category: "action",
  variant: "filled",
  svgContent: `<path ${S} d="m21 16-4 4-4-4"/><path ${S} d="M17 20V4"/><path ${S} d="m3 8 4-4 4 4"/><path ${S} d="M7 4v16"/>`,
});

export const search = createIcon({
  name: "action-search",
  category: "action",
  variant: "outline",
  svgContent: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
});

export const searchFilled = createIcon({
  name: "action-search-filled",
  category: "action",
  variant: "filled",
  svgContent: `<circle ${S} cx="11" cy="11" r="8"/><path ${S} d="m21 21-4.3-4.3"/>`,
});

export const plus = createIcon({
  name: "action-plus",
  category: "action",
  variant: "outline",
  svgContent: '<path d="M5 12h14"/><path d="M12 5v14"/>',
});

export const plusFilled = createIcon({
  name: "action-plus-filled",
  category: "action",
  variant: "filled",
  svgContent: `<path ${S} d="M5 12h14"/><path ${S} d="M12 5v14"/>`,
});

export const minus = createIcon({
  name: "action-minus",
  category: "action",
  variant: "outline",
  svgContent: '<path d="M5 12h14"/>',
});

export const minusFilled = createIcon({
  name: "action-minus-filled",
  category: "action",
  variant: "filled",
  svgContent: `<path ${S} d="M5 12h14"/>`,
});

export const check = createIcon({
  name: "action-check",
  category: "action",
  variant: "outline",
  svgContent: '<path d="M20 6 9 17l-5-5"/>',
});

export const checkFilled = createIcon({
  name: "action-check-filled",
  category: "action",
  variant: "filled",
  svgContent: `<path ${S} d="M20 6 9 17l-5-5"/>`,
});

export const x = createIcon({
  name: "action-x",
  category: "action",
  variant: "outline",
  svgContent: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
});

export const xFilled = createIcon({
  name: "action-x-filled",
  category: "action",
  variant: "filled",
  svgContent: `<path ${S} d="M18 6 6 18"/><path ${S} d="m6 6 12 12"/>`,
});

export const zoomIn = createIcon({
  name: "action-zoom-in",
  category: "action",
  variant: "outline",
  svgContent:
    '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/><path d="M11 8v6"/><path d="M8 11h6"/>',
});

export const zoomInFilled = createIcon({
  name: "action-zoom-in-filled",
  category: "action",
  variant: "filled",
  svgContent: `<circle ${S} cx="11" cy="11" r="8"/><path ${S} d="m21 21-4.3-4.3"/><path ${S} d="M11 8v6"/><path ${S} d="M8 11h6"/>`,
});

export const zoomOut = createIcon({
  name: "action-zoom-out",
  category: "action",
  variant: "outline",
  svgContent: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/><path d="M8 11h6"/>',
});

export const zoomOutFilled = createIcon({
  name: "action-zoom-out-filled",
  category: "action",
  variant: "filled",
  svgContent: `<circle ${S} cx="11" cy="11" r="8"/><path ${S} d="m21 21-4.3-4.3"/><path ${S} d="M8 11h6"/>`,
});

export const scissors = createIcon({
  name: "action-scissors",
  category: "action",
  variant: "outline",
  svgContent:
    '<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" x2="8.12" y1="4" y2="15.88"/><line x1="14.47" x2="20" y1="14.48" y2="20"/>',
});

export const scissorsFilled = createIcon({
  name: "action-scissors-filled",
  category: "action",
  variant: "filled",
  svgContent: `<circle ${S} cx="6" cy="6" r="3"/><circle ${S} cx="6" cy="18" r="3"/><line ${S} x1="20" x2="8.12" y1="4" y2="15.88"/><line ${S} x1="14.47" x2="20" y1="14.48" y2="20"/>`,
});

export const pin = createIcon({
  name: "action-pin",
  category: "action",
  variant: "outline",
  svgContent:
    '<path d="M12 17v5"/><path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"/>',
});

export const pinFilled = createIcon({
  name: "action-pin-filled",
  category: "action",
  variant: "filled",
  svgContent: `<path ${S} d="M12 17v5"/><path ${S} d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"/>`,
});

export const send = createIcon({
  name: "action-send",
  category: "action",
  variant: "outline",
  svgContent: '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
});

export const sendFilled = createIcon({
  name: "action-send-filled",
  category: "action",
  variant: "filled",
  svgContent: `<path ${S} d="m22 2-7 20-4-9-9-4Z"/><path ${S} d="M22 2 11 13"/>`,
});
