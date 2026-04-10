import { describe, expect, test } from "vite-plus/test";
import {
  sun,
  sunFilled,
  moon,
  moonFilled,
  cloud,
  cloudFilled,
  cloudRain,
  cloudRainFilled,
  cloudSnow,
  cloudSnowFilled,
  wind,
  windFilled,
  lightning,
  lightningFilled,
  snowflake,
  snowflakeFilled,
} from "../../src/icons/weather/index.ts";

const outlineIcons = [
  { icon: sun, name: "sun" },
  { icon: moon, name: "moon" },
  { icon: cloud, name: "cloud" },
  { icon: cloudRain, name: "cloud-rain" },
  { icon: cloudSnow, name: "cloud-snow" },
  { icon: wind, name: "wind" },
  { icon: lightning, name: "lightning" },
  { icon: snowflake, name: "snowflake" },
];

const filledIcons = [
  { icon: sunFilled, name: "sun-filled" },
  { icon: moonFilled, name: "moon-filled" },
  { icon: cloudFilled, name: "cloud-filled" },
  { icon: cloudRainFilled, name: "cloud-rain-filled" },
  { icon: cloudSnowFilled, name: "cloud-snow-filled" },
  { icon: windFilled, name: "wind-filled" },
  { icon: lightningFilled, name: "lightning-filled" },
  { icon: snowflakeFilled, name: "snowflake-filled" },
];

describe("weather icons — outline", () => {
  test.each(outlineIcons)("$name has correct metadata", ({ icon, name }) => {
    expect(icon.iconName).toBe(name);
    expect(icon.category).toBe("weather");
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

describe("weather icons — filled", () => {
  test.each(filledIcons)("$name has correct metadata", ({ icon, name }) => {
    expect(icon.iconName).toBe(name);
    expect(icon.category).toBe("weather");
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
