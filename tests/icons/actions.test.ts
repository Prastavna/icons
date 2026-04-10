import { describe, expect, test } from "vite-plus/test";
import {
  edit,
  editFilled,
  trash,
  trashFilled,
  copy,
  copyFilled,
  save,
  saveFilled,
  share,
  shareFilled,
  upload,
  uploadFilled,
  download,
  downloadFilled,
  refresh,
  refreshFilled,
  filter,
  filterFilled,
  sort,
  sortFilled,
  search,
  searchFilled,
  plus,
  plusFilled,
  minus,
  minusFilled,
  check,
  checkFilled,
  x,
  xFilled,
  zoomIn,
  zoomInFilled,
  zoomOut,
  zoomOutFilled,
  scissors,
  scissorsFilled,
  pin,
  pinFilled,
  send,
  sendFilled,
} from "../../src/icons/actions/index.ts";

const outlineIcons = [
  { icon: edit, name: "action-edit" },
  { icon: trash, name: "action-trash" },
  { icon: copy, name: "action-copy" },
  { icon: save, name: "action-save" },
  { icon: share, name: "action-share" },
  { icon: upload, name: "action-upload" },
  { icon: download, name: "action-download" },
  { icon: refresh, name: "action-refresh" },
  { icon: filter, name: "action-filter" },
  { icon: sort, name: "action-sort" },
  { icon: search, name: "action-search" },
  { icon: plus, name: "action-plus" },
  { icon: minus, name: "action-minus" },
  { icon: check, name: "action-check" },
  { icon: x, name: "action-x" },
  { icon: zoomIn, name: "action-zoom-in" },
  { icon: zoomOut, name: "action-zoom-out" },
  { icon: scissors, name: "action-scissors" },
  { icon: pin, name: "action-pin" },
  { icon: send, name: "action-send" },
];

const filledIcons = [
  { icon: editFilled, name: "action-edit-filled" },
  { icon: trashFilled, name: "action-trash-filled" },
  { icon: copyFilled, name: "action-copy-filled" },
  { icon: saveFilled, name: "action-save-filled" },
  { icon: shareFilled, name: "action-share-filled" },
  { icon: uploadFilled, name: "action-upload-filled" },
  { icon: downloadFilled, name: "action-download-filled" },
  { icon: refreshFilled, name: "action-refresh-filled" },
  { icon: filterFilled, name: "action-filter-filled" },
  { icon: sortFilled, name: "action-sort-filled" },
  { icon: searchFilled, name: "action-search-filled" },
  { icon: plusFilled, name: "action-plus-filled" },
  { icon: minusFilled, name: "action-minus-filled" },
  { icon: checkFilled, name: "action-check-filled" },
  { icon: xFilled, name: "action-x-filled" },
  { icon: zoomInFilled, name: "action-zoom-in-filled" },
  { icon: zoomOutFilled, name: "action-zoom-out-filled" },
  { icon: scissorsFilled, name: "action-scissors-filled" },
  { icon: pinFilled, name: "action-pin-filled" },
  { icon: sendFilled, name: "action-send-filled" },
];

describe("action icons — outline", () => {
  test.each(outlineIcons)("$name has correct metadata", ({ icon, name }) => {
    expect(icon.iconName).toBe(name);
    expect(icon.category).toBe("action");
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

describe("action icons — filled", () => {
  test.each(filledIcons)("$name has correct metadata", ({ icon, name }) => {
    expect(icon.iconName).toBe(name);
    expect(icon.category).toBe("action");
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
