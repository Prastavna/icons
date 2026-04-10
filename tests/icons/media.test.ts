import { describe, expect, test } from "vite-plus/test";
import {
  camera,
  cameraFilled,
  mic,
  micFilled,
  micOff,
  micOffFilled,
  speaker,
  speakerFilled,
  monitor,
  monitorFilled,
  tv,
  tvFilled,
  headphones,
  headphonesFilled,
  radio,
  radioFilled,
  cameraOff,
  cameraOffFilled,
  screenShare,
  screenShareFilled,
} from "../../src/icons/media/index.ts";

const outlineIcons = [
  { icon: camera, name: "camera" },
  { icon: mic, name: "mic" },
  { icon: micOff, name: "mic-off" },
  { icon: speaker, name: "speaker" },
  { icon: monitor, name: "monitor" },
  { icon: tv, name: "tv" },
  { icon: headphones, name: "headphones" },
  { icon: radio, name: "radio" },
  { icon: cameraOff, name: "camera-off" },
  { icon: screenShare, name: "screen-share" },
];

const filledIcons = [
  { icon: cameraFilled, name: "camera-filled" },
  { icon: micFilled, name: "mic-filled" },
  { icon: micOffFilled, name: "mic-off-filled" },
  { icon: speakerFilled, name: "speaker-filled" },
  { icon: monitorFilled, name: "monitor-filled" },
  { icon: tvFilled, name: "tv-filled" },
  { icon: headphonesFilled, name: "headphones-filled" },
  { icon: radioFilled, name: "radio-filled" },
  { icon: cameraOffFilled, name: "camera-off-filled" },
  { icon: screenShareFilled, name: "screen-share-filled" },
];

describe("media icons — outline", () => {
  test.each(outlineIcons)("$name has correct metadata", ({ icon, name }) => {
    expect(icon.iconName).toBe(name);
    expect(icon.category).toBe("media");
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

describe("media icons — filled", () => {
  test.each(filledIcons)("$name has correct metadata", ({ icon, name }) => {
    expect(icon.iconName).toBe(name);
    expect(icon.category).toBe("media");
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
