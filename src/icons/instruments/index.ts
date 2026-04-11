import { createIcon } from "../../core/create-icon.ts";

const S =
  'stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"';

export const guitar = createIcon({
  name: "instrument-guitar",
  category: "instrument",
  variant: "outline",
  svgContent:
    '<ellipse cx="12" cy="16" rx="5" ry="6"/><rect x="10.5" y="4" width="3" height="10" rx="1"/><rect x="9" y="2" width="6" height="3" rx="1"/><line x1="10" y1="16" x2="10" y2="18"/><line x1="12" y1="16" x2="12" y2="19"/><line x1="14" y1="16" x2="14" y2="18"/><circle cx="12" cy="16" r="1.5"/>',
});

export const guitarFilled = createIcon({
  name: "instrument-guitar-filled",
  category: "instrument",
  variant: "filled",
  svgContent: `<ellipse ${S} cx="12" cy="16" rx="5" ry="6"/><rect ${S} x="10.5" y="4" width="3" height="10" rx="1"/><rect ${S} x="9" y="2" width="6" height="3" rx="1"/><line ${S} x1="10" y1="16" x2="10" y2="18"/><line ${S} x1="12" y1="16" x2="12" y2="19"/><line ${S} x1="14" y1="16" x2="14" y2="18"/><circle cx="12" cy="16" r="1.5"/>`,
});

export const piano = createIcon({
  name: "instrument-piano",
  category: "instrument",
  variant: "outline",
  svgContent:
    '<rect x="2" y="6" width="20" height="14" rx="1"/><rect x="5" y="6" width="3" height="8" rx="1" fill="currentColor" stroke="none"/><rect x="10" y="6" width="3" height="8" rx="1" fill="currentColor" stroke="none"/><rect x="16" y="6" width="3" height="8" rx="1" fill="currentColor" stroke="none"/><line x1="7" y1="14" x2="7" y2="20"/><line x1="12" y1="14" x2="12" y2="20"/><line x1="17" y1="14" x2="17" y2="20"/>',
});

export const pianoFilled = createIcon({
  name: "instrument-piano-filled",
  category: "instrument",
  variant: "filled",
  svgContent:
    '<rect x="2" y="6" width="20" height="14" rx="1"/><rect x="5" y="6" width="3" height="8" rx="1" fill="currentColor" stroke="none"/><rect x="10" y="6" width="3" height="8" rx="1" fill="currentColor" stroke="none"/><rect x="16" y="6" width="3" height="8" rx="1" fill="currentColor" stroke="none"/><line x1="7" y1="14" x2="7" y2="20"/><line x1="12" y1="14" x2="12" y2="20"/><line x1="17" y1="14" x2="17" y2="20"/>',
});

export const violin = createIcon({
  name: "instrument-violin",
  category: "instrument",
  variant: "outline",
  svgContent:
    '<path d="M12 2 C10 2 8 4 9 7 C8 8 6 9 6 12 C6 15 8 18 10 19 L12 22 L14 19 C16 18 18 15 18 12 C18 9 16 8 15 7 C16 4 14 2 12 2Z"/><path d="M9 11 Q8 12 9 13"/><path d="M15 11 Q16 12 15 13"/><line x1="12" y1="2" x2="12" y2="4"/>',
});

export const violinFilled = createIcon({
  name: "instrument-violin-filled",
  category: "instrument",
  variant: "filled",
  svgContent: `<path ${S} d="M12 2 C10 2 8 4 9 7 C8 8 6 9 6 12 C6 15 8 18 10 19 L12 22 L14 19 C16 18 18 15 18 12 C18 9 16 8 15 7 C16 4 14 2 12 2Z"/><path ${S} d="M9 11 Q8 12 9 13"/><path ${S} d="M15 11 Q16 12 15 13"/><line ${S} x1="12" y1="2" x2="12" y2="4"/>`,
});

export const drum = createIcon({
  name: "instrument-drum",
  category: "instrument",
  variant: "outline",
  svgContent:
    '<ellipse cx="12" cy="14" rx="9" ry="5"/><line x1="3" y1="14" x2="3" y2="10"/><line x1="21" y1="14" x2="21" y2="10"/><ellipse cx="12" cy="10" rx="9" ry="5"/><line x1="8" y1="4" x2="12" y2="9"/><line x1="16" y1="4" x2="12" y2="9"/>',
});

