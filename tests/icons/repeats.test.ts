import { describe, expect, test } from "vite-plus/test";
import {
  bar,
  barFilled,
  sign,
  signFilled,
  segno,
  segnoFilled,
  coda,
  codaFilled,
  dalSegno,
  dalSegnoFilled,
  daCapo,
  daCapoFilled,
} from "../../src/icons/repeats/index.ts";

const outlineIcons = [
  { icon: bar, name: "repeat-bar" },
  { icon: sign, name: "repeat-sign" },
  { icon: segno, name: "repeat-segno" },
  { icon: coda, name: "repeat-coda" },
  { icon: dalSegno, name: "repeat-dal-segno" },
  { icon: daCapo, name: "repeat-da-capo" },
];

const filledIcons = [
  { icon: barFilled, name: "repeat-bar-filled" },
  { icon: signFilled, name: "repeat-sign-filled" },
  { icon: segnoFilled, name: "repeat-segno-filled" },
  { icon: codaFilled, name: "repeat-coda-filled" },
  { icon: dalSegnoFilled, name: "repeat-dal-segno-filled" },
  { icon: daCapoFilled, name: "repeat-da-capo-filled" },
];

describe("repeat icons — outline", () => {
  test.each(outlineIcons)("$name has correct metadata", ({ icon, name }) => {
    expect(icon.iconName).toBe(name);
    expect(icon.category).toBe("repeat");
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

describe("repeat icons — filled", () => {
  test.each(filledIcons)("$name has correct metadata", ({ icon, name }) => {
    expect(icon.iconName).toBe(name);
    expect(icon.category).toBe("repeat");
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
