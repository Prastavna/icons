import { describe, expect, test } from "vite-plus/test";
import {
  clock,
  clockFilled,
  calendar,
  calendarFilled,
  timer,
  timerFilled,
  hourglass,
  hourglassFilled,
  alarm,
  alarmFilled,
  calendarDays,
  calendarDaysFilled,
} from "../../src/icons/time/index.ts";

const outlineIcons = [
  { icon: clock, name: "clock" },
  { icon: calendar, name: "calendar" },
  { icon: timer, name: "timer" },
  { icon: hourglass, name: "hourglass" },
  { icon: alarm, name: "alarm" },
  { icon: calendarDays, name: "calendar-days" },
];

const filledIcons = [
  { icon: clockFilled, name: "clock-filled" },
  { icon: calendarFilled, name: "calendar-filled" },
  { icon: timerFilled, name: "timer-filled" },
  { icon: hourglassFilled, name: "hourglass-filled" },
  { icon: alarmFilled, name: "alarm-filled" },
  { icon: calendarDaysFilled, name: "calendar-days-filled" },
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
