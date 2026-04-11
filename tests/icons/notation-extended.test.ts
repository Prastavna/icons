import { describe, expect, test } from "vite-plus/test";
import {
  breathMark,
  breathMarkFilled,
  caesura,
  caesuraFilled,
  glissando,
  glissandoFilled,
  arpeggio,
  arpeggioFilled,
  portamento,
  portamentoFilled,
  vibrato,
  vibratoFilled,
  harmonics,
  harmonicsFilled,
  snapPizzicato,
  snapPizzicatoFilled,
  bartokPizzicato,
  bartokPizzicatoFilled,
  colLegno,
  colLegnoFilled,
  sulPonticello,
  sulPonticelloFilled,
  trillExtended,
  trillExtendedFilled,
} from "../../src/icons/notation-extended/index.ts";

const outlineIcons = [
  { icon: breathMark, name: "notation-extended-breath-mark" },
  { icon: caesura, name: "notation-extended-caesura" },
  { icon: glissando, name: "notation-extended-glissando" },
  { icon: arpeggio, name: "notation-extended-arpeggio" },
  { icon: portamento, name: "notation-extended-portamento" },
  { icon: vibrato, name: "notation-extended-vibrato" },
  { icon: harmonics, name: "notation-extended-harmonics" },
  { icon: snapPizzicato, name: "notation-extended-snap-pizzicato" },
  { icon: bartokPizzicato, name: "notation-extended-bartok-pizzicato" },
  { icon: colLegno, name: "notation-extended-col-legno" },
  { icon: sulPonticello, name: "notation-extended-sul-ponticello" },
  { icon: trillExtended, name: "notation-extended-trill-extended" },
];

const filledIcons = [
  { icon: breathMarkFilled, name: "notation-extended-breath-mark-filled" },
  { icon: caesuraFilled, name: "notation-extended-caesura-filled" },
  { icon: glissandoFilled, name: "notation-extended-glissando-filled" },
  { icon: arpeggioFilled, name: "notation-extended-arpeggio-filled" },
  { icon: portamentoFilled, name: "notation-extended-portamento-filled" },
  { icon: vibratoFilled, name: "notation-extended-vibrato-filled" },
  { icon: harmonicsFilled, name: "notation-extended-harmonics-filled" },
  { icon: snapPizzicatoFilled, name: "notation-extended-snap-pizzicato-filled" },
  { icon: bartokPizzicatoFilled, name: "notation-extended-bartok-pizzicato-filled" },
  { icon: colLegnoFilled, name: "notation-extended-col-legno-filled" },
  { icon: sulPonticelloFilled, name: "notation-extended-sul-ponticello-filled" },
  { icon: trillExtendedFilled, name: "notation-extended-trill-extended-filled" },
];

describe("notation-extended icons — outline", () => {
  test.each(outlineIcons)("$name has correct metadata", ({ icon, name }) => {
    expect(icon.iconName).toBe(name);
    expect(icon.category).toBe("notation-extended");
    expect(icon.variant).toBe("outline");
    expect(icon.viewBox).toBe("0 0 24 24");
  });

  test.each(outlineIcons)("$name returns valid SVG", ({ icon }) => {
    const svg = icon();
    expect(svg).toMatch(/^<svg /);
    expect(svg).toMatch(/<\/svg>$/);
    expect(svg).toContain('stroke="currentColor"');
    expect(svg).toContain('fill="none"');
  });
});

describe("notation-extended icons — filled", () => {
  test.each(filledIcons)("$name has correct metadata", ({ icon, name }) => {
    expect(icon.iconName).toBe(name);
    expect(icon.category).toBe("notation-extended");
    expect(icon.variant).toBe("filled");
    expect(icon.viewBox).toBe("0 0 24 24");
  });

  test.each(filledIcons)("$name returns valid SVG", ({ icon }) => {
    const svg = icon();
    expect(svg).toMatch(/^<svg /);
    expect(svg).toMatch(/<\/svg>$/);
    expect(svg).toContain('fill="currentColor"');
    expect(svg).toContain('stroke="none"');
  });
});
