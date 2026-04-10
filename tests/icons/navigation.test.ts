import { describe, expect, test } from "vite-plus/test";
import {
  home,
  homeFilled,
  menu,
  menuFilled,
  grid,
  gridFilled,
  list,
  listFilled,
  sidebar,
  sidebarFilled,
  externalLink,
  externalLinkFilled,
  anchor,
  anchorFilled,
  compass,
  compassFilled,
  moreHorizontal,
  moreHorizontalFilled,
  moreVertical,
  moreVerticalFilled,
} from "../../src/icons/navigation/index.ts";

const outlineIcons = [
  { icon: home, name: "navigation-home" },
  { icon: menu, name: "navigation-menu" },
  { icon: grid, name: "navigation-grid" },
  { icon: list, name: "navigation-list" },
  { icon: sidebar, name: "navigation-sidebar" },
  { icon: externalLink, name: "navigation-external-link" },
  { icon: anchor, name: "navigation-anchor" },
  { icon: compass, name: "navigation-compass" },
  { icon: moreHorizontal, name: "navigation-more-horizontal" },
  { icon: moreVertical, name: "navigation-more-vertical" },
];

const filledIcons = [
  { icon: homeFilled, name: "navigation-home-filled" },
  { icon: menuFilled, name: "navigation-menu-filled" },
  { icon: gridFilled, name: "navigation-grid-filled" },
  { icon: listFilled, name: "navigation-list-filled" },
  { icon: sidebarFilled, name: "navigation-sidebar-filled" },
  { icon: externalLinkFilled, name: "navigation-external-link-filled" },
  { icon: anchorFilled, name: "navigation-anchor-filled" },
  { icon: compassFilled, name: "navigation-compass-filled" },
  { icon: moreHorizontalFilled, name: "navigation-more-horizontal-filled" },
  { icon: moreVerticalFilled, name: "navigation-more-vertical-filled" },
];

describe("navigation icons — outline", () => {
  test.each(outlineIcons)("$name has correct metadata", ({ icon, name }) => {
    expect(icon.iconName).toBe(name);
    expect(icon.category).toBe("navigation");
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

describe("navigation icons — filled", () => {
  test.each(filledIcons)("$name has correct metadata", ({ icon, name }) => {
    expect(icon.iconName).toBe(name);
    expect(icon.category).toBe("navigation");
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
