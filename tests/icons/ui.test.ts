import { describe, expect, test } from "vite-plus/test";
import {
  settings,
  settingsFilled,
  eye,
  eyeFilled,
  eyeOff,
  eyeOffFilled,
  lock,
  lockFilled,
  unlock,
  unlockFilled,
  star,
  starFilled,
  heart,
  heartFilled,
  bookmark,
  bookmarkFilled,
  flag,
  flagFilled,
  tag,
  tagFilled,
  badge,
  badgeFilled,
  circle,
  circleFilled,
  slash,
  slashFilled,
  info,
  infoFilled,
  alertTriangle,
  alertTriangleFilled,
  helpCircle,
  helpCircleFilled,
  loader,
  loaderFilled,
} from "../../src/icons/ui/index.ts";

const outlineIcons = [
  { icon: settings, name: "settings" },
  { icon: eye, name: "eye" },
  { icon: eyeOff, name: "eye-off" },
  { icon: lock, name: "lock" },
  { icon: unlock, name: "unlock" },
  { icon: star, name: "star" },
  { icon: heart, name: "heart" },
  { icon: bookmark, name: "bookmark" },
  { icon: flag, name: "flag" },
  { icon: tag, name: "tag" },
  { icon: badge, name: "badge" },
  { icon: circle, name: "circle" },
  { icon: slash, name: "slash" },
  { icon: info, name: "info" },
  { icon: alertTriangle, name: "alert-triangle" },
  { icon: helpCircle, name: "help-circle" },
  { icon: loader, name: "loader" },
];

const filledIcons = [
  { icon: settingsFilled, name: "settings-filled" },
  { icon: eyeFilled, name: "eye-filled" },
  { icon: eyeOffFilled, name: "eye-off-filled" },
  { icon: lockFilled, name: "lock-filled" },
  { icon: unlockFilled, name: "unlock-filled" },
  { icon: starFilled, name: "star-filled" },
  { icon: heartFilled, name: "heart-filled" },
  { icon: bookmarkFilled, name: "bookmark-filled" },
  { icon: flagFilled, name: "flag-filled" },
  { icon: tagFilled, name: "tag-filled" },
  { icon: badgeFilled, name: "badge-filled" },
  { icon: circleFilled, name: "circle-filled" },
  { icon: slashFilled, name: "slash-filled" },
  { icon: infoFilled, name: "info-filled" },
  { icon: alertTriangleFilled, name: "alert-triangle-filled" },
  { icon: helpCircleFilled, name: "help-circle-filled" },
  { icon: loaderFilled, name: "loader-filled" },
];

describe("ui icons — outline", () => {
  test.each(outlineIcons)("$name has correct metadata", ({ icon, name }) => {
    expect(icon.iconName).toBe(name);
    expect(icon.category).toBe("ui");
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

describe("ui icons — filled", () => {
  test.each(filledIcons)("$name has correct metadata", ({ icon, name }) => {
    expect(icon.iconName).toBe(name);
    expect(icon.category).toBe("ui");
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
