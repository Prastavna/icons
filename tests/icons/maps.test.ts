import { describe, expect, test } from "vite-plus/test";
import {
  mapPin,
  mapPinFilled,
  map,
  mapFilled,
  globe,
  globeFilled,
  navigation,
  navigationFilled,
  route,
  routeFilled,
} from "../../src/icons/maps/index.ts";

const outlineIcons = [
  { icon: mapPin, name: "map-pin" },
  { icon: map, name: "map" },
  { icon: globe, name: "globe" },
  { icon: navigation, name: "navigation" },
  { icon: route, name: "route" },
];

const filledIcons = [
  { icon: mapPinFilled, name: "map-pin-filled" },
  { icon: mapFilled, name: "map-filled" },
  { icon: globeFilled, name: "globe-filled" },
  { icon: navigationFilled, name: "navigation-filled" },
  { icon: routeFilled, name: "route-filled" },
];

describe("map icons — outline", () => {
  test.each(outlineIcons)("$name has correct metadata", ({ icon, name }) => {
    expect(icon.iconName).toBe(name);
    expect(icon.category).toBe("map");
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

describe("map icons — filled", () => {
  test.each(filledIcons)("$name has correct metadata", ({ icon, name }) => {
    expect(icon.iconName).toBe(name);
    expect(icon.category).toBe("map");
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
