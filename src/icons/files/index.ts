// SVG paths sourced from Lucide (https://lucide.dev) — MIT License
import { createIcon } from "../../core/create-icon.ts";

const S =
  'stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"';

export const file = createIcon({
  name: "file",
  category: "file",
  variant: "outline",
  svgContent:
    '<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/>',
});

export const fileFilled = createIcon({
  name: "file-filled",
  category: "file",
  variant: "filled",
  svgContent: `<path ${S} d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline ${S} points="14 2 14 8 20 8"/>`,
});

export const folder = createIcon({
  name: "folder",
  category: "file",
  variant: "outline",
  svgContent:
    '<path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/>',
});

export const folderFilled = createIcon({
  name: "folder-filled",
  category: "file",
  variant: "filled",
  svgContent: `<path ${S} d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/>`,
});

export const folderOpen = createIcon({
  name: "folder-open",
  category: "file",
  variant: "outline",
  svgContent:
    '<path d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"/>',
});

export const folderOpenFilled = createIcon({
  name: "folder-open-filled",
  category: "file",
  variant: "filled",
  svgContent: `<path ${S} d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"/>`,
});

export const image = createIcon({
  name: "image",
  category: "file",
  variant: "outline",
  svgContent:
    '<rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>',
});

export const imageFilled = createIcon({
  name: "image-filled",
  category: "file",
  variant: "filled",
  svgContent: `<rect ${S} width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle ${S} cx="9" cy="9" r="2"/><path ${S} d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>`,
});

export const video = createIcon({
  name: "video",
  category: "file",
  variant: "outline",
  svgContent:
    '<path d="m22 8-6 4 6 4V8z"/><rect width="14" height="12" x="2" y="6" rx="2" ry="2"/>',
});

export const videoFilled = createIcon({
  name: "video-filled",
  category: "file",
  variant: "filled",
  svgContent: `<path ${S} d="m22 8-6 4 6 4V8z"/><rect ${S} width="14" height="12" x="2" y="6" rx="2" ry="2"/>`,
});

export const audio = createIcon({
  name: "audio",
  category: "file",
  variant: "outline",
  svgContent:
    '<path d="M17.5 22h.5c.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4V7.5L14.5 2H6c-.5 0-1 .2-1.4.6C4.2 3 4 3.5 4 4v3"/><polyline points="14 2 14 8 20 8"/><path d="M10 20v-1a2 2 0 1 1 4 0v1a2 2 0 1 1-4 0z"/><path d="M6 20v-1a2 2 0 1 0-4 0v1a2 2 0 1 0 4 0z"/><path d="M2 19v-3a6 6 0 0 1 12 0v3"/>',
});

export const audioFilled = createIcon({
  name: "audio-filled",
  category: "file",
  variant: "filled",
  svgContent: `<path ${S} d="M17.5 22h.5c.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4V7.5L14.5 2H6c-.5 0-1 .2-1.4.6C4.2 3 4 3.5 4 4v3"/><polyline ${S} points="14 2 14 8 20 8"/><path ${S} d="M10 20v-1a2 2 0 1 1 4 0v1a2 2 0 1 1-4 0z"/><path ${S} d="M6 20v-1a2 2 0 1 0-4 0v1a2 2 0 1 0 4 0z"/><path ${S} d="M2 19v-3a6 6 0 0 1 12 0v3"/>`,
});

export const fileText = createIcon({
  name: "file-text",
  category: "file",
  variant: "outline",
  svgContent:
    '<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/>',
});

export const fileTextFilled = createIcon({
  name: "file-text-filled",
  category: "file",
  variant: "filled",
  svgContent: `<path ${S} d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline ${S} points="14 2 14 8 20 8"/><line ${S} x1="16" x2="8" y1="13" y2="13"/><line ${S} x1="16" x2="8" y1="17" y2="17"/><line ${S} x1="10" x2="8" y1="9" y2="9"/>`,
});

export const fileCode = createIcon({
  name: "file-code",
  category: "file",
  variant: "outline",
  svgContent:
    '<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="m10 13-2 2 2 2"/><path d="m14 17 2-2-2-2"/>',
});

export const fileCodeFilled = createIcon({
  name: "file-code-filled",
  category: "file",
  variant: "filled",
  svgContent: `<path ${S} d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline ${S} points="14 2 14 8 20 8"/><path ${S} d="m10 13-2 2 2 2"/><path ${S} d="m14 17 2-2-2-2"/>`,
});

export const archive = createIcon({
  name: "archive",
  category: "file",
  variant: "outline",
  svgContent:
    '<rect width="20" height="5" x="2" y="3" rx="1"/><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"/><path d="M10 12h4"/>',
});

export const archiveFilled = createIcon({
  name: "archive-filled",
  category: "file",
  variant: "filled",
  svgContent: `<rect ${S} width="20" height="5" x="2" y="3" rx="1"/><path ${S} d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"/><path ${S} d="M10 12h4"/>`,
});

export const hardDrive = createIcon({
  name: "hard-drive",
  category: "file",
  variant: "outline",
  svgContent:
    '<line x1="22" x2="2" y1="12" y2="12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/><line x1="6" x2="6.01" y1="16" y2="16"/><line x1="10" x2="10.01" y1="16" y2="16"/>',
});

export const hardDriveFilled = createIcon({
  name: "hard-drive-filled",
  category: "file",
  variant: "filled",
  svgContent: `<line ${S} x1="22" x2="2" y1="12" y2="12"/><path ${S} d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/><line ${S} x1="6" x2="6.01" y1="16" y2="16"/><line ${S} x1="10" x2="10.01" y1="16" y2="16"/>`,
});
