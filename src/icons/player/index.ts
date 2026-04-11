import { createIcon } from "../../core/create-icon.ts";

const S =
  'stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"';

export const play = createIcon({
  name: "player-play",
  category: "player",
  variant: "outline",
  svgContent: '<polygon points="5 3 19 12 5 21 5 3"/>',
});

export const playFilled = createIcon({
  name: "player-play-filled",
  category: "player",
  variant: "filled",
  svgContent: '<polygon points="5 3 19 12 5 21 5 3"/>',
});

export const pause = createIcon({
  name: "player-pause",
  category: "player",
  variant: "outline",
  svgContent:
    '<rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/>',
});

export const pauseFilled = createIcon({
  name: "player-pause-filled",
  category: "player",
  variant: "filled",
  svgContent:
    '<rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/>',
});

export const stop = createIcon({
  name: "player-stop",
  category: "player",
  variant: "outline",
  svgContent: '<rect x="5" y="5" width="14" height="14" rx="1"/>',
});

export const stopFilled = createIcon({
  name: "player-stop-filled",
  category: "player",
  variant: "filled",
  svgContent: '<rect x="5" y="5" width="14" height="14" rx="1"/>',
});

export const skipForward = createIcon({
  name: "player-skip-forward",
  category: "player",
  variant: "outline",
  svgContent: '<polygon points="5 4 15 12 5 20 5 4"/><line x1="19" y1="5" x2="19" y2="19"/>',
});

export const skipForwardFilled = createIcon({
  name: "player-skip-forward-filled",
  category: "player",
  variant: "filled",
  svgContent: '<polygon points="5 4 15 12 5 20 5 4"/><line x1="19" y1="5" x2="19" y2="19"/>',
});

export const skipBack = createIcon({
  name: "player-skip-back",
  category: "player",
  variant: "outline",
  svgContent: '<polygon points="19 20 9 12 19 4 19 20"/><line x1="5" y1="19" x2="5" y2="5"/>',
});

export const skipBackFilled = createIcon({
  name: "player-skip-back-filled",
  category: "player",
  variant: "filled",
  svgContent: '<polygon points="19 20 9 12 19 4 19 20"/><line x1="5" y1="19" x2="5" y2="5"/>',
});

export const shuffle = createIcon({
  name: "player-shuffle",
  category: "player",
  variant: "outline",
  svgContent:
    '<path d="M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22"/><path d="m18 2 4 4-4 4"/><path d="M2 6h1.9c1.5 0 2.9.9 3.6 2.2"/><path d="m18 22 4-4-4-4"/><path d="M21.7 16.4c-.3.5-.8.6-1.7.6H18"/>',
});

export const shuffleFilled = createIcon({
  name: "player-shuffle-filled",
  category: "player",
  variant: "filled",
  svgContent: `<path ${S} d="M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22"/><path ${S} d="m18 2 4 4-4 4"/><path ${S} d="M2 6h1.9c1.5 0 2.9.9 3.6 2.2"/><path ${S} d="m18 22 4-4-4-4"/><path ${S} d="M21.7 16.4c-.3.5-.8.6-1.7.6H18"/>`,
});

export const repeat = createIcon({
  name: "player-repeat",
  category: "player",
  variant: "outline",
  svgContent:
    '<path d="m17 2 4 4-4 4"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/>',
});

export const repeatFilled = createIcon({
  name: "player-repeat-filled",
  category: "player",
  variant: "filled",
  svgContent: `<path ${S} d="m17 2 4 4-4 4"/><path ${S} d="M3 11V9a4 4 0 0 1 4-4h14"/><path ${S} d="m7 22-4-4 4-4"/><path ${S} d="M21 13v2a4 4 0 0 1-4 4H3"/>`,
});

export const repeatOnce = createIcon({
  name: "player-repeat-once",
  category: "player",
  variant: "outline",
  svgContent:
    '<path d="m17 2 4 4-4 4"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/><path d="M11 10h1v4"/>',
});

export const repeatOnceFilled = createIcon({
  name: "player-repeat-once-filled",
  category: "player",
  variant: "filled",
  svgContent: `<path ${S} d="m17 2 4 4-4 4"/><path ${S} d="M3 11V9a4 4 0 0 1 4-4h14"/><path ${S} d="m7 22-4-4 4-4"/><path ${S} d="M21 13v2a4 4 0 0 1-4 4H3"/><path ${S} d="M11 10h1v4"/>`,
});

export const volume = createIcon({
  name: "player-volume",
  category: "player",
  variant: "outline",
  svgContent:
    '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>',
});

export const volumeFilled = createIcon({
  name: "player-volume-filled",
  category: "player",
  variant: "filled",
  svgContent: `<polygon ${S} points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path ${S} d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path ${S} d="M19.07 4.93a10 10 0 0 1 0 14.14"/>`,
});

export const volumeMute = createIcon({
  name: "player-volume-mute",
  category: "player",
  variant: "outline",
  svgContent:
    '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="22" y1="9" x2="16" y2="15"/><line x1="16" y1="9" x2="22" y2="15"/>',
});

export const volumeMuteFilled = createIcon({
  name: "player-volume-mute-filled",
  category: "player",
  variant: "filled",
  svgContent: `<polygon ${S} points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line ${S} x1="22" y1="9" x2="16" y2="15"/><line ${S} x1="16" y1="9" x2="22" y2="15"/>`,
});

export const volumeLow = createIcon({
  name: "player-volume-low",
  category: "player",
  variant: "outline",
  svgContent:
    '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>',
});

export const volumeLowFilled = createIcon({
  name: "player-volume-low-filled",
  category: "player",
  variant: "filled",
  svgContent: `<polygon ${S} points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path ${S} d="M15.54 8.46a5 5 0 0 1 0 7.07"/>`,
});

export const waveform = createIcon({
  name: "player-waveform",
  category: "player",
  variant: "outline",
  svgContent: '<path d="M2 13 L4 9 L6 17 L8 5 L10 19 L12 11 L14 15 L16 12 L18 12 L20 12 L22 12"/>',
});

export const waveformFilled = createIcon({
  name: "player-waveform-filled",
  category: "player",
  variant: "filled",
  svgContent: `<path ${S} d="M2 13 L4 9 L6 17 L8 5 L10 19 L12 11 L14 15 L16 12 L18 12 L20 12 L22 12"/>`,
});
