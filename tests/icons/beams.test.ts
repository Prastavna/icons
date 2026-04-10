import { describe, expect, test } from "vite-plus/test";
import {
  single,
  singleFilled,
  double,
  doubleFilled,
  triple,
  tripleFilled,
} from "../../src/icons/beams/index.ts";

const outlineIcons = [
  { icon: single, name: "beam-single" },
  { icon: double, name: "beam-double" },
  { icon: triple, name: "beam-triple" },
];

const filledIcons = [
  { icon: singleFilled, name: "beam-single-filled" },
  { icon: doubleFilled, name: "beam-double-filled" },
  { icon: tripleFilled, name: "beam-triple-filled" },
];

describe("beam icons — outline", () => {
  test.each(outlineIcons)("$name has correct metadata", ({ icon, name }) => {
    expect(icon.iconName).toBe(name);
    expect(icon.category).toBe("beam");
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

describe("beam icons — filled", () => {
  test.each(filledIcons)("$name has correct metadata", ({ icon, name }) => {
    expect(icon.iconName).toBe(name);
    expect(icon.category).toBe("beam");
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
