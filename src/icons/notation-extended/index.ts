import { createIcon } from "../../core/create-icon.ts";

const S =
  'stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"';

export const breathMark = createIcon({
  name: "notation-extended-breath-mark",
  category: "notation-extended",
  variant: "outline",
  svgContent: '<path d="M14 6 Q16 4 15 8"/>',
});

export const breathMarkFilled = createIcon({
  name: "notation-extended-breath-mark-filled",
  category: "notation-extended",
  variant: "filled",
  svgContent: `<path ${S} d="M14 6 Q16 4 15 8"/>`,
});

export const caesura = createIcon({
  name: "notation-extended-caesura",
  category: "notation-extended",
  variant: "outline",
  svgContent: '<line x1="9" y1="5" x2="7" y2="19"/><line x1="15" y1="5" x2="13" y2="19"/>',
});

export const caesuraFilled = createIcon({
  name: "notation-extended-caesura-filled",
  category: "notation-extended",
  variant: "filled",
  svgContent: `<line ${S} x1="9" y1="5" x2="7" y2="19"/><line ${S} x1="15" y1="5" x2="13" y2="19"/>`,
});

export const glissando = createIcon({
  name: "notation-extended-glissando",
  category: "notation-extended",
  variant: "outline",
  svgContent: '<path d="M4 18 C8 14 12 10 20 6"/>',
});

export const glissandoFilled = createIcon({
  name: "notation-extended-glissando-filled",
  category: "notation-extended",
  variant: "filled",
  svgContent: `<path ${S} d="M4 18 C8 14 12 10 20 6"/>`,
});

export const arpeggio = createIcon({
  name: "notation-extended-arpeggio",
  category: "notation-extended",
  variant: "outline",
  svgContent: '<path d="M12 4 C10 7 14 10 10 13 C14 16 10 18 12 20"/>',
});

export const arpeggioFilled = createIcon({
  name: "notation-extended-arpeggio-filled",
  category: "notation-extended",
  variant: "filled",
  svgContent: `<path ${S} d="M12 4 C10 7 14 10 10 13 C14 16 10 18 12 20"/>`,
});

export const portamento = createIcon({
  name: "notation-extended-portamento",
  category: "notation-extended",
  variant: "outline",
  svgContent: '<path d="M5 16 Q12 8 19 12"/>',
});

export const portamentoFilled = createIcon({
  name: "notation-extended-portamento-filled",
  category: "notation-extended",
  variant: "filled",
  svgContent: `<path ${S} d="M5 16 Q12 8 19 12"/>`,
});

export const vibrato = createIcon({
  name: "notation-extended-vibrato",
  category: "notation-extended",
  variant: "outline",
  svgContent: '<path d="M3 12 Q5 9 7 12 Q9 15 11 12 Q13 9 15 12 Q17 15 19 12 Q21 9 23 12"/>',
});

export const vibratoFilled = createIcon({
  name: "notation-extended-vibrato-filled",
  category: "notation-extended",
  variant: "filled",
  svgContent: `<path ${S} d="M3 12 Q5 9 7 12 Q9 15 11 12 Q13 9 15 12 Q17 15 19 12 Q21 9 23 12"/>`,
});

export const harmonics = createIcon({
  name: "notation-extended-harmonics",
  category: "notation-extended",
  variant: "outline",
  svgContent: '<path d="M12 4 L18 12 L12 20 L6 12 Z"/>',
});

export const harmonicsFilled = createIcon({
  name: "notation-extended-harmonics-filled",
  category: "notation-extended",
  variant: "filled",
  svgContent: '<path d="M12 6 L16 12 L12 18 L8 12 Z"/>',
});

export const snapPizzicato = createIcon({
  name: "notation-extended-snap-pizzicato",
  category: "notation-extended",
  variant: "outline",
  svgContent: '<circle cx="12" cy="12" r="6"/><line x1="12" y1="6" x2="12" y2="2"/>',
});

export const snapPizzicatoFilled = createIcon({
  name: "notation-extended-snap-pizzicato-filled",
  category: "notation-extended",
  variant: "filled",
  svgContent: '<circle cx="12" cy="12" r="6"/><line x1="12" y1="6" x2="12" y2="2"/>',
});

export const bartokPizzicato = createIcon({
  name: "notation-extended-bartok-pizzicato",
  category: "notation-extended",
  variant: "outline",
  svgContent:
    '<line x1="12" y1="4" x2="12" y2="12"/><line x1="8" y1="8" x2="16" y2="8"/><ellipse cx="12" cy="17" rx="4" ry="3" transform="rotate(-15 12 17)"/>',
});

export const bartokPizzicatoFilled = createIcon({
  name: "notation-extended-bartok-pizzicato-filled",
  category: "notation-extended",
  variant: "filled",
  svgContent: `<line ${S} x1="12" y1="4" x2="12" y2="12"/><line ${S} x1="8" y1="8" x2="16" y2="8"/><ellipse cx="12" cy="17" rx="4" ry="3" transform="rotate(-15 12 17)"/>`,
});

export const colLegno = createIcon({
  name: "notation-extended-col-legno",
  category: "notation-extended",
  variant: "outline",
  svgContent:
    '<path d="M5 8 L7 14 L9 8"/><line x1="12" y1="8" x2="12" y2="14"/><path d="M12 11 L14 8 L16 11 L14 14"/>',
});

export const colLegnoFilled = createIcon({
  name: "notation-extended-col-legno-filled",
  category: "notation-extended",
  variant: "filled",
  svgContent: `<path ${S} d="M5 8 L7 14 L9 8"/><line ${S} x1="12" y1="8" x2="12" y2="14"/><path ${S} d="M12 11 L14 8 L16 11 L14 14"/>`,
});

export const sulPonticello = createIcon({
  name: "notation-extended-sul-ponticello",
  category: "notation-extended",
  variant: "outline",
  svgContent:
    '<path d="M6 8 Q9 6 12 8 Q9 10 12 12"/><line x1="14" y1="8" x2="16" y2="12"/><line x1="14" y1="12" x2="16" y2="12"/>',
});

export const sulPonticelloFilled = createIcon({
  name: "notation-extended-sul-ponticello-filled",
  category: "notation-extended",
  variant: "filled",
  svgContent: `<path ${S} d="M6 8 Q9 6 12 8 Q9 10 12 12"/><line ${S} x1="14" y1="8" x2="16" y2="12"/><line ${S} x1="14" y1="12" x2="16" y2="12"/>`,
});

export const trillExtended = createIcon({
  name: "notation-extended-trill-extended",
  category: "notation-extended",
  variant: "outline",
  svgContent:
    '<path d="M4 10 C5 7 7 7 7 10 C7 13 5 13 5 10"/><line x1="7" y1="8" x2="9" y2="8"/><path d="M9 10 Q11 8 13 10 Q15 12 17 10 Q19 8 21 10"/>',
});

export const trillExtendedFilled = createIcon({
  name: "notation-extended-trill-extended-filled",
  category: "notation-extended",
  variant: "filled",
  svgContent: `<path ${S} d="M4 10 C5 7 7 7 7 10 C7 13 5 13 5 10"/><line ${S} x1="7" y1="8" x2="9" y2="8"/><path ${S} d="M9 10 Q11 8 13 10 Q15 12 17 10 Q19 8 21 10"/>`,
});
