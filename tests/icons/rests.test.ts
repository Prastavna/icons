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
} from "../../src/icons/rests/index.ts";

const outlineIcons = [
  { icon: whole, name: "rest-whole" },
  { icon: half, name: "rest-half" },
  { icon: quarter, name: "rest-quarter" },
  { icon: eighth, name: "rest-eighth" },
  { icon: sixteenth, name: "rest-sixteenth" },
  { icon: thirtySecond, name: "rest-thirty-second" },
];

const filledIcons = [
  { icon: wholeFilled, name: "rest-whole-filled" },
  { icon: halfFilled, name: "rest-half-filled" },
  { icon: quarterFilled, name: "rest-quarter-filled" },
  { icon: eighthFilled, name: "rest-eighth-filled" },
  { icon: sixteenthFilled, name: "rest-sixteenth-filled" },
  { icon: thirtySecondFilled, name: "rest-thirty-second-filled" },
];

describe("rest icons — outline", () => {
  test.each(outlineIcons)("$name has correct metadata", ({ icon, name }) => {
    expect(icon.iconName).toBe(name);
    expect(icon.category).toBe("rest");
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

describe("rest icons — filled", () => {
  test.each(filledIcons)("$name has correct metadata", ({ icon, name }) => {
    expect(icon.iconName).toBe(name);
    expect(icon.category).toBe("rest");
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
