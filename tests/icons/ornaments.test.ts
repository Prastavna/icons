import { describe, expect, test } from "vite-plus/test";
import {
  trill,
  trillFilled,
  mordent,
  mordentFilled,
  turn,
  turnFilled,
  tremolo,
  tremoloFilled,
  graceNote,
  graceNoteFilled,
} from "../../src/icons/ornaments/index.ts";

const outlineIcons = [
  { icon: trill, name: "ornament-trill" },
  { icon: mordent, name: "ornament-mordent" },
  { icon: turn, name: "ornament-turn" },
  { icon: tremolo, name: "ornament-tremolo" },
  { icon: graceNote, name: "ornament-grace-note" },
];

const filledIcons = [
  { icon: trillFilled, name: "ornament-trill-filled" },
  { icon: mordentFilled, name: "ornament-mordent-filled" },
  { icon: turnFilled, name: "ornament-turn-filled" },
  { icon: tremoloFilled, name: "ornament-tremolo-filled" },
  { icon: graceNoteFilled, name: "ornament-grace-note-filled" },
];

describe("ornament icons — outline", () => {
  test.each(outlineIcons)("$name has correct metadata", ({ icon, name }) => {
    expect(icon.iconName).toBe(name);
    expect(icon.category).toBe("ornament");
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

describe("ornament icons — filled", () => {
  test.each(filledIcons)("$name has correct metadata", ({ icon, name }) => {
    expect(icon.iconName).toBe(name);
    expect(icon.category).toBe("ornament");
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
