import { describe, expect, test } from "vite-plus/test";
import {
  piano,
  pianoFilled,
  forte,
  forteFilled,
  mezzoForte,
  mezzoForteFilled,
  mezzoPiano,
  mezzoPianoFilled,
  fortissimo,
  fortissimoFilled,
  pianissimo,
  pianissimoFilled,
  crescendo,
  crescendoFilled,
  decrescendo,
  decrescendoFilled,
  sforzando,
  sforzandoFilled,
} from "../../src/icons/dynamics/index.ts";

const outlineIcons = [
  { icon: piano, name: "dynamic-piano" },
  { icon: forte, name: "dynamic-forte" },
  { icon: mezzoForte, name: "dynamic-mezzo-forte" },
  { icon: mezzoPiano, name: "dynamic-mezzo-piano" },
  { icon: fortissimo, name: "dynamic-fortissimo" },
  { icon: pianissimo, name: "dynamic-pianissimo" },
  { icon: crescendo, name: "dynamic-crescendo" },
  { icon: decrescendo, name: "dynamic-decrescendo" },
  { icon: sforzando, name: "dynamic-sforzando" },
];

const filledIcons = [
  { icon: pianoFilled, name: "dynamic-piano-filled" },
  { icon: forteFilled, name: "dynamic-forte-filled" },
  { icon: mezzoForteFilled, name: "dynamic-mezzo-forte-filled" },
  { icon: mezzoPianoFilled, name: "dynamic-mezzo-piano-filled" },
  { icon: fortissimoFilled, name: "dynamic-fortissimo-filled" },
  { icon: pianissimoFilled, name: "dynamic-pianissimo-filled" },
  { icon: crescendoFilled, name: "dynamic-crescendo-filled" },
  { icon: decrescendoFilled, name: "dynamic-decrescendo-filled" },
  { icon: sforzandoFilled, name: "dynamic-sforzando-filled" },
];

describe("dynamic icons — outline", () => {
  test.each(outlineIcons)("$name has correct metadata", ({ icon, name }) => {
    expect(icon.iconName).toBe(name);
    expect(icon.category).toBe("dynamic");
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

describe("dynamic icons — filled", () => {
  test.each(filledIcons)("$name has correct metadata", ({ icon, name }) => {
    expect(icon.iconName).toBe(name);
    expect(icon.category).toBe("dynamic");
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
