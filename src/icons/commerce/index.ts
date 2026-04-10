// SVG paths sourced from Lucide (https://lucide.dev) — MIT License
import { createIcon } from "../../core/create-icon.ts";

const S =
  'stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"';

export const shoppingCart = createIcon({
  name: "shopping-cart",
  category: "commerce",
  variant: "outline",
  svgContent:
    '<circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>',
});

export const shoppingCartFilled = createIcon({
  name: "shopping-cart-filled",
  category: "commerce",
  variant: "filled",
  svgContent: `<circle ${S} cx="8" cy="21" r="1"/><circle ${S} cx="19" cy="21" r="1"/><path ${S} d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>`,
});

export const shoppingBag = createIcon({
  name: "shopping-bag",
  category: "commerce",
  variant: "outline",
  svgContent:
    '<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" x2="21" y1="6" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>',
});

export const shoppingBagFilled = createIcon({
  name: "shopping-bag-filled",
  category: "commerce",
  variant: "filled",
  svgContent: `<path ${S} d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line ${S} x1="3" x2="21" y1="6" y2="6"/><path ${S} d="M16 10a4 4 0 0 1-8 0"/>`,
});

export const creditCard = createIcon({
  name: "credit-card",
  category: "commerce",
  variant: "outline",
  svgContent:
    '<rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/>',
});

export const creditCardFilled = createIcon({
  name: "credit-card-filled",
  category: "commerce",
  variant: "filled",
  svgContent: `<rect ${S} width="20" height="14" x="2" y="5" rx="2"/><line ${S} x1="2" x2="22" y1="10" y2="10"/>`,
});

export const receipt = createIcon({
  name: "receipt",
  category: "commerce",
  variant: "outline",
  svgContent:
    '<path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1z"/><path d="M16 8H8"/><path d="M16 12H8"/><path d="M12 16H8"/>',
});

export const receiptFilled = createIcon({
  name: "receipt-filled",
  category: "commerce",
  variant: "filled",
  svgContent: `<path ${S} d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1z"/><path ${S} d="M16 8H8"/><path ${S} d="M16 12H8"/><path ${S} d="M12 16H8"/>`,
});

export const wallet = createIcon({
  name: "wallet",
  category: "commerce",
  variant: "outline",
  svgContent:
    '<path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"/>',
});

export const walletFilled = createIcon({
  name: "wallet-filled",
  category: "commerce",
  variant: "filled",
  svgContent: `<path ${S} d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path ${S} d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path ${S} d="M18 12a2 2 0 0 0 0 4h4v-4Z"/>`,
});

export const dollarSign = createIcon({
  name: "dollar-sign",
  category: "commerce",
  variant: "outline",
  svgContent:
    '<line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>',
});

export const dollarSignFilled = createIcon({
  name: "dollar-sign-filled",
  category: "commerce",
  variant: "filled",
  svgContent: `<line ${S} x1="12" x2="12" y1="2" y2="22"/><path ${S} d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>`,
});

export const percent = createIcon({
  name: "percent",
  category: "commerce",
  variant: "outline",
  svgContent:
    '<line x1="19" x2="5" y1="5" y2="19"/><circle cx="6.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/>',
});

export const percentFilled = createIcon({
  name: "percent-filled",
  category: "commerce",
  variant: "filled",
  svgContent: `<line ${S} x1="19" x2="5" y1="5" y2="19"/><circle ${S} cx="6.5" cy="6.5" r="2.5"/><circle ${S} cx="17.5" cy="17.5" r="2.5"/>`,
});

export const gift = createIcon({
  name: "gift",
  category: "commerce",
  variant: "outline",
  svgContent:
    '<rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13"/><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"/>',
});

export const giftFilled = createIcon({
  name: "gift-filled",
  category: "commerce",
  variant: "filled",
  svgContent: `<rect ${S} x="3" y="8" width="18" height="4" rx="1"/><path ${S} d="M12 8v13"/><path ${S} d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/><path ${S} d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"/>`,
});
