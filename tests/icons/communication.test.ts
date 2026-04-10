import { describe, expect, test } from "vite-plus/test";
import {
  mail,
  mailFilled,
  bell,
  bellFilled,
  bellOff,
  bellOffFilled,
  user,
  userFilled,
  users,
  usersFilled,
  phone,
  phoneFilled,
  messageCircle,
  messageCircleFilled,
  messageSquare,
  messageSquareFilled,
  inbox,
  inboxFilled,
  atSign,
  atSignFilled,
} from "../../src/icons/communication/index.ts";

const outlineIcons = [
  { icon: mail, name: "mail" },
  { icon: bell, name: "bell" },
  { icon: bellOff, name: "bell-off" },
  { icon: user, name: "user" },
  { icon: users, name: "users" },
  { icon: phone, name: "phone" },
  { icon: messageCircle, name: "message-circle" },
  { icon: messageSquare, name: "message-square" },
  { icon: inbox, name: "inbox" },
  { icon: atSign, name: "at-sign" },
];

const filledIcons = [
  { icon: mailFilled, name: "mail-filled" },
  { icon: bellFilled, name: "bell-filled" },
  { icon: bellOffFilled, name: "bell-off-filled" },
  { icon: userFilled, name: "user-filled" },
  { icon: usersFilled, name: "users-filled" },
  { icon: phoneFilled, name: "phone-filled" },
  { icon: messageCircleFilled, name: "message-circle-filled" },
  { icon: messageSquareFilled, name: "message-square-filled" },
  { icon: inboxFilled, name: "inbox-filled" },
  { icon: atSignFilled, name: "at-sign-filled" },
];

describe("communication icons — outline", () => {
  test.each(outlineIcons)("$name has correct metadata", ({ icon, name }) => {
    expect(icon.iconName).toBe(name);
    expect(icon.category).toBe("communication");
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

describe("communication icons — filled", () => {
  test.each(filledIcons)("$name has correct metadata", ({ icon, name }) => {
    expect(icon.iconName).toBe(name);
    expect(icon.category).toBe("communication");
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
