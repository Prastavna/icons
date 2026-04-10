import { createIcon } from "../../core/create-icon.ts";

export const metronome = createIcon({
  name: "misc-metronome",
  category: "misc",
  variant: "outline",
  svgContent:
    '<path d="M7 20 L10 4 L14 4 L17 20Z"/><line x1="12" y1="18" x2="16" y2="6"/><circle cx="16" cy="6" r="1.5"/>',
});

export const metronomeFilled = createIcon({
  name: "misc-metronome-filled",
  category: "misc",
  variant: "filled",
  svgContent:
    '<path d="M6 20 L10 3 L14 3 L18 20Z"/><path d="M11.5 17 L15.5 6 L17 6.5 L13 17.5Z"/><circle cx="16" cy="5.5" r="2"/>',
});

export const tuningFork = createIcon({
  name: "misc-tuning-fork",
  category: "misc",
  variant: "outline",
  svgContent:
    '<path d="M8 3 L8 12 C8 15, 12 15, 12 12"/><path d="M16 3 L16 12 C16 15, 12 15, 12 12"/><line x1="12" y1="12" x2="12" y2="21"/>',
});

export const tuningForkFilled = createIcon({
  name: "misc-tuning-fork-filled",
  category: "misc",
  variant: "filled",
  svgContent:
    '<path d="M7 3 L9 3 L9 12 C9 14, 11 14, 11 12 L11 21 L13 21 L13 12 C13 14, 15 14, 15 12 L15 3 L17 3 L17 12 C17 16, 13 17, 13 15 L13 21 L11 21 L11 15 C11 17, 7 16, 7 12Z"/>',
});

export const staff = createIcon({
  name: "misc-staff",
  category: "misc",
  variant: "outline",
  svgContent:
    '<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="9.5" x2="21" y2="9.5"/><line x1="3" y1="13" x2="21" y2="13"/><line x1="3" y1="16.5" x2="21" y2="16.5"/><line x1="3" y1="20" x2="21" y2="20"/>',
});

export const staffFilled = createIcon({
  name: "misc-staff-filled",
  category: "misc",
  variant: "filled",
  svgContent:
    '<rect x="3" y="5.5" width="18" height="1"/><rect x="3" y="9" width="18" height="1"/><rect x="3" y="12.5" width="18" height="1"/><rect x="3" y="16" width="18" height="1"/><rect x="3" y="19.5" width="18" height="1"/>',
});

export const ledgerLine = createIcon({
  name: "misc-ledger-line",
  category: "misc",
  variant: "outline",
  svgContent: '<line x1="6" y1="12" x2="18" y2="12"/>',
});

export const ledgerLineFilled = createIcon({
  name: "misc-ledger-line-filled",
  category: "misc",
  variant: "filled",
  svgContent: '<rect x="6" y="11" width="12" height="2"/>',
});

export const brace = createIcon({
  name: "misc-brace",
  category: "misc",
  variant: "outline",
  svgContent: '<path d="M16 3 C10 3, 14 10, 8 12 C14 14, 10 21, 16 21"/>',
});

export const braceFilled = createIcon({
  name: "misc-brace-filled",
  category: "misc",
  variant: "filled",
  svgContent:
    '<path d="M17 3 C10 3, 15 9, 8 11 L8 13 C15 15, 10 21, 17 21 L15 21 C10 21, 13 15, 7 12 C13 9, 10 3, 15 3Z"/>',
});

export const bracket = createIcon({
  name: "misc-bracket",
  category: "misc",
  variant: "outline",
  svgContent: '<polyline points="16,3 8,3 8,21 16,21"/>',
});

export const bracketFilled = createIcon({
  name: "misc-bracket-filled",
  category: "misc",
  variant: "filled",
  svgContent: '<path d="M16,2 L7,2 L7,22 L16,22 L16,20 L9,20 L9,4 L16,4Z"/>',
});
