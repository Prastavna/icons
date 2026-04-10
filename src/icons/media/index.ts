// SVG paths sourced from Lucide (https://lucide.dev) — MIT License
import { createIcon } from "../../core/create-icon.ts";

const S =
  'stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"';

export const camera = createIcon({
  name: "camera",
  category: "media",
  variant: "outline",
  svgContent:
    '<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/>',
});

export const cameraFilled = createIcon({
  name: "camera-filled",
  category: "media",
  variant: "filled",
  svgContent: `<path ${S} d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle ${S} cx="12" cy="13" r="3"/>`,
});

export const mic = createIcon({
  name: "mic",
  category: "media",
  variant: "outline",
  svgContent:
    '<path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/>',
});

export const micFilled = createIcon({
  name: "mic-filled",
  category: "media",
  variant: "filled",
  svgContent: `<path ${S} d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/><path ${S} d="M19 10v2a7 7 0 0 1-14 0v-2"/><line ${S} x1="12" x2="12" y1="19" y2="22"/>`,
});

export const micOff = createIcon({
  name: "mic-off",
  category: "media",
  variant: "outline",
  svgContent:
    '<line x1="2" x2="22" y1="2" y2="22"/><path d="M18.89 13.23A7.12 7.12 0 0 0 19 12v-2"/><path d="M5 10v2a7 7 0 0 0 12 5"/><path d="M15 9.34V5a3 3 0 0 0-5.68-1.33"/><path d="M9 9v3a3 3 0 0 0 5.12 2.12"/><line x1="12" x2="12" y1="19" y2="22"/>',
});

export const micOffFilled = createIcon({
  name: "mic-off-filled",
  category: "media",
  variant: "filled",
  svgContent: `<line ${S} x1="2" x2="22" y1="2" y2="22"/><path ${S} d="M18.89 13.23A7.12 7.12 0 0 0 19 12v-2"/><path ${S} d="M5 10v2a7 7 0 0 0 12 5"/><path ${S} d="M15 9.34V5a3 3 0 0 0-5.68-1.33"/><path ${S} d="M9 9v3a3 3 0 0 0 5.12 2.12"/><line ${S} x1="12" x2="12" y1="19" y2="22"/>`,
});

export const speaker = createIcon({
  name: "speaker",
  category: "media",
  variant: "outline",
  svgContent:
    '<rect width="16" height="20" x="4" y="2" rx="2"/><circle cx="12" cy="14" r="4"/><line x1="12" x2="12" y1="6" y2="6.01"/>',
});

export const speakerFilled = createIcon({
  name: "speaker-filled",
  category: "media",
  variant: "filled",
  svgContent: `<rect ${S} width="16" height="20" x="4" y="2" rx="2"/><circle ${S} cx="12" cy="14" r="4"/><line ${S} x1="12" x2="12" y1="6" y2="6.01"/>`,
});

export const monitor = createIcon({
  name: "monitor",
  category: "media",
  variant: "outline",
  svgContent:
    '<rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/>',
});

export const monitorFilled = createIcon({
  name: "monitor-filled",
  category: "media",
  variant: "filled",
  svgContent: `<rect ${S} width="20" height="14" x="2" y="3" rx="2"/><line ${S} x1="8" x2="16" y1="21" y2="21"/><line ${S} x1="12" x2="12" y1="17" y2="21"/>`,
});

export const tv = createIcon({
  name: "tv",
  category: "media",
  variant: "outline",
  svgContent: '<rect width="20" height="15" x="2" y="7" rx="2"/><polyline points="17 2 12 7 7 2"/>',
});

export const tvFilled = createIcon({
  name: "tv-filled",
  category: "media",
  variant: "filled",
  svgContent: `<rect ${S} width="20" height="15" x="2" y="7" rx="2"/><polyline ${S} points="17 2 12 7 7 2"/>`,
});

export const headphones = createIcon({
  name: "headphones",
  category: "media",
  variant: "outline",
  svgContent:
    '<path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/>',
});

export const headphonesFilled = createIcon({
  name: "headphones-filled",
  category: "media",
  variant: "filled",
  svgContent: `<path ${S} d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/>`,
});

export const radio = createIcon({
  name: "radio",
  category: "media",
  variant: "outline",
  svgContent:
    '<path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"/><path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.4"/><circle cx="12" cy="12" r="2"/><path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.4"/><path d="M19.1 4.9C23 8.8 23 15.1 19.1 19"/>',
});

export const radioFilled = createIcon({
  name: "radio-filled",
  category: "media",
  variant: "filled",
  svgContent: `<path ${S} d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"/><path ${S} d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.4"/><circle ${S} cx="12" cy="12" r="2"/><path ${S} d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.4"/><path ${S} d="M19.1 4.9C23 8.8 23 15.1 19.1 19"/>`,
});

export const cameraOff = createIcon({
  name: "camera-off",
  category: "media",
  variant: "outline",
  svgContent:
    '<line x1="2" x2="22" y1="2" y2="22"/><path d="M7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16"/><path d="M9.5 4h5L17 7h3a2 2 0 0 1 2 2v7.5"/><path d="M14.121 15.121A3 3 0 1 1 9.88 10.88"/>',
});

export const cameraOffFilled = createIcon({
  name: "camera-off-filled",
  category: "media",
  variant: "filled",
  svgContent: `<line ${S} x1="2" x2="22" y1="2" y2="22"/><path ${S} d="M7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16"/><path ${S} d="M9.5 4h5L17 7h3a2 2 0 0 1 2 2v7.5"/><path ${S} d="M14.121 15.121A3 3 0 1 1 9.88 10.88"/>`,
});

export const screenShare = createIcon({
  name: "screen-share",
  category: "media",
  variant: "outline",
  svgContent:
    '<path d="M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3"/><path d="M8 21h8"/><path d="M12 17v4"/><path d="m17 8 5-5"/><path d="M17 3h5v5"/>',
});

export const screenShareFilled = createIcon({
  name: "screen-share-filled",
  category: "media",
  variant: "filled",
  svgContent: `<path ${S} d="M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3"/><path ${S} d="M8 21h8"/><path ${S} d="M12 17v4"/><path ${S} d="m17 8 5-5"/><path ${S} d="M17 3h5v5"/>`,
});
