// SVG paths sourced from Lucide (https://lucide.dev) — MIT License
import { createIcon } from "../../core/create-icon.ts";

const S =
  'stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"';

export const link = createIcon({
  name: "link",
  category: "social",
  variant: "outline",
  svgContent:
    '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',
});

export const linkFilled = createIcon({
  name: "link-filled",
  category: "social",
  variant: "filled",
  svgContent: `<path ${S} d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path ${S} d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>`,
});

export const link2 = createIcon({
  name: "link2",
  category: "social",
  variant: "outline",
  svgContent:
    '<path d="M9 17H7A5 5 0 0 1 7 7h2"/><path d="M15 7h2a5 5 0 1 1 0 10h-2"/><line x1="8" x2="16" y1="12" y2="12"/>',
});

export const link2Filled = createIcon({
  name: "link2-filled",
  category: "social",
  variant: "filled",
  svgContent: `<path ${S} d="M9 17H7A5 5 0 0 1 7 7h2"/><path ${S} d="M15 7h2a5 5 0 1 1 0 10h-2"/><line ${S} x1="8" x2="16" y1="12" y2="12"/>`,
});

export const rss = createIcon({
  name: "rss",
  category: "social",
  variant: "outline",
  svgContent:
    '<path d="M4 11a9 9 0 0 1 9 9"/><path d="M4 4a16 16 0 0 1 16 16"/><circle cx="5" cy="19" r="1"/>',
});

export const rssFilled = createIcon({
  name: "rss-filled",
  category: "social",
  variant: "filled",
  svgContent: `<path ${S} d="M4 11a9 9 0 0 1 9 9"/><path ${S} d="M4 4a16 16 0 0 1 16 16"/><circle ${S} cx="5" cy="19" r="1"/>`,
});

export const qrCode = createIcon({
  name: "qr-code",
  category: "social",
  variant: "outline",
  svgContent:
    '<rect width="5" height="5" x="3" y="3" rx="1"/><rect width="5" height="5" x="16" y="3" rx="1"/><rect width="5" height="5" x="3" y="16" rx="1"/><path d="M21 16h-3a2 2 0 0 0-2 2v3"/><path d="M21 21v.01"/><path d="M12 7v3a2 2 0 0 1-2 2H7"/><path d="M3 12h.01"/><path d="M12 3h.01"/><path d="M12 16v.01"/><path d="M16 12h1"/><path d="M21 12v.01"/>',
});

export const qrCodeFilled = createIcon({
  name: "qr-code-filled",
  category: "social",
  variant: "filled",
  svgContent: `<rect ${S} width="5" height="5" x="3" y="3" rx="1"/><rect ${S} width="5" height="5" x="16" y="3" rx="1"/><rect ${S} width="5" height="5" x="3" y="16" rx="1"/><path ${S} d="M21 16h-3a2 2 0 0 0-2 2v3"/><path ${S} d="M21 21v.01"/><path ${S} d="M12 7v3a2 2 0 0 1-2 2H7"/><path ${S} d="M3 12h.01"/><path ${S} d="M12 3h.01"/><path ${S} d="M12 16v.01"/><path ${S} d="M16 12h1"/><path ${S} d="M21 12v.01"/>`,
});

export const share2 = createIcon({
  name: "share2",
  category: "social",
  variant: "outline",
  svgContent:
    '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/>',
});

export const share2Filled = createIcon({
  name: "share2-filled",
  category: "social",
  variant: "filled",
  svgContent: `<circle ${S} cx="18" cy="5" r="3"/><circle ${S} cx="6" cy="12" r="3"/><circle ${S} cx="18" cy="19" r="3"/><line ${S} x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line ${S} x1="15.41" x2="8.59" y1="6.51" y2="10.49"/>`,
});

export const thumbsUp = createIcon({
  name: "thumbs-up",
  category: "social",
  variant: "outline",
  svgContent:
    '<path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"/>',
});

export const thumbsUpFilled = createIcon({
  name: "thumbs-up-filled",
  category: "social",
  variant: "filled",
  svgContent: `<path ${S} d="M7 10v12"/><path ${S} d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"/>`,
});

export const thumbsDown = createIcon({
  name: "thumbs-down",
  category: "social",
  variant: "outline",
  svgContent:
    '<path d="M17 14V2"/><path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z"/>',
});

export const thumbsDownFilled = createIcon({
  name: "thumbs-down-filled",
  category: "social",
  variant: "filled",
  svgContent: `<path ${S} d="M17 14V2"/><path ${S} d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z"/>`,
});
