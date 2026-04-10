import { describe, expect, test } from "vite-plus/test";
import {
  circleShape,
  circleShapeFilled,
  squareShape,
  squareShapeFilled,
  triangleShape,
  triangleShapeFilled,
  diamondShape,
  diamondShapeFilled,
  hexagonShape,
  hexagonShapeFilled,
  octagonShape,
  octagonShapeFilled,
  starShape,
  starShapeFilled,
  pentagonShape,
  pentagonShapeFilled,
} from "../../src/icons/shapes/index.ts";

const outlineIcons = [
  { icon: circleShape, name: "circle-shape" },
  { icon: squareShape, name: "square-shape" },
  { icon: triangleShape, name: "triangle-shape" },
  { icon: diamondShape, name: "diamond-shape" },
  { icon: hexagonShape, name: "hexagon-shape" },
  { icon: octagonShape, name: "octagon-shape" },
  { icon: starShape, name: "star-shape" },
  { icon: pentagonShape, name: "pentagon-shape" },
];

const filledIcons = [
  { icon: circleShapeFilled, name: "circle-shape-filled" },
  { icon: squareShapeFilled, name: "square-shape-filled" },
  { icon: triangleShapeFilled, name: "triangle-shape-filled" },
  { icon: diamondShapeFilled, name: "diamond-shape-filled" },
  { icon: hexagonShapeFilled, name: "hexagon-shape-filled" },
  { icon: octagonShapeFilled, name: "octagon-shape-filled" },
  { icon: starShapeFilled, name: "star-shape-filled" },
  { icon: pentagonShapeFilled, name: "pentagon-shape-filled" },
];

describe("shape icons — outline", () => {
  test.each(outlineIcons)("$name has correct metadata", ({ icon, name }) => {
    expect(icon.iconName).toBe(name);
    expect(icon.category).toBe("shape");
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

describe("shape icons — filled", () => {
  test.each(filledIcons)("$name has correct metadata", ({ icon, name }) => {
    expect(icon.iconName).toBe(name);
    expect(icon.category).toBe("shape");
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