export const drumFilled = createIcon({
  name: "instrument-drum-filled",
  category: "instrument",
  variant: "filled",
  svgContent: `<ellipse ${S} cx="12" cy="14" rx="9" ry="5"/><line ${S} x1="3" y1="14" x2="3" y2="10"/><line ${S} x1="21" y1="14" x2="21" y2="10"/><ellipse ${S} cx="12" cy="10" rx="9" ry="5"/><line ${S} x1="8" y1="4" x2="12" y2="9"/><line ${S} x1="16" y1="4" x2="12" y2="9"/>`,
});

export const trumpet = createIcon({
  name: "instrument-trumpet",
  category: "instrument",
  variant: "outline",
  svgContent:
    '<path d="M2 12 L10 12"/><circle cx="10" cy="10" r="1.5"/><circle cx="13" cy="10" r="1.5"/><circle cx="16" cy="10" r="1.5"/><path d="M10 8 L10 6 L16 6 L16 8"/><path d="M16 12 L19 12 Q22 12 22 15 Q22 18 19 18 L15 18"/><path d="M10 12 L10 14 L15 18"/>',
});

export const trumpetFilled = createIcon({
  name: "instrument-trumpet-filled",
  category: "instrument",
  variant: "filled",
  svgContent: `<path ${S} d="M2 12 L10 12"/><circle ${S} cx="10" cy="10" r="1.5"/><circle ${S} cx="13" cy="10" r="1.5"/><circle ${S} cx="16" cy="10" r="1.5"/><path ${S} d="M10 8 L10 6 L16 6 L16 8"/><path ${S} d="M16 12 L19 12 Q22 12 22 15 Q22 18 19 18 L15 18"/><path ${S} d="M10 12 L10 14 L15 18"/>`,
});

export const saxophone = createIcon({
  name: "instrument-saxophone",
  category: "instrument",
  variant: "outline",
  svgContent:
    '<path d="M13 3 L15 3 Q17 3 17 5 L17 15 Q17 20 12 20 Q7 20 7 15 Q7 12 10 11"/><path d="M10 11 L10 5 Q10 3 12 3 L13 3"/><path d="M7 16 Q5 18 5 20 L8 20"/><circle cx="14" cy="8" r="1"/><circle cx="14" cy="11" r="1"/><circle cx="14" cy="14" r="1"/>',
});

export const saxophoneFilled = createIcon({
  name: "instrument-saxophone-filled",
  category: "instrument",
  variant: "filled",
  svgContent: `<path ${S} d="M13 3 L15 3 Q17 3 17 5 L17 15 Q17 20 12 20 Q7 20 7 15 Q7 12 10 11"/><path ${S} d="M10 11 L10 5 Q10 3 12 3 L13 3"/><path ${S} d="M7 16 Q5 18 5 20 L8 20"/><circle cx="14" cy="8" r="1"/><circle cx="14" cy="11" r="1"/><circle cx="14" cy="14" r="1"/>`,
});

export const flute = createIcon({
  name: "instrument-flute",
  category: "instrument",
  variant: "outline",
  svgContent:
    '<line x1="2" y1="12" x2="22" y2="12"/><circle cx="6" cy="12" r="1.5"/><circle cx="10" cy="12" r="1.5"/><circle cx="14" cy="12" r="1.5"/><circle cx="18" cy="12" r="1.5"/><path d="M2 10 L2 14 Q3 15 4 14 L4 10 Q3 9 2 10Z"/>',
});

export const fluteFilled = createIcon({
  name: "instrument-flute-filled",
  category: "instrument",
  variant: "filled",
  svgContent: `<line ${S} x1="2" y1="12" x2="22" y2="12"/><circle cx="6" cy="12" r="1.5"/><circle cx="10" cy="12" r="1.5"/><circle cx="14" cy="12" r="1.5"/><circle cx="18" cy="12" r="1.5"/><path d="M2 10 L2 14 Q3 15 4 14 L4 10 Q3 9 2 10Z"/>`,
});

