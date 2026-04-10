import { describe, expect, test } from "vite-plus/test";
import {
  staccato,
  staccatoFilled,
  accent,
  accentFilled,
  tenuto,
  tenutoFilled,
  fermata,
  fermataFilled,
  marcato,
  marcatoFilled,
  staccatissimo,
  staccatissimoFilled,
} from "../../src/icons/articulations/index.ts";

const outlineIcons = [
  { icon: staccato, name: "articulation-staccato" },
  { icon: accent, name: "articulation-accent" },
  { icon: tenuto, name: "articulation-tenuto" },
  { icon: fermata, name: "articulation-fermata" },
  { icon: marcato, name: "articulation-marcato" },
  { icon: staccatissimo, name: "articulation-staccatissimo" },
];

const filledIcons = [
  { icon: staccatoFilled, name: "articulation-staccato-filled" },
  { icon: accentFilled, name: "articulation-accent-filled" },
  { icon: tenutoFilled, name: "articulation-tenuto-filled" },
  { icon: fermataFilled, name: "articulation-fermata-filled" },
  { icon: marcatoFilled, name: "articulation-marcato-filled" },
  { icon: staccatissimoFilled, name: "articulation-staccatissimo-filled" },
];

describe("articulation icons — outline", () => {
  test.each(outlineIcons)("$name has correct metadata", ({ icon, name }) => {
    expect(icon.iconName).toBe(name);
    expect(icon.category).toBe("articulation");
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

describe("articulation icons — filled", () => {
  test.each(filledIcons)("$name has correct metadata", ({ icon, name }) => {
    expect(icon.iconName).toBe(name);
    expect(icon.category).toBe("articulation");
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
