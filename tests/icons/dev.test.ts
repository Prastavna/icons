import { describe, expect, test } from "vite-plus/test";
import {
  code,
  codeFilled,
  terminal,
  terminalFilled,
  bug,
  bugFilled,
  pkg,
  pkgFilled,
  gitCommit,
  gitCommitFilled,
  gitMerge,
  gitMergeFilled,
  gitPullRequest,
  gitPullRequestFilled,
  brackets,
  bracketsFilled,
  curlyBraces,
  curlyBracesFilled,
  cpu,
  cpuFilled,
} from "../../src/icons/dev/index.ts";

const outlineIcons = [
  { icon: code, name: "code" },
  { icon: terminal, name: "terminal" },
  { icon: bug, name: "bug" },
  { icon: pkg, name: "package" },
  { icon: gitCommit, name: "git-commit" },
  { icon: gitMerge, name: "git-merge" },
  { icon: gitPullRequest, name: "git-pull-request" },
  { icon: brackets, name: "brackets" },
  { icon: curlyBraces, name: "curly-braces" },
  { icon: cpu, name: "cpu" },
];

const filledIcons = [
  { icon: codeFilled, name: "code-filled" },
  { icon: terminalFilled, name: "terminal-filled" },
  { icon: bugFilled, name: "bug-filled" },
  { icon: pkgFilled, name: "package-filled" },
  { icon: gitCommitFilled, name: "git-commit-filled" },
  { icon: gitMergeFilled, name: "git-merge-filled" },
  { icon: gitPullRequestFilled, name: "git-pull-request-filled" },
  { icon: bracketsFilled, name: "brackets-filled" },
  { icon: curlyBracesFilled, name: "curly-braces-filled" },
  { icon: cpuFilled, name: "cpu-filled" },
];

describe("dev icons — outline", () => {
  test.each(outlineIcons)("$name has correct metadata", ({ icon, name }) => {
    expect(icon.iconName).toBe(name);
    expect(icon.category).toBe("dev");
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

describe("dev icons — filled", () => {
  test.each(filledIcons)("$name has correct metadata", ({ icon, name }) => {
    expect(icon.iconName).toBe(name);
    expect(icon.category).toBe("dev");
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
