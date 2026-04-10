import { describe, expect, test } from "vite-plus/test";
import { createIcon } from "../../src/core/create-icon.ts";

const testContent = '<circle cx="12" cy="12" r="4"/>';

describe("createIcon", () => {
  describe("metadata", () => {
    test("attaches iconName property", () => {
      const icon = createIcon({
        name: "note-quarter",
        category: "note",
        variant: "outline",
        svgContent: testContent,
      });
      expect(icon.iconName).toBe("note-quarter");
    });
    test("attaches category property", () => {
      const icon = createIcon({
        name: "note-quarter",
        category: "note",
        variant: "outline",
        svgContent: testContent,
      });
      expect(icon.category).toBe("note");
    });
    test("attaches variant property", () => {
      const icon = createIcon({
        name: "note-quarter",
        category: "note",
        variant: "outline",
        svgContent: testContent,
      });
      expect(icon.variant).toBe("outline");
    });
    test("attaches default viewBox", () => {
      const icon = createIcon({
        name: "note-quarter",
        category: "note",
        variant: "outline",
        svgContent: testContent,
      });
      expect(icon.viewBox).toBe("0 0 24 24");
    });
    test("attaches custom viewBox", () => {
      const icon = createIcon({
        name: "note-quarter",
        category: "note",
        variant: "outline",
        viewBox: "0 0 16 16",
        svgContent: testContent,
      });
      expect(icon.viewBox).toBe("0 0 16 16");
    });
    test("svg property returns default SVG string", () => {
      const icon = createIcon({
        name: "note-quarter",
        category: "note",
        variant: "outline",
        svgContent: testContent,
      });
      expect(icon.svg).toBe(icon());
    });
  });

  describe("calling with no options", () => {
    test("returns valid SVG string", () => {
      const icon = createIcon({
        name: "note-quarter",
        category: "note",
        variant: "outline",
        svgContent: testContent,
      });
      const svg = icon();
      expect(svg).toMatch(/^<svg /);
      expect(svg).toMatch(/<\/svg>$/);
    });
    test("includes viewBox attribute", () => {
      const icon = createIcon({
        name: "note-quarter",
        category: "note",
        variant: "outline",
        svgContent: testContent,
      });
      expect(icon()).toContain('viewBox="0 0 24 24"');
    });
    test("includes default width and height of 24", () => {
      const icon = createIcon({
        name: "note-quarter",
        category: "note",
        variant: "outline",
        svgContent: testContent,
      });
      const svg = icon();
      expect(svg).toContain('width="24"');
      expect(svg).toContain('height="24"');
    });
    test("includes xmlns attribute", () => {
      const icon = createIcon({
        name: "note-quarter",
        category: "note",
        variant: "outline",
        svgContent: testContent,
      });
      expect(icon()).toContain('xmlns="http://www.w3.org/2000/svg"');
    });
    test("includes inner SVG content", () => {
      const icon = createIcon({
        name: "note-quarter",
        category: "note",
        variant: "outline",
        svgContent: testContent,
      });
      expect(icon()).toContain(testContent);
    });
  });

  describe("size option", () => {
    test("sets width and height", () => {
      const icon = createIcon({
        name: "note-quarter",
        category: "note",
        variant: "outline",
        svgContent: testContent,
      });
      const svg = icon({ size: 32 });
      expect(svg).toContain('width="32"');
      expect(svg).toContain('height="32"');
    });
  });

  describe("width/height override", () => {
    test("width overrides size for width only", () => {
      const icon = createIcon({
        name: "note-quarter",
        category: "note",
        variant: "outline",
        svgContent: testContent,
      });
      const svg = icon({ size: 32, width: 48 });
      expect(svg).toContain('width="48"');
      expect(svg).toContain('height="32"');
    });
    test("height overrides size for height only", () => {
      const icon = createIcon({
        name: "note-quarter",
        category: "note",
        variant: "outline",
        svgContent: testContent,
      });
      const svg = icon({ size: 32, height: 48 });
      expect(svg).toContain('width="32"');
      expect(svg).toContain('height="48"');
    });
  });

  describe("color option", () => {
    test("outline variant: sets stroke attribute", () => {
      const icon = createIcon({
        name: "note-quarter",
        category: "note",
        variant: "outline",
        svgContent: testContent,
      });
      expect(icon({ color: "red" })).toContain('stroke="red"');
    });
    test("filled variant: sets fill attribute", () => {
      const icon = createIcon({
        name: "note-quarter",
        category: "note",
        variant: "filled",
        svgContent: testContent,
      });
      expect(icon({ color: "blue" })).toContain('fill="blue"');
    });
    test("outline variant: defaults stroke to currentColor", () => {
      const icon = createIcon({
        name: "note-quarter",
        category: "note",
        variant: "outline",
        svgContent: testContent,
      });
      expect(icon()).toContain('stroke="currentColor"');
    });
    test("filled variant: defaults fill to currentColor", () => {
      const icon = createIcon({
        name: "note-quarter",
        category: "note",
        variant: "filled",
        svgContent: testContent,
      });
      expect(icon()).toContain('fill="currentColor"');
    });
  });

  describe("class option", () => {
    test("adds class attribute to svg", () => {
      const icon = createIcon({
        name: "note-quarter",
        category: "note",
        variant: "outline",
        svgContent: testContent,
      });
      expect(icon({ class: "my-icon" })).toContain('class="my-icon"');
    });
  });

  describe("viewBox override", () => {
    test("overrides default viewBox", () => {
      const icon = createIcon({
        name: "note-quarter",
        category: "note",
        variant: "outline",
        svgContent: testContent,
      });
      expect(icon({ viewBox: "0 0 16 16" })).toContain('viewBox="0 0 16 16"');
    });
  });

  describe("strokeWidth option", () => {
    test("outline variant: sets stroke-width attribute", () => {
      const icon = createIcon({
        name: "note-quarter",
        category: "note",
        variant: "outline",
        svgContent: testContent,
      });
      expect(icon({ strokeWidth: 1.5 })).toContain('stroke-width="1.5"');
    });
    test("filled variant: ignores strokeWidth", () => {
      const icon = createIcon({
        name: "note-quarter",
        category: "note",
        variant: "filled",
        svgContent: testContent,
      });
      expect(icon({ strokeWidth: 1.5 })).not.toContain("stroke-width");
    });
  });

  describe("arbitrary attributes", () => {
    test("passes through arbitrary SVG attributes", () => {
      const icon = createIcon({
        name: "note-quarter",
        category: "note",
        variant: "outline",
        svgContent: testContent,
      });
      const svg = icon({ "aria-label": "quarter note", "data-testid": "icon" });
      expect(svg).toContain('aria-label="quarter note"');
      expect(svg).toContain('data-testid="icon"');
    });
  });

  describe("outline defaults", () => {
    test("includes fill=none, stroke-linecap=round, stroke-linejoin=round", () => {
      const icon = createIcon({
        name: "note-quarter",
        category: "note",
        variant: "outline",
        svgContent: testContent,
      });
      const svg = icon();
      expect(svg).toContain('fill="none"');
      expect(svg).toContain('stroke-linecap="round"');
      expect(svg).toContain('stroke-linejoin="round"');
    });
    test("includes default stroke-width=2", () => {
      const icon = createIcon({
        name: "note-quarter",
        category: "note",
        variant: "outline",
        svgContent: testContent,
      });
      expect(icon()).toContain('stroke-width="2"');
    });
  });

  describe("filled defaults", () => {
    test("includes stroke=none", () => {
      const icon = createIcon({
        name: "note-quarter",
        category: "note",
        variant: "filled",
        svgContent: testContent,
      });
      expect(icon()).toContain('stroke="none"');
    });
  });
});
