import { describe, expect, test } from "vite-plus/test";
import {
  common,
  commonFilled,
  cut,
  cutFilled,
  fourFour,
  fourFourFilled,
  threeFour,
  threeFourFilled,
  sixEight,
  sixEightFilled,
  twoFour,
  twoFourFilled,
  twoTwo,
  twoTwoFilled,
} from "../../src/icons/time-signatures/index.ts";

const outlineIcons = [
  { icon: common, name: "time-common" },
  { icon: cut, name: "time-cut" },
  { icon: fourFour, name: "time-four-four" },
  { icon: threeFour, name: "time-three-four" },
  { icon: sixEight, name: "time-six-eight" },
  { icon: twoFour, name: "time-two-four" },
  { icon: twoTwo, name: "time-two-two" },
];

const filledIcons = [
  { icon: commonFilled, name: "time-common-filled" },
  { icon: cutFilled, name: "time-cut-filled" },
  { icon: fourFourFilled, name: "time-four-four-filled" },
  { icon: threeFourFilled, name: "time-three-four-filled" },
  { icon: sixEightFilled, name: "time-six-eight-filled" },
  { icon: twoFourFilled, name: "time-two-four-filled" },
  { icon: twoTwoFilled, name: "time-two-two-filled" },
];

describe("time icons — outline", () => {
  test.each(outlineIcons)("$name has correct metadata", ({ icon, name }) => {
    expect(icon.iconName).toBe(name);
    expect(icon.category).toBe("time");
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

describe("time icons — filled", () => {
  test.each(filledIcons)("$name has correct metadata", ({ icon, name }) => {
    expect(icon.iconName).toBe(name);
    expect(icon.category).toBe("time");
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
