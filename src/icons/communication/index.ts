// SVG paths sourced from Lucide (https://lucide.dev) — MIT License
import { createIcon } from "../../core/create-icon.ts";

const S =
  'stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"';

export const mail = createIcon({
  name: "mail",
  category: "communication",
  variant: "outline",
  svgContent:
    '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
});

export const mailFilled = createIcon({
  name: "mail-filled",
  category: "communication",
  variant: "filled",
  svgContent: `<rect ${S} width="20" height="16" x="2" y="4" rx="2"/><path ${S} d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>`,
});

export const bell = createIcon({
  name: "bell",
  category: "communication",
  variant: "outline",
  svgContent:
    '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
});

export const bellFilled = createIcon({
  name: "bell-filled",
  category: "communication",
  variant: "filled",
  svgContent: `<path ${S} d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path ${S} d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>`,
});

export const bellOff = createIcon({
  name: "bell-off",
  category: "communication",
  variant: "outline",
  svgContent:
    '<path d="M8.7 3A6 6 0 0 1 18 8a21.3 21.3 0 0 1 .6 5"/><path d="M17 17H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/><line x1="2" x2="22" y1="2" y2="22"/>',
});

export const bellOffFilled = createIcon({
  name: "bell-off-filled",
  category: "communication",
  variant: "filled",
  svgContent: `<path ${S} d="M8.7 3A6 6 0 0 1 18 8a21.3 21.3 0 0 1 .6 5"/><path ${S} d="M17 17H3s3-2 3-9"/><path ${S} d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/><line ${S} x1="2" x2="22" y1="2" y2="22"/>`,
});

export const user = createIcon({
  name: "user",
  category: "communication",
  variant: "outline",
  svgContent: '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
});

export const userFilled = createIcon({
  name: "user-filled",
  category: "communication",
  variant: "filled",
  svgContent: `<path ${S} d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle ${S} cx="12" cy="7" r="4"/>`,
});

export const users = createIcon({
  name: "users",
  category: "communication",
  variant: "outline",
  svgContent:
    '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
});

export const usersFilled = createIcon({
  name: "users-filled",
  category: "communication",
  variant: "filled",
  svgContent: `<path ${S} d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle ${S} cx="9" cy="7" r="4"/><path ${S} d="M22 21v-2a4 4 0 0 0-3-3.87"/><path ${S} d="M16 3.13a4 4 0 0 1 0 7.75"/>`,
});

export const phone = createIcon({
  name: "phone",
  category: "communication",
  variant: "outline",
  svgContent:
    '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.99 15.29a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.92 5.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 12.14a16 16 0 0 0 5.77 5.77l1.09-1.09a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
});

export const phoneFilled = createIcon({
  name: "phone-filled",
  category: "communication",
  variant: "filled",
  svgContent: `<path ${S} d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.99 15.29a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.92 5.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 12.14a16 16 0 0 0 5.77 5.77l1.09-1.09a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>`,
});

export const messageCircle = createIcon({
  name: "message-circle",
  category: "communication",
  variant: "outline",
  svgContent: '<path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/>',
});

export const messageCircleFilled = createIcon({
  name: "message-circle-filled",
  category: "communication",
  variant: "filled",
  svgContent: `<path ${S} d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/>`,
});

export const messageSquare = createIcon({
  name: "message-square",
  category: "communication",
  variant: "outline",
  svgContent: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
});

export const messageSquareFilled = createIcon({
  name: "message-square-filled",
  category: "communication",
  variant: "filled",
  svgContent: `<path ${S} d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>`,
});

export const inbox = createIcon({
  name: "inbox",
  category: "communication",
  variant: "outline",
  svgContent:
    '<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>',
});

export const inboxFilled = createIcon({
  name: "inbox-filled",
  category: "communication",
  variant: "filled",
  svgContent: `<polyline ${S} points="22 12 16 12 14 15 10 15 8 12 2 12"/><path ${S} d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>`,
});

export const atSign = createIcon({
  name: "at-sign",
  category: "communication",
  variant: "outline",
  svgContent:
    '<circle cx="12" cy="12" r="4"/><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"/>',
});

export const atSignFilled = createIcon({
  name: "at-sign-filled",
  category: "communication",
  variant: "filled",
  svgContent: `<circle ${S} cx="12" cy="12" r="4"/><path ${S} d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"/>`,
});
