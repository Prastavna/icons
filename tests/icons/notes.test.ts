import { describe, expect, test } from "vite-plus/test";
import {
  whole,
  wholeFilled,
  half,
  halfFilled,
  quarter,
  quarterFilled,
  eighth,
  eighthFilled,
  sixteenth,
  sixteenthFilled,
  thirtySecond,
  thirtySecondFilled,
  dottedHalf,
  dottedHalfFilled,
  dottedQuarter,
  dottedQuarterFilled,
  dottedEighth,
  dottedEighthFilled,
} from "../../src/icons/notes/index.ts";

const outlineIcons = [
  { icon: whole, name: "note-whole" },
  { icon: half, name: "note-half" },
  { icon: quarter, name: "note-quarter" },
  { icon: eighth, name: "note-eighth" },
  { icon: sixteenth, name: "note-sixteenth" },
  { icon: thirtySecond, name: "note-thirty-second" },
  { icon: dottedHalf, name: "note-dotted-half" },
  { icon: dottedQuarter, name: "note-dotted-quarter" },
  { icon: dottedEighth, name: "note-dotted-eighth" },
];

const filledIcons = [
  { icon: wholeFilled, name: "note-whole-filled" },
  { icon: halfFilled, name: "note-half-filled" },
  { icon: quarterFilled, name: "note-quarter-filled" },
  { icon: eighthFilled, name: "note-eighth-filled" },
  { icon: sixteenthFilled, name: "note-sixteenth-filled" },
  { icon: thirtySecondFilled, name: "note-thirty-second-filled" },
  { icon: dottedHalfFilled, name: "note-dotted-half-filled" },
  { icon: dottedQuarterFilled, name: "note-dotted-quarter-filled" },
  { icon: dottedEighthFilled, name: "note-dotted-eighth-filled" },
];

describe("note icons — outline", () => {
  test.each(outlineIcons)("$name has correct metadata", ({ icon, name }) => {
    expect(icon.iconName).toBe(name);
    expect(icon.category).toBe("note");
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

describe("note icons — filled", () => {
  test.each(filledIcons)("$name has correct metadata", ({ icon, name }) => {
    expect(icon.iconName).toBe(name);
    expect(icon.category).toBe("note");
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
