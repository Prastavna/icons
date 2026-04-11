import { describe, expect, test } from "vite-plus/test";
import {
  play,
  playFilled,
  pause,
  pauseFilled,
  stop,
  stopFilled,
  skipForward,
  skipForwardFilled,
  skipBack,
  skipBackFilled,
  shuffle,
  shuffleFilled,
  repeat,
  repeatFilled,
  repeatOnce,
  repeatOnceFilled,
  volume,
  volumeFilled,
  volumeMute,
  volumeMuteFilled,
  volumeLow,
  volumeLowFilled,
  waveform,
  waveformFilled,
} from "../../src/icons/player/index.ts";

const outlineIcons = [
  { icon: play, name: "player-play" },
  { icon: pause, name: "player-pause" },
  { icon: stop, name: "player-stop" },
  { icon: skipForward, name: "player-skip-forward" },
  { icon: skipBack, name: "player-skip-back" },
  { icon: shuffle, name: "player-shuffle" },
  { icon: repeat, name: "player-repeat" },
  { icon: repeatOnce, name: "player-repeat-once" },
  { icon: volume, name: "player-volume" },
  { icon: volumeMute, name: "player-volume-mute" },
  { icon: volumeLow, name: "player-volume-low" },
  { icon: waveform, name: "player-waveform" },
];

const filledIcons = [
  { icon: playFilled, name: "player-play-filled" },
  { icon: pauseFilled, name: "player-pause-filled" },
  { icon: stopFilled, name: "player-stop-filled" },
  { icon: skipForwardFilled, name: "player-skip-forward-filled" },
  { icon: skipBackFilled, name: "player-skip-back-filled" },
  { icon: shuffleFilled, name: "player-shuffle-filled" },
  { icon: repeatFilled, name: "player-repeat-filled" },
  { icon: repeatOnceFilled, name: "player-repeat-once-filled" },
  { icon: volumeFilled, name: "player-volume-filled" },
  { icon: volumeMuteFilled, name: "player-volume-mute-filled" },
  { icon: volumeLowFilled, name: "player-volume-low-filled" },
  { icon: waveformFilled, name: "player-waveform-filled" },
];

describe("player icons — outline", () => {
  test.each(outlineIcons)("$name has correct metadata", ({ icon, name }) => {
    expect(icon.iconName).toBe(name);
    expect(icon.category).toBe("player");
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

describe("player icons — filled", () => {
  test.each(filledIcons)("$name has correct metadata", ({ icon, name }) => {
    expect(icon.iconName).toBe(name);
    expect(icon.category).toBe("player");
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
