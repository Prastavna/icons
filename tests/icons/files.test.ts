import { describe, expect, test } from "vite-plus/test";
import {
  file,
  fileFilled,
  folder,
  folderFilled,
  folderOpen,
  folderOpenFilled,
  image,
  imageFilled,
  video,
  videoFilled,
  audio,
  audioFilled,
  fileText,
  fileTextFilled,
  fileCode,
  fileCodeFilled,
  archive,
  archiveFilled,
  hardDrive,
  hardDriveFilled,
} from "../../src/icons/files/index.ts";

const outlineIcons = [
  { icon: file, name: "file" },
  { icon: folder, name: "folder" },
  { icon: folderOpen, name: "folder-open" },
  { icon: image, name: "image" },
  { icon: video, name: "video" },
  { icon: audio, name: "audio" },
  { icon: fileText, name: "file-text" },
  { icon: fileCode, name: "file-code" },
  { icon: archive, name: "archive" },
  { icon: hardDrive, name: "hard-drive" },
];

const filledIcons = [
  { icon: fileFilled, name: "file-filled" },
  { icon: folderFilled, name: "folder-filled" },
  { icon: folderOpenFilled, name: "folder-open-filled" },
  { icon: imageFilled, name: "image-filled" },
  { icon: videoFilled, name: "video-filled" },
  { icon: audioFilled, name: "audio-filled" },
  { icon: fileTextFilled, name: "file-text-filled" },
  { icon: fileCodeFilled, name: "file-code-filled" },
  { icon: archiveFilled, name: "archive-filled" },
  { icon: hardDriveFilled, name: "hard-drive-filled" },
];

describe("file icons — outline", () => {
  test.each(outlineIcons)("$name has correct metadata", ({ icon, name }) => {
    expect(icon.iconName).toBe(name);
    expect(icon.category).toBe("file");
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

describe("file icons — filled", () => {
  test.each(filledIcons)("$name has correct metadata", ({ icon, name }) => {
    expect(icon.iconName).toBe(name);
    expect(icon.category).toBe("file");
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
