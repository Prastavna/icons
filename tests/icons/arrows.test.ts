import { describe, expect, test } from "vite-plus/test";
import {
  arrowRight,
  arrowRightFilled,
  arrowLeft,
  arrowLeftFilled,
  arrowUp,
  arrowUpFilled,
  arrowDown,
  arrowDownFilled,
  arrowUpRight,
  arrowUpRightFilled,
  arrowDownLeft,
  arrowDownLeftFilled,
  chevronRight,
  chevronRightFilled,
  chevronLeft,
  chevronLeftFilled,
  chevronUp,
  chevronUpFilled,
  chevronDown,
  chevronDownFilled,
  chevronsRight,
  chevronsRightFilled,
  chevronsLeft,
  chevronsLeftFilled,
  chevronsUpDown,
  chevronsUpDownFilled,
  moveRight,
  moveRightFilled,
  moveLeft,
  moveLeftFilled,
  cornerDownRight,
  cornerDownRightFilled,
  cornerUpLeft,
  cornerUpLeftFilled,
  arrowUpDown,
  arrowUpDownFilled,
  arrowLeftRight,
  arrowLeftRightFilled,
  rotateCw,
  rotateCwFilled,
  rotateCcw,
  rotateCcwFilled,
  expand,
  expandFilled,
  shrink,
  shrinkFilled,
} from "../../src/icons/arrows/index.ts";

const outlineIcons = [
  { icon: arrowRight, name: "arrow-right" },
  { icon: arrowLeft, name: "arrow-left" },
  { icon: arrowUp, name: "arrow-up" },
  { icon: arrowDown, name: "arrow-down" },
  { icon: arrowUpRight, name: "arrow-up-right" },
  { icon: arrowDownLeft, name: "arrow-down-left" },
  { icon: chevronRight, name: "chevron-right" },
  { icon: chevronLeft, name: "chevron-left" },
  { icon: chevronUp, name: "chevron-up" },
  { icon: chevronDown, name: "chevron-down" },
  { icon: chevronsRight, name: "chevrons-right" },
  { icon: chevronsLeft, name: "chevrons-left" },
  { icon: chevronsUpDown, name: "chevrons-up-down" },
  { icon: moveRight, name: "move-right" },
  { icon: moveLeft, name: "move-left" },
  { icon: cornerDownRight, name: "corner-down-right" },
  { icon: cornerUpLeft, name: "corner-up-left" },
  { icon: arrowUpDown, name: "arrow-up-down" },
  { icon: arrowLeftRight, name: "arrow-left-right" },
  { icon: rotateCw, name: "rotate-cw" },
  { icon: rotateCcw, name: "rotate-ccw" },
  { icon: expand, name: "expand" },
  { icon: shrink, name: "shrink" },
];

const filledIcons = [
  { icon: arrowRightFilled, name: "arrow-right-filled" },
  { icon: arrowLeftFilled, name: "arrow-left-filled" },
  { icon: arrowUpFilled, name: "arrow-up-filled" },
  { icon: arrowDownFilled, name: "arrow-down-filled" },
  { icon: arrowUpRightFilled, name: "arrow-up-right-filled" },
  { icon: arrowDownLeftFilled, name: "arrow-down-left-filled" },
  { icon: chevronRightFilled, name: "chevron-right-filled" },
  { icon: chevronLeftFilled, name: "chevron-left-filled" },
  { icon: chevronUpFilled, name: "chevron-up-filled" },
  { icon: chevronDownFilled, name: "chevron-down-filled" },
  { icon: chevronsRightFilled, name: "chevrons-right-filled" },
  { icon: chevronsLeftFilled, name: "chevrons-left-filled" },
  { icon: chevronsUpDownFilled, name: "chevrons-up-down-filled" },
  { icon: moveRightFilled, name: "move-right-filled" },
  { icon: moveLeftFilled, name: "move-left-filled" },
  { icon: cornerDownRightFilled, name: "corner-down-right-filled" },
  { icon: cornerUpLeftFilled, name: "corner-up-left-filled" },
  { icon: arrowUpDownFilled, name: "arrow-up-down-filled" },
  { icon: arrowLeftRightFilled, name: "arrow-left-right-filled" },
  { icon: rotateCwFilled, name: "rotate-cw-filled" },
  { icon: rotateCcwFilled, name: "rotate-ccw-filled" },
  { icon: expandFilled, name: "expand-filled" },
  { icon: shrinkFilled, name: "shrink-filled" },
];

describe("arrow icons — outline", () => {
  test.each(outlineIcons)("$name has correct metadata", ({ icon, name }) => {
    expect(icon.iconName).toBe(name);
    expect(icon.category).toBe("arrow");
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

describe("arrow icons — filled", () => {
  test.each(filledIcons)("$name has correct metadata", ({ icon, name }) => {
    expect(icon.iconName).toBe(name);
    expect(icon.category).toBe("arrow");
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