export const harp = createIcon({
  name: "instrument-harp",
  category: "instrument",
  variant: "outline",
  svgContent:
    '<path d="M5 20 L5 6 Q5 2 10 2 Q16 2 18 8"/><line x1="5" y1="20" x2="18" y2="20"/><line x1="18" y1="8" x2="18" y2="20"/><line x1="8" y1="5" x2="8" y2="20"/><line x1="11" y1="3" x2="11" y2="20"/><line x1="14" y1="4" x2="14" y2="20"/><line x1="17" y1="7" x2="17" y2="20"/>',
});

export const harpFilled = createIcon({
  name: "instrument-harp-filled",
  category: "instrument",
  variant: "filled",
  svgContent: `<path ${S} d="M5 20 L5 6 Q5 2 10 2 Q16 2 18 8"/><line ${S} x1="5" y1="20" x2="18" y2="20"/><line ${S} x1="18" y1="8" x2="18" y2="20"/><line ${S} x1="8" y1="5" x2="8" y2="20"/><line ${S} x1="11" y1="3" x2="11" y2="20"/><line ${S} x1="14" y1="4" x2="14" y2="20"/><line ${S} x1="17" y1="7" x2="17" y2="20"/>`,
});

export const drumKit = createIcon({
  name: "instrument-drum-kit",
  category: "instrument",
  variant: "outline",
  svgContent:
    '<ellipse cx="9" cy="13" rx="5" ry="3"/><line x1="4" y1="13" x2="4" y2="10"/><line x1="14" y1="13" x2="14" y2="10"/><ellipse cx="9" cy="10" rx="5" ry="3"/><ellipse cx="18" cy="16" rx="3" ry="2"/><line x1="15" y1="16" x2="15" y2="14"/><line x1="21" y1="16" x2="21" y2="14"/><ellipse cx="18" cy="14" rx="3" ry="2"/><line x1="9" y1="7" x2="7" y2="3"/><line x1="9" y1="7" x2="11" y2="3"/>',
});

export const drumKitFilled = createIcon({
  name: "instrument-drum-kit-filled",
  category: "instrument",
  variant: "filled",
  svgContent: `<ellipse ${S} cx="9" cy="13" rx="5" ry="3"/><line ${S} x1="4" y1="13" x2="4" y2="10"/><line ${S} x1="14" y1="13" x2="14" y2="10"/><ellipse ${S} cx="9" cy="10" rx="5" ry="3"/><ellipse ${S} cx="18" cy="16" rx="3" ry="2"/><line ${S} x1="15" y1="16" x2="15" y2="14"/><line ${S} x1="21" y1="16" x2="21" y2="14"/><ellipse ${S} cx="18" cy="14" rx="3" ry="2"/><line ${S} x1="9" y1="7" x2="7" y2="3"/><line ${S} x1="9" y1="7" x2="11" y2="3"/>`,
});

export const accordion = createIcon({
  name: "instrument-accordion",
  category: "instrument",
  variant: "outline",
  svgContent:
    '<rect x="2" y="4" width="6" height="16" rx="1"/><rect x="16" y="4" width="6" height="16" rx="1"/><path d="M8 6 L16 6"/><path d="M8 9 L16 9"/><path d="M8 12 L16 12"/><path d="M8 15 L16 15"/><path d="M8 18 L16 18"/><circle cx="5" cy="8" r="1"/><circle cx="5" cy="12" r="1"/><circle cx="5" cy="16" r="1"/><circle cx="19" cy="8" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="19" cy="16" r="1"/>',
});

export const accordionFilled = createIcon({
  name: "instrument-accordion-filled",
  category: "instrument",
  variant: "filled",
  svgContent: `<rect ${S} x="2" y="4" width="6" height="16" rx="1"/><rect ${S} x="16" y="4" width="6" height="16" rx="1"/><path ${S} d="M8 6 L16 6"/><path ${S} d="M8 9 L16 9"/><path ${S} d="M8 12 L16 12"/><path ${S} d="M8 15 L16 15"/><path ${S} d="M8 18 L16 18"/><circle cx="5" cy="8" r="1"/><circle cx="5" cy="12" r="1"/><circle cx="5" cy="16" r="1"/><circle cx="19" cy="8" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="19" cy="16" r="1"/>`,
});
