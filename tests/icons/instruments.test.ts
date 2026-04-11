import { describe, expect, test } from "vite-plus/test";
import {
  guitar,
  guitarFilled,
  piano,
  pianoFilled,
  violin,
  violinFilled,
  drum,
  drumFilled,
  trumpet,
  trumpetFilled,
  saxophone,
  saxophoneFilled,
  flute,
  fluteFilled,
  harp,
  harpFilled,
  drumKit,
  drumKitFilled,
  accordion,
  accordionFilled,
} from "../../src/icons/instruments/index.ts";

const outlineIcons = [
  { icon: guitar, name: "instrument-guitar" },
  { icon: piano, name: "instrument-piano" },
  { icon: violin, name: "instrument-violin" },
  { icon: drum, name: "instrument-drum" },
  { icon: trumpet, name: "instrument-trumpet" },
  { icon: saxophone, name: "instrument-saxophone" },
  { icon: flute, name: "instrument-flute" },
  { icon: harp, name: "instrument-harp" },
  { icon: drumKit, name: "instrument-drum-kit" },
  { icon: accordion, name: "instrument-accordion" },
];

const filledIcons = [
  { icon: guitarFilled, name: "instrument-guitar-filled" },
  { icon: pianoFilled, name: "instrument-piano-filled" },
  { icon: violinFilled, name: "instrument-violin-filled" },
  { icon: drumFilled, name: "instrument-drum-filled" },
  { icon: trumpetFilled, name: "instrument-trumpet-filled" },
  { icon: saxophoneFilled, name: "instrument-saxophone-filled" },
  { icon: fluteFilled, name: "instrument-flute-filled" },
  { icon: harpFilled, name: "instrument-harp-filled" },
  { icon: drumKitFilled, name: "instrument-drum-kit-filled" },
  { icon: accordionFilled, name: "instrument-accordion-filled" },
];

describe("instrument icons — outline", () => {
  test.each(outlineIcons)("$name has correct metadata", ({ icon, name }) => {
    expect(icon.iconName).toBe(name);
    expect(icon.category).toBe("instrument");
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

describe("instrument icons — filled", () => {
  test.each(filledIcons)("$name has correct metadata", ({ icon, name }) => {
    expect(icon.iconName).toBe(name);
    expect(icon.category).toBe("instrument");
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
