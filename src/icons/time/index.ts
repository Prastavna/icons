// SVG paths sourced from Lucide (https://lucide.dev) — MIT License
import { createIcon } from "../../core/create-icon.ts";

const S =
  'stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"';

export const clock = createIcon({
  name: "clock",
  category: "time",
  variant: "outline",
  svgContent: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
});

export const clockFilled = createIcon({
  name: "clock-filled",
  category: "time",
  variant: "filled",
  svgContent: `<circle ${S} cx="12" cy="12" r="10"/><polyline ${S} points="12 6 12 12 16 14"/>`,
});

export const calendar = createIcon({
  name: "calendar",
  category: "time",
  variant: "outline",
  svgContent:
    '<rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/>',
});

export const calendarFilled = createIcon({
  name: "calendar-filled",
  category: "time",
  variant: "filled",
  svgContent: `<rect ${S} width="18" height="18" x="3" y="4" rx="2" ry="2"/><line ${S} x1="16" x2="16" y1="2" y2="6"/><line ${S} x1="8" x2="8" y1="2" y2="6"/><line ${S} x1="3" x2="21" y1="10" y2="10"/>`,
});

export const timer = createIcon({
  name: "timer",
  category: "time",
  variant: "outline",
  svgContent:
    '<line x1="10" x2="14" y1="2" y2="2"/><line x1="12" x2="15" y1="14" y2="11"/><circle cx="12" cy="14" r="8"/>',
});

export const timerFilled = createIcon({
  name: "timer-filled",
  category: "time",
  variant: "filled",
  svgContent: `<line ${S} x1="10" x2="14" y1="2" y2="2"/><line ${S} x1="12" x2="15" y1="14" y2="11"/><circle ${S} cx="12" cy="14" r="8"/>`,
});

export const hourglass = createIcon({
  name: "hourglass",
  category: "time",
  variant: "outline",
  svgContent:
    '<path d="M5 22h14"/><path d="M5 2h14"/><path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"/><path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"/>',
});

export const hourglassFilled = createIcon({
  name: "hourglass-filled",
  category: "time",
  variant: "filled",
  svgContent: `<path ${S} d="M5 22h14"/><path ${S} d="M5 2h14"/><path ${S} d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"/><path ${S} d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"/>`,
});

export const alarm = createIcon({
  name: "alarm",
  category: "time",
  variant: "outline",
  svgContent:
    '<circle cx="12" cy="13" r="8"/><path d="M12 9v4l2 2"/><path d="M5 3 2 6"/><path d="m22 6-3-3"/><path d="M6.38 18.7 4 21"/><path d="M17.64 18.67 20 21"/>',
});

export const alarmFilled = createIcon({
  name: "alarm-filled",
  category: "time",
  variant: "filled",
  svgContent: `<circle ${S} cx="12" cy="13" r="8"/><path ${S} d="M12 9v4l2 2"/><path ${S} d="M5 3 2 6"/><path ${S} d="m22 6-3-3"/><path ${S} d="M6.38 18.7 4 21"/><path ${S} d="M17.64 18.67 20 21"/>`,
});

export const calendarDays = createIcon({
  name: "calendar-days",
  category: "time",
  variant: "outline",
  svgContent:
    '<rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/>',
});

export const calendarDaysFilled = createIcon({
  name: "calendar-days-filled",
  category: "time",
  variant: "filled",
  svgContent: `<rect ${S} width="18" height="18" x="3" y="4" rx="2" ry="2"/><line ${S} x1="16" x2="16" y1="2" y2="6"/><line ${S} x1="8" x2="8" y1="2" y2="6"/><line ${S} x1="3" x2="21" y1="10" y2="10"/><path ${S} d="M8 14h.01"/><path ${S} d="M12 14h.01"/><path ${S} d="M16 14h.01"/><path ${S} d="M8 18h.01"/><path ${S} d="M12 18h.01"/><path ${S} d="M16 18h.01"/>`,
});
