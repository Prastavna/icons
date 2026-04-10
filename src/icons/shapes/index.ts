// SVG paths sourced from Lucide (https://lucide.dev) — MIT License
import { createIcon } from "../../core/create-icon.ts";

const S =
  'stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"';

export const circleShape = createIcon({
  name: "circle-shape",
  category: "shape",
  variant: "outline",
  svgContent: '<circle cx="12" cy="12" r="10"/>',
});

export const circleShapeFilled = createIcon({
  name: "circle-shape-filled",
  category: "shape",
  variant: "filled",
  svgContent: `<circle ${S} cx="12" cy="12" r="10"/>`,
});

export const squareShape = createIcon({
  name: "square-shape",
  category: "shape",
  variant: "outline",
  svgContent: '<rect width="18" height="18" x="3" y="3" rx="2"/>',
});

export const squareShapeFilled = createIcon({
  name: "square-shape-filled",
  category: "shape",
  variant: "filled",
  svgContent: `<rect ${S} width="18" height="18" x="3" y="3" rx="2"/>`,
});

export const triangleShape = createIcon({
  name: "triangle-shape",
  category: "shape",
  variant: "outline",
  svgContent: '<path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>',
});

export const triangleShapeFilled = createIcon({
  name: "triangle-shape-filled",
  category: "shape",
  variant: "filled",
  svgContent: `<path ${S} d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>`,
});

export const diamondShape = createIcon({
  name: "diamond-shape",
  category: "shape",
  variant: "outline",
  svgContent:
    '<path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.58a2.41 2.41 0 0 0 3.41 0l7.58-7.58a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z"/>',
});

export const diamondShapeFilled = createIcon({
  name: "diamond-shape-filled",
  category: "shape",
  variant: "filled",
  svgContent: `<path ${S} d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.58a2.41 2.41 0 0 0 3.41 0l7.58-7.58a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z"/>`,
});

export const hexagonShape = createIcon({
  name: "hexagon-shape",
  category: "shape",
  variant: "outline",
  svgContent:
    '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>',
});

export const hexagonShapeFilled = createIcon({
  name: "hexagon-shape-filled",
  category: "shape",
  variant: "filled",
  svgContent: `<path ${S} d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>`,
});

export const octagonShape = createIcon({
  name: "octagon-shape",
  category: "shape",
  variant: "outline",
  svgContent:
    '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"/>',
});

export const octagonShapeFilled = createIcon({
  name: "octagon-shape-filled",
  category: "shape",
  variant: "filled",
  svgContent: `<polygon ${S} points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"/>`,
});

export const starShape = createIcon({
  name: "star-shape",
  category: "shape",
  variant: "outline",
  svgContent:
    '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
});

export const starShapeFilled = createIcon({
  name: "star-shape-filled",
  category: "shape",
  variant: "filled",
  svgContent: `<polygon ${S} points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>`,
});

export const pentagonShape = createIcon({
  name: "pentagon-shape",
  category: "shape",
  variant: "outline",
  svgContent:
    '<path d="M11.92 2.58a.5.5 0 0 1 .16 0l8.65 2.81a.5.5 0 0 1 .34.47v5.32a.5.5 0 0 1-.14.35l-5.35 5.47a.5.5 0 0 1-.36.15H8.78a.5.5 0 0 1-.36-.15L3.07 11.53a.5.5 0 0 1-.14-.35V5.86a.5.5 0 0 1 .34-.47z"/>',
});

export const pentagonShapeFilled = createIcon({
  name: "pentagon-shape-filled",
  category: "shape",
  variant: "filled",
  svgContent: `<path ${S} d="M11.92 2.58a.5.5 0 0 1 .16 0l8.65 2.81a.5.5 0 0 1 .34.47v5.32a.5.5 0 0 1-.14.35l-5.35 5.47a.5.5 0 0 1-.36.15H8.78a.5.5 0 0 1-.36-.15L3.07 11.53a.5.5 0 0 1-.14-.35V5.86a.5.5 0 0 1 .34-.47z"/>`,
});
