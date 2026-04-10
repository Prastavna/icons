import { describe, expect, test } from "vite-plus/test";
import {
  single,
  singleFilled,
  double,
  doubleFilled,
  final,
  finalFilled,
  repeatStart,
  repeatStartFilled,
  repeatEnd,
  repeatEndFilled,
} from "../../src/icons/barlines/index.ts";

const outlineIcons = [
  { icon: single, name: "barline-single" },
  { icon: double, name: "barline-double" },
  { icon: final, name: "barline-final" },
  { icon: repeatStart, name: "barline-repeat-start" },
  { icon: repeatEnd, name: "barline-repeat-end" },
];

const filledIcons = [
  { icon: singleFilled, name: "barline-single-filled" },
  { icon: doubleFilled, name: "barline-double-filled" },
  { icon: finalFilled, name: "barline-final-filled" },
  { icon: repeatStartFilled, name: "barline-repeat-start-filled" },
  { icon: repeatEndFilled, name: "barline-repeat-end-filled" },
];

describe("barline icons — outline", () => {
  test.each(outlineIcons)("$name has correct metadata", ({ icon, name }) => {
    expect(icon.iconName).toBe(name);
    expect(icon.category).toBe("barline");
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

describe("barline icons — filled", () => {
  test.each(filledIcons)("$name has correct metadata", ({ icon, name }) => {
    expect(icon.iconName).toBe(name);
    expect(icon.category).toBe("barline");
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
