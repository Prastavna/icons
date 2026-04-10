import { describe, expect, test } from "vite-plus/test";
import {
  link,
  linkFilled,
  link2,
  link2Filled,
  rss,
  rssFilled,
  qrCode,
  qrCodeFilled,
  share2,
  share2Filled,
  thumbsUp,
  thumbsUpFilled,
  thumbsDown,
  thumbsDownFilled,
} from "../../src/icons/social/index.ts";

const outlineIcons = [
  { icon: link, name: "link" },
  { icon: link2, name: "link2" },
  { icon: rss, name: "rss" },
  { icon: qrCode, name: "qr-code" },
  { icon: share2, name: "share2" },
  { icon: thumbsUp, name: "thumbs-up" },
  { icon: thumbsDown, name: "thumbs-down" },
];

const filledIcons = [
  { icon: linkFilled, name: "link-filled" },
  { icon: link2Filled, name: "link2-filled" },
  { icon: rssFilled, name: "rss-filled" },
  { icon: qrCodeFilled, name: "qr-code-filled" },
  { icon: share2Filled, name: "share2-filled" },
  { icon: thumbsUpFilled, name: "thumbs-up-filled" },
  { icon: thumbsDownFilled, name: "thumbs-down-filled" },
];

describe("social icons — outline", () => {
  test.each(outlineIcons)("$name has correct metadata", ({ icon, name }) => {
    expect(icon.iconName).toBe(name);
    expect(icon.category).toBe("social");
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

describe("social icons — filled", () => {
  test.each(filledIcons)("$name has correct metadata", ({ icon, name }) => {
    expect(icon.iconName).toBe(name);
    expect(icon.category).toBe("social");
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
