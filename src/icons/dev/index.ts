// SVG paths sourced from Lucide (https://lucide.dev) — MIT License
import { createIcon } from "../../core/create-icon.ts";

const S =
  'stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"';

export const code = createIcon({
  name: "code",
  category: "dev",
  variant: "outline",
  svgContent: '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
});

export const codeFilled = createIcon({
  name: "code-filled",
  category: "dev",
  variant: "filled",
  svgContent: `<polyline ${S} points="16 18 22 12 16 6"/><polyline ${S} points="8 6 2 12 8 18"/>`,
});

export const terminal = createIcon({
  name: "terminal",
  category: "dev",
  variant: "outline",
  svgContent: '<polyline points="4 17 10 11 4 5"/><line x1="12" x2="20" y1="19" y2="19"/>',
});

export const terminalFilled = createIcon({
  name: "terminal-filled",
  category: "dev",
  variant: "filled",
  svgContent: `<polyline ${S} points="4 17 10 11 4 5"/><line ${S} x1="12" x2="20" y1="19" y2="19"/>`,
});

export const bug = createIcon({
  name: "bug",
  category: "dev",
  variant: "outline",
  svgContent:
    '<path d="m8 2 1.88 1.88"/><path d="M14.12 3.88 16 2"/><path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1"/><path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6z"/><path d="M12 20v-9"/><path d="M6.53 9C4.6 8.8 3 7.1 3 5"/><path d="M6 13H2"/><path d="M3 21c0-2.1 1.7-3.9 3.8-4"/><path d="M20.97 5c0 2.1-1.6 3.8-3.5 4"/><path d="M22 13h-4"/><path d="M17.2 17c2.1.1 3.8 1.9 3.8 4"/>',
});

export const bugFilled = createIcon({
  name: "bug-filled",
  category: "dev",
  variant: "filled",
  svgContent: `<path ${S} d="m8 2 1.88 1.88"/><path ${S} d="M14.12 3.88 16 2"/><path ${S} d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1"/><path ${S} d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6z"/><path ${S} d="M12 20v-9"/><path ${S} d="M6.53 9C4.6 8.8 3 7.1 3 5"/><path ${S} d="M6 13H2"/><path ${S} d="M3 21c0-2.1 1.7-3.9 3.8-4"/><path ${S} d="M20.97 5c0 2.1-1.6 3.8-3.5 4"/><path ${S} d="M22 13h-4"/><path ${S} d="M17.2 17c2.1.1 3.8 1.9 3.8 4"/>`,
});

export const pkg = createIcon({
  name: "package",
  category: "dev",
  variant: "outline",
  svgContent:
    '<path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/>',
});

export const pkgFilled = createIcon({
  name: "package-filled",
  category: "dev",
  variant: "filled",
  svgContent: `<path ${S} d="m7.5 4.27 9 5.15"/><path ${S} d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path ${S} d="m3.3 7 8.7 5 8.7-5"/><path ${S} d="M12 22V12"/>`,
});

export const gitCommit = createIcon({
  name: "git-commit",
  category: "dev",
  variant: "outline",
  svgContent:
    '<circle cx="12" cy="12" r="3"/><line x1="3" x2="9" y1="12" y2="12"/><line x1="15" x2="21" y1="12" y2="12"/>',
});

export const gitCommitFilled = createIcon({
  name: "git-commit-filled",
  category: "dev",
  variant: "filled",
  svgContent: `<circle ${S} cx="12" cy="12" r="3"/><line ${S} x1="3" x2="9" y1="12" y2="12"/><line ${S} x1="15" x2="21" y1="12" y2="12"/>`,
});

export const gitMerge = createIcon({
  name: "git-merge",
  category: "dev",
  variant: "outline",
  svgContent:
    '<circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 21V9a9 9 0 0 0 9 9"/>',
});

export const gitMergeFilled = createIcon({
  name: "git-merge-filled",
  category: "dev",
  variant: "filled",
  svgContent: `<circle ${S} cx="18" cy="18" r="3"/><circle ${S} cx="6" cy="6" r="3"/><path ${S} d="M6 21V9a9 9 0 0 0 9 9"/>`,
});

export const gitPullRequest = createIcon({
  name: "git-pull-request",
  category: "dev",
  variant: "outline",
  svgContent:
    '<circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M13 6h3a2 2 0 0 1 2 2v7"/><path d="M6 9v12"/>',
});

export const gitPullRequestFilled = createIcon({
  name: "git-pull-request-filled",
  category: "dev",
  variant: "filled",
  svgContent: `<circle ${S} cx="18" cy="18" r="3"/><circle ${S} cx="6" cy="6" r="3"/><path ${S} d="M13 6h3a2 2 0 0 1 2 2v7"/><path ${S} d="M6 9v12"/>`,
});

export const brackets = createIcon({
  name: "brackets",
  category: "dev",
  variant: "outline",
  svgContent: '<path d="M16 3h3v18h-3"/><path d="M8 21H5V3h3"/>',
});

