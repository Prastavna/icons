import { expect, test, assertType } from "vite-plus/test";
import type { IconOptions, IconConfig, IconFunction } from "../../src/core/types.ts";

test("IconOptions accepts size", () => {
  const opts: IconOptions = { size: 32 };
  assertType<IconOptions>(opts);
});

test("IconOptions accepts width/height override", () => {
  const opts: IconOptions = { size: 24, width: 48, height: 48 };
  assertType<IconOptions>(opts);
});

test("IconOptions accepts color and class", () => {
  const opts: IconOptions = { color: "red", class: "my-icon" };
  assertType<IconOptions>(opts);
});

test("IconOptions accepts strokeWidth", () => {
  const opts: IconOptions = { strokeWidth: 1.5 };
  assertType<IconOptions>(opts);
});

test("IconOptions accepts arbitrary SVG attributes", () => {
  const opts: IconOptions = { "aria-label": "quarter note", "data-testid": "icon" };
  assertType<IconOptions>(opts);
});

test("IconConfig requires name, category, variant, svgContent", () => {
  const config: IconConfig = {
    name: "note-quarter",
    category: "note",
    variant: "outline",
    svgContent: '<path d="M0 0"/>',
  };
  assertType<IconConfig>(config);
});

test("IconConfig viewBox is optional", () => {
  const config: IconConfig = {
    name: "note-quarter",
    category: "note",
    variant: "outline",
    svgContent: '<path d="M0 0"/>',
  };
  assertType<IconConfig>(config);
  expect(config.viewBox).toBeUndefined();
});

test("IconFunction is callable and has metadata", () => {
  const fn = (() => "<svg></svg>") as IconFunction;
  Object.assign(fn, {
    iconName: "note-quarter",
    category: "note",
    variant: "outline" as const,
    viewBox: "0 0 24 24",
    svg: "<svg></svg>",
  });
  assertType<IconFunction>(fn);
  expect(fn.iconName).toBe("note-quarter");
});
