// SVG paths sourced from Lucide (https://lucide.dev) — MIT License
import { createIcon } from "../../core/create-icon.ts";

const S =
  'stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"';

export const sun = createIcon({
  name: "sun",
  category: "weather",
  variant: "outline",
  svgContent:
    '<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>',
});

export const sunFilled = createIcon({
  name: "sun-filled",
  category: "weather",
  variant: "filled",
  svgContent: `<circle ${S} cx="12" cy="12" r="4"/><path ${S} d="M12 2v2"/><path ${S} d="M12 20v2"/><path ${S} d="m4.93 4.93 1.41 1.41"/><path ${S} d="m17.66 17.66 1.41 1.41"/><path ${S} d="M2 12h2"/><path ${S} d="M20 12h2"/><path ${S} d="m6.34 17.66-1.41 1.41"/><path ${S} d="m19.07 4.93-1.41 1.41"/>`,
});

export const moon = createIcon({
  name: "moon",
  category: "weather",
  variant: "outline",
  svgContent: '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>',
});

export const moonFilled = createIcon({
  name: "moon-filled",
  category: "weather",
  variant: "filled",
  svgContent: `<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>`,
});

export const cloud = createIcon({
  name: "cloud",
  category: "weather",
  variant: "outline",
  svgContent: '<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>',
});

export const cloudFilled = createIcon({
  name: "cloud-filled",
  category: "weather",
  variant: "filled",
  svgContent: `<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>`,
});

export const cloudRain = createIcon({
  name: "cloud-rain",
  category: "weather",
  variant: "outline",
  svgContent:
    '<path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"/><line x1="8" x2="8.01" y1="19" y2="19"/><line x1="8" x2="8.01" y1="23" y2="23"/><line x1="12" x2="12.01" y1="21" y2="21"/><line x1="12" x2="12.01" y1="17" y2="17"/><line x1="16" x2="16.01" y1="19" y2="19"/><line x1="16" x2="16.01" y1="23" y2="23"/>',
});

export const cloudRainFilled = createIcon({
  name: "cloud-rain-filled",
  category: "weather",
  variant: "filled",
  svgContent: `<path ${S} d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"/><line ${S} x1="8" x2="8.01" y1="19" y2="19"/><line ${S} x1="8" x2="8.01" y1="23" y2="23"/><line ${S} x1="12" x2="12.01" y1="21" y2="21"/><line ${S} x1="12" x2="12.01" y1="17" y2="17"/><line ${S} x1="16" x2="16.01" y1="19" y2="19"/><line ${S} x1="16" x2="16.01" y1="23" y2="23"/>`,
});

export const cloudSnow = createIcon({
  name: "cloud-snow",
  category: "weather",
  variant: "outline",
  svgContent:
    '<path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"/><line x1="8" x2="8.01" y1="19" y2="19"/><line x1="8" x2="8.01" y1="23" y2="23"/><line x1="12" x2="12.01" y1="21" y2="21"/><line x1="12" x2="12.01" y1="17" y2="17"/><line x1="16" x2="16.01" y1="19" y2="19"/><line x1="16" x2="16.01" y1="23" y2="23"/>',
});

export const cloudSnowFilled = createIcon({
  name: "cloud-snow-filled",
  category: "weather",
  variant: "filled",
  svgContent: `<path ${S} d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"/><line ${S} x1="8" x2="8.01" y1="19" y2="19"/><line ${S} x1="8" x2="8.01" y1="23" y2="23"/><line ${S} x1="12" x2="12.01" y1="21" y2="21"/><line ${S} x1="12" x2="12.01" y1="17" y2="17"/><line ${S} x1="16" x2="16.01" y1="19" y2="19"/><line ${S} x1="16" x2="16.01" y1="23" y2="23"/>`,
});

export const wind = createIcon({
  name: "wind",
  category: "weather",
  variant: "outline",
  svgContent:
    '<path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"/><path d="M9.6 4.6A2 2 0 1 1 11 8H2"/><path d="M12.6 19.4A2 2 0 1 0 14 16H2"/>',
});

export const windFilled = createIcon({
  name: "wind-filled",
  category: "weather",
  variant: "filled",
  svgContent: `<path ${S} d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"/><path ${S} d="M9.6 4.6A2 2 0 1 1 11 8H2"/><path ${S} d="M12.6 19.4A2 2 0 1 0 14 16H2"/>`,
});

export const lightning = createIcon({
  name: "lightning",
  category: "weather",
  variant: "outline",
  svgContent:
    '<path d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973"/><path d="m13 12-3 5h4l-3 5"/>',
});

export const lightningFilled = createIcon({
  name: "lightning-filled",
  category: "weather",
  variant: "filled",
  svgContent: `<path ${S} d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973"/><path ${S} d="m13 12-3 5h4l-3 5"/>`,
});

export const snowflake = createIcon({
  name: "snowflake",
  category: "weather",
  variant: "outline",
  svgContent:
    '<line x1="2" x2="22" y1="12" y2="12"/><line x1="12" x2="12" y1="2" y2="22"/><path d="m20 16-4-4 4-4"/><path d="m4 8 4 4-4 4"/><path d="m16 4-4 4-4-4"/><path d="m8 20 4-4 4 4"/>',
});

export const snowflakeFilled = createIcon({
  name: "snowflake-filled",
  category: "weather",
  variant: "filled",
  svgContent: `<line ${S} x1="2" x2="22" y1="12" y2="12"/><line ${S} x1="12" x2="12" y1="2" y2="22"/><path ${S} d="m20 16-4-4 4-4"/><path ${S} d="m4 8 4 4-4 4"/><path ${S} d="m16 4-4 4-4-4"/><path ${S} d="m8 20 4-4 4 4"/>`,
});
