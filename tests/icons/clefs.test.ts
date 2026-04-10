import { describe, expect, test } from "vite-plus/test";
import {
  treble,
  trebleFilled,
  bass,
  bassFilled,
  alto,
  altoFilled,
  tenor,
  tenorFilled,
} from "../../src/icons/clefs/index.ts";

const outlineIcons = [
  { icon: treble, name: "clef-treble" },
  { icon: bass, name: "clef-bass" },
  { icon: alto, name: "clef-alto" },
  { icon: tenor, name: "clef-tenor" },
];

const filledIcons = [
  { icon: trebleFilled, name: "clef-treble-filled" },
  { icon: bassFilled, name: "clef-bass-filled" },
  { icon: altoFilled, name: "clef-alto-filled" },
  { icon: tenorFilled, name: "clef-tenor-filled" },
];

describe("clef icons — outline", () => {
  test.each(outlineIcons)("$name has correct metadata", ({ icon, name }) => {
    expect(icon.iconName).toBe(name);
    expect(icon.category).toBe("clef");
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

describe("clef icons — filled", () => {
  test.each(filledIcons)("$name has correct metadata", ({ icon, name }) => {
    expect(icon.iconName).toBe(name);
    expect(icon.category).toBe("clef");
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
