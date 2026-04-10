import { describe, expect, test } from "vite-plus/test";
import {
  sharp,
  sharpFilled,
  flat,
  flatFilled,
  natural,
  naturalFilled,
  doubleSharp,
  doubleSharpFilled,
  doubleFlat,
  doubleFlatFilled,
} from "../../src/icons/accidentals/index.ts";

const outlineIcons = [
  { icon: sharp, name: "accidental-sharp" },
  { icon: flat, name: "accidental-flat" },
  { icon: natural, name: "accidental-natural" },
  { icon: doubleSharp, name: "accidental-double-sharp" },
  { icon: doubleFlat, name: "accidental-double-flat" },
];

const filledIcons = [
  { icon: sharpFilled, name: "accidental-sharp-filled" },
  { icon: flatFilled, name: "accidental-flat-filled" },
  { icon: naturalFilled, name: "accidental-natural-filled" },
  { icon: doubleSharpFilled, name: "accidental-double-sharp-filled" },
  { icon: doubleFlatFilled, name: "accidental-double-flat-filled" },
];

describe("accidental icons — outline", () => {
  test.each(outlineIcons)("$name has correct metadata", ({ icon, name }) => {
    expect(icon.iconName).toBe(name);
    expect(icon.category).toBe("accidental");
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

describe("accidental icons — filled", () => {
  test.each(filledIcons)("$name has correct metadata", ({ icon, name }) => {
    expect(icon.iconName).toBe(name);
    expect(icon.category).toBe("accidental");
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
