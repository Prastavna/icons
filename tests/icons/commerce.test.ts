import { describe, expect, test } from "vite-plus/test";
import {
  shoppingCart,
  shoppingCartFilled,
  shoppingBag,
  shoppingBagFilled,
  creditCard,
  creditCardFilled,
  receipt,
  receiptFilled,
  wallet,
  walletFilled,
  dollarSign,
  dollarSignFilled,
  percent,
  percentFilled,
  gift,
  giftFilled,
} from "../../src/icons/commerce/index.ts";

const outlineIcons = [
  { icon: shoppingCart, name: "shopping-cart" },
  { icon: shoppingBag, name: "shopping-bag" },
  { icon: creditCard, name: "credit-card" },
  { icon: receipt, name: "receipt" },
  { icon: wallet, name: "wallet" },
  { icon: dollarSign, name: "dollar-sign" },
  { icon: percent, name: "percent" },
  { icon: gift, name: "gift" },
];

const filledIcons = [
  { icon: shoppingCartFilled, name: "shopping-cart-filled" },
  { icon: shoppingBagFilled, name: "shopping-bag-filled" },
  { icon: creditCardFilled, name: "credit-card-filled" },
  { icon: receiptFilled, name: "receipt-filled" },
  { icon: walletFilled, name: "wallet-filled" },
  { icon: dollarSignFilled, name: "dollar-sign-filled" },
  { icon: percentFilled, name: "percent-filled" },
  { icon: giftFilled, name: "gift-filled" },
];

describe("commerce icons — outline", () => {
  test.each(outlineIcons)("$name has correct metadata", ({ icon, name }) => {
    expect(icon.iconName).toBe(name);
    expect(icon.category).toBe("commerce");
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

describe("commerce icons — filled", () => {
  test.each(filledIcons)("$name has correct metadata", ({ icon, name }) => {
    expect(icon.iconName).toBe(name);
    expect(icon.category).toBe("commerce");
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
