import { describe, expect, test } from "vite-plus/test";
import {
  metronome,
  metronomeFilled,
  tuningFork,
  tuningForkFilled,
  staff,
  staffFilled,
  ledgerLine,
  ledgerLineFilled,
  brace,
  braceFilled,
  bracket,
  bracketFilled,
} from "../../src/icons/misc/index.ts";

const outlineIcons = [
  { icon: metronome, name: "misc-metronome" },
  { icon: tuningFork, name: "misc-tuning-fork" },
  { icon: staff, name: "misc-staff" },
  { icon: ledgerLine, name: "misc-ledger-line" },
  { icon: brace, name: "misc-brace" },
  { icon: bracket, name: "misc-bracket" },
];

const filledIcons = [
  { icon: metronomeFilled, name: "misc-metronome-filled" },
  { icon: tuningForkFilled, name: "misc-tuning-fork-filled" },
  { icon: staffFilled, name: "misc-staff-filled" },
  { icon: ledgerLineFilled, name: "misc-ledger-line-filled" },
  { icon: braceFilled, name: "misc-brace-filled" },
  { icon: bracketFilled, name: "misc-bracket-filled" },
];

describe("misc icons — outline", () => {
  test.each(outlineIcons)("$name has correct metadata", ({ icon, name }) => {
    expect(icon.iconName).toBe(name);
    expect(icon.category).toBe("misc");
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

describe("misc icons — filled", () => {
  test.each(filledIcons)("$name has correct metadata", ({ icon, name }) => {
    expect(icon.iconName).toBe(name);
    expect(icon.category).toBe("misc");
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