export const bracketsFilled = createIcon({
  name: "brackets-filled",
  category: "dev",
  variant: "filled",
  svgContent: `<path ${S} d="M16 3h3v18h-3"/><path ${S} d="M8 21H5V3h3"/>`,
});

export const curlyBraces = createIcon({
  name: "curly-braces",
  category: "dev",
  variant: "outline",
  svgContent:
    '<path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1"/><path d="M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1"/>',
});

export const curlyBracesFilled = createIcon({
  name: "curly-braces-filled",
  category: "dev",
  variant: "filled",
  svgContent: `<path ${S} d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1"/><path ${S} d="M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1"/>`,
});

export const cpu = createIcon({
  name: "cpu",
  category: "dev",
  variant: "outline",
  svgContent:
    '<rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/>',
});

export const cpuFilled = createIcon({
  name: "cpu-filled",
  category: "dev",
  variant: "filled",
  svgContent: `<rect ${S} width="16" height="16" x="4" y="4" rx="2"/><rect ${S} width="6" height="6" x="9" y="9" rx="1"/><path ${S} d="M15 2v2"/><path ${S} d="M15 20v2"/><path ${S} d="M2 15h2"/><path ${S} d="M2 9h2"/><path ${S} d="M20 15h2"/><path ${S} d="M20 9h2"/><path ${S} d="M9 2v2"/><path ${S} d="M9 20v2"/>`,
});

export const cloud = createIcon({
  name: "cloud",
  category: "dev",
  variant: "outline",
  svgContent: '<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>',
});

export const cloudFilled = createIcon({
  name: "cloud-filled",
  category: "dev",
  variant: "filled",
  svgContent: `<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>`,
});

export const wifi = createIcon({
  name: "wifi",
  category: "dev",
  variant: "outline",
  svgContent:
    '<path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><circle cx="12" cy="20" r="1"/>',
});

export const wifiFilled = createIcon({
  name: "wifi-filled",
  category: "dev",
  variant: "filled",
  svgContent: `<path ${S} d="M5 12.55a11 11 0 0 1 14.08 0"/><path ${S} d="M1.42 9a16 16 0 0 1 21.16 0"/><path ${S} d="M8.53 16.11a6 6 0 0 1 6.95 0"/><circle ${S} cx="12" cy="20" r="1"/>`,
});

export const wifiOff = createIcon({
  name: "wifi-off",
  category: "dev",
  variant: "outline",
  svgContent:
    '<line x1="2" x2="22" y1="2" y2="22"/><path d="M8.5 16.5a5 5 0 0 1 7 0"/><path d="M2 8.82a15 15 0 0 1 4.17-2.65"/><path d="M10.66 5c4.01-.36 8.14.9 11.34 3.76"/><path d="M16.85 11.25a10 10 0 0 1 2.22 1.68"/><path d="M5 12.55a10 10 0 0 1 5.17-2.39"/><circle cx="12" cy="20" r="1"/>',
});

export const wifiOffFilled = createIcon({
  name: "wifi-off-filled",
  category: "dev",
  variant: "filled",
  svgContent: `<line ${S} x1="2" x2="22" y1="2" y2="22"/><path ${S} d="M8.5 16.5a5 5 0 0 1 7 0"/><path ${S} d="M2 8.82a15 15 0 0 1 4.17-2.65"/><path ${S} d="M10.66 5c4.01-.36 8.14.9 11.34 3.76"/><path ${S} d="M16.85 11.25a10 10 0 0 1 2.22 1.68"/><path ${S} d="M5 12.55a10 10 0 0 1 5.17-2.39"/><circle ${S} cx="12" cy="20" r="1"/>`,
});

export const webhook = createIcon({
  name: "webhook",
  category: "dev",
  variant: "outline",
  svgContent:
    '<path d="M18 16.98h-5.99c-1.1 0-1.95.68-2.37 1.62L8 22"/><path d="m10 17-.67-1"/><path d="M14.5 9A7 7 0 0 1 18 15.5"/><path d="M6 9c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2"/><path d="m13 9-2 4H6a2 2 0 0 0 0 4"/><circle cx="20" cy="9" r="2"/><circle cx="4" cy="18" r="2"/><circle cx="8" cy="5" r="2"/>',
});

export const webhookFilled = createIcon({
  name: "webhook-filled",
  category: "dev",
  variant: "filled",
  svgContent: `<path ${S} d="M18 16.98h-5.99c-1.1 0-1.95.68-2.37 1.62L8 22"/><path ${S} d="m10 17-.67-1"/><path ${S} d="M14.5 9A7 7 0 0 1 18 15.5"/><path ${S} d="M6 9c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2"/><path ${S} d="m13 9-2 4H6a2 2 0 0 0 0 4"/><circle ${S} cx="20" cy="9" r="2"/><circle ${S} cx="4" cy="18" r="2"/><circle ${S} cx="8" cy="5" r="2"/>`,
});
