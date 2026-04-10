import { describe, expect, test } from "vite-plus/test";
import * as icons from "../../src/index.ts";

describe("root barrel export", () => {
  test("exports note icons with category prefix", () => {
    expect(icons.noteQuarter).toBeDefined();
    expect(icons.noteQuarter.iconName).toBe("note-quarter");
    expect(icons.noteQuarterFilled).toBeDefined();
    expect(icons.noteQuarterFilled.iconName).toBe("note-quarter-filled");
  });

  test("exports clef icons with category prefix", () => {
    expect(icons.clefTreble).toBeDefined();
    expect(icons.clefTreble.iconName).toBe("clef-treble");
  });

  test("exports rest icons with category prefix", () => {
    expect(icons.restQuarter).toBeDefined();
    expect(icons.restQuarter.iconName).toBe("rest-quarter");
  });

  test("exports accidental icons with category prefix", () => {
    expect(icons.accidentalSharp).toBeDefined();
    expect(icons.accidentalSharp.iconName).toBe("accidental-sharp");
  });

  test("exports time signature icons with category prefix", () => {
    expect(icons.timeCommon).toBeDefined();
    expect(icons.timeCommon.iconName).toBe("time-common");
  });

  test("exports dynamic icons with category prefix", () => {
    expect(icons.dynamicForte).toBeDefined();
    expect(icons.dynamicForte.iconName).toBe("dynamic-forte");
  });

  test("exports articulation icons with category prefix", () => {
    expect(icons.articulationStaccato).toBeDefined();
    expect(icons.articulationStaccato.iconName).toBe("articulation-staccato");
  });

  test("exports ornament icons with category prefix", () => {
    expect(icons.ornamentTrill).toBeDefined();
    expect(icons.ornamentTrill.iconName).toBe("ornament-trill");
  });

  test("exports repeat icons with category prefix", () => {
    expect(icons.repeatSegno).toBeDefined();
    expect(icons.repeatSegno.iconName).toBe("repeat-segno");
  });

  test("exports barline icons with category prefix", () => {
    expect(icons.barlineSingle).toBeDefined();
    expect(icons.barlineSingle.iconName).toBe("barline-single");
  });

  test("exports beam icons with category prefix", () => {
    expect(icons.beamSingle).toBeDefined();
    expect(icons.beamSingle.iconName).toBe("beam-single");
  });

  test("exports tie icons with category prefix", () => {
    expect(icons.tieAbove).toBeDefined();
    expect(icons.tieAbove.iconName).toBe("tie-above");
  });

  test("exports slur icons with category prefix", () => {
    expect(icons.slurAbove).toBeDefined();
    expect(icons.slurAbove.iconName).toBe("slur-above");
  });

  test("exports pedal icons with category prefix", () => {
    expect(icons.pedalDown).toBeDefined();
    expect(icons.pedalDown.iconName).toBe("pedal-down");
  });

  test("exports bow icons with category prefix", () => {
    expect(icons.bowUp).toBeDefined();
    expect(icons.bowUp.iconName).toBe("bow-up");
  });

  test("exports misc icons with category prefix", () => {
    expect(icons.miscMetronome).toBeDefined();
    expect(icons.miscMetronome.iconName).toBe("misc-metronome");
  });

  test("all exports are callable functions", () => {
    for (const [key, value] of Object.entries(icons)) {
      if (typeof value === "function") {
        const svg = (value as () => string)();
        expect(svg).toMatch(/^<svg /);
      }
    }
  });
});
