// SVG paths sourced from Lucide (https://lucide.dev) — MIT License
import { createIcon } from "../../core/create-icon.ts";

const S =
  'stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"';

export const settings = createIcon({
  name: "settings",
  category: "ui",
  variant: "outline",
  svgContent:
    '<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>',
});

export const settingsFilled = createIcon({
  name: "settings-filled",
  category: "ui",
  variant: "filled",
  svgContent: `<path ${S} d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle ${S} cx="12" cy="12" r="3"/>`,
});

export const eye = createIcon({
  name: "eye",
  category: "ui",
  variant: "outline",
  svgContent:
    '<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
});

export const eyeFilled = createIcon({
  name: "eye-filled",
  category: "ui",
  variant: "filled",
  svgContent: `<path ${S} d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle ${S} cx="12" cy="12" r="3"/>`,
});

export const eyeOff = createIcon({
  name: "eye-off",
  category: "ui",
  variant: "outline",
  svgContent:
    '<path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" x2="22" y1="2" y2="22"/>',
});

export const eyeOffFilled = createIcon({
  name: "eye-off-filled",
  category: "ui",
  variant: "filled",
  svgContent: `<path ${S} d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path ${S} d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path ${S} d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line ${S} x1="2" x2="22" y1="2" y2="22"/>`,
});

export const lock = createIcon({
  name: "lock",
  category: "ui",
  variant: "outline",
  svgContent:
    '<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
});

export const lockFilled = createIcon({
  name: "lock-filled",
  category: "ui",
  variant: "filled",
  svgContent: `<rect ${S} width="18" height="11" x="3" y="11" rx="2" ry="2"/><path ${S} d="M7 11V7a5 5 0 0 1 10 0v4"/>`,
});

export const unlock = createIcon({
  name: "unlock",
  category: "ui",
  variant: "outline",
  svgContent:
    '<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/>',
});

export const unlockFilled = createIcon({
  name: "unlock-filled",
  category: "ui",
  variant: "filled",
  svgContent: `<rect ${S} width="18" height="11" x="3" y="11" rx="2" ry="2"/><path ${S} d="M7 11V7a5 5 0 0 1 9.9-1"/>`,
});

export const star = createIcon({
  name: "star",
  category: "ui",
  variant: "outline",
  svgContent:
    '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
});

export const starFilled = createIcon({
  name: "star-filled",
  category: "ui",
  variant: "filled",
  svgContent: `<polygon ${S} points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>`,
});

export const heart = createIcon({
  name: "heart",
  category: "ui",
  variant: "outline",
  svgContent:
    '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
});

export const heartFilled = createIcon({
  name: "heart-filled",
  category: "ui",
  variant: "filled",
  svgContent: `<path ${S} d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>`,
});

export const bookmark = createIcon({
  name: "bookmark",
  category: "ui",
  variant: "outline",
  svgContent: '<path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/>',
});

export const bookmarkFilled = createIcon({
  name: "bookmark-filled",
  category: "ui",
  variant: "filled",
  svgContent: `<path ${S} d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/>`,
});

export const flag = createIcon({
  name: "flag",
  category: "ui",
  variant: "outline",
  svgContent:
    '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" x2="4" y1="22" y2="15"/>',
});

export const flagFilled = createIcon({
  name: "flag-filled",
  category: "ui",
  variant: "filled",
  svgContent: `<path ${S} d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line ${S} x1="4" x2="4" y1="22" y2="15"/>`,
});

export const tag = createIcon({
  name: "tag",
  category: "ui",
  variant: "outline",
  svgContent:
    '<path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 1 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42l-8.704-8.704z"/><circle cx="7.5" cy="7.5" r=".5"/>',
});

export const tagFilled = createIcon({
  name: "tag-filled",
  category: "ui",
  variant: "filled",
  svgContent: `<path ${S} d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 1 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42l-8.704-8.704z"/><circle ${S} cx="7.5" cy="7.5" r=".5"/>`,
});

export const badge = createIcon({
  name: "badge",
  category: "ui",
  variant: "outline",
  svgContent:
    '<path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/>',
});

export const badgeFilled = createIcon({
  name: "badge-filled",
  category: "ui",
  variant: "filled",
  svgContent: `<path ${S} d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/>`,
});

export const circle = createIcon({
  name: "circle",
  category: "ui",
  variant: "outline",
  svgContent: '<circle cx="12" cy="12" r="10"/>',
});

export const circleFilled = createIcon({
  name: "circle-filled",
  category: "ui",
  variant: "filled",
  svgContent: `<circle ${S} cx="12" cy="12" r="10"/>`,
});

export const slash = createIcon({
  name: "slash",
  category: "ui",
  variant: "outline",
  svgContent: '<line x1="22" x2="2" y1="2" y2="22"/>',
});

export const slashFilled = createIcon({
  name: "slash-filled",
  category: "ui",
  variant: "filled",
  svgContent: `<line ${S} x1="22" x2="2" y1="2" y2="22"/>`,
});

export const info = createIcon({
  name: "info",
  category: "ui",
  variant: "outline",
  svgContent: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',
});

export const infoFilled = createIcon({
  name: "info-filled",
  category: "ui",
  variant: "filled",
  svgContent: `<circle ${S} cx="12" cy="12" r="10"/><path ${S} d="M12 16v-4"/><path ${S} d="M12 8h.01"/>`,
});

export const alertTriangle = createIcon({
  name: "alert-triangle",
  category: "ui",
  variant: "outline",
  svgContent:
    '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3z"/><path d="M12 9v4"/><path d="M12 17h.01"/>',
});

export const alertTriangleFilled = createIcon({
  name: "alert-triangle-filled",
  category: "ui",
  variant: "filled",
  svgContent: `<path ${S} d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3z"/><path ${S} d="M12 9v4"/><path ${S} d="M12 17h.01"/>`,
});

export const helpCircle = createIcon({
  name: "help-circle",
  category: "ui",
  variant: "outline",
  svgContent:
    '<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/>',
});

export const helpCircleFilled = createIcon({
  name: "help-circle-filled",
  category: "ui",
  variant: "filled",
  svgContent: `<circle ${S} cx="12" cy="12" r="10"/><path ${S} d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path ${S} d="M12 17h.01"/>`,
});

export const loader = createIcon({
  name: "loader",
  category: "ui",
  variant: "outline",
  svgContent:
    '<line x1="12" x2="12" y1="2" y2="6"/><line x1="12" x2="12" y1="18" y2="22"/><line x1="4.93" x2="7.76" y1="4.93" y2="7.76"/><line x1="16.24" x2="19.07" y1="16.24" y2="19.07"/><line x1="2" x2="6" y1="12" y2="12"/><line x1="18" x2="22" y1="12" y2="12"/><line x1="4.93" x2="7.76" y1="19.07" y2="16.24"/><line x1="16.24" x2="19.07" y1="7.76" y2="4.93"/>',
});

export const loaderFilled = createIcon({
  name: "loader-filled",
  category: "ui",
  variant: "filled",
  svgContent: `<line ${S} x1="12" x2="12" y1="2" y2="6"/><line ${S} x1="12" x2="12" y1="18" y2="22"/><line ${S} x1="4.93" x2="7.76" y1="4.93" y2="7.76"/><line ${S} x1="16.24" x2="19.07" y1="16.24" y2="19.07"/><line ${S} x1="2" x2="6" y1="12" y2="12"/><line ${S} x1="18" x2="22" y1="12" y2="12"/><line ${S} x1="4.93" x2="7.76" y1="19.07" y2="16.24"/><line ${S} x1="16.24" x2="19.07" y1="7.76" y2="4.93"/>`,
});
