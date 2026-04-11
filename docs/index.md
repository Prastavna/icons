---
layout: home

hero:
  name: "@prastavna/icons"
  text: "Music notation icons as raw SVG strings"
  tagline: "275 SVG icons across 34 categories, each available in outline and filled variants with a small callable API."
  actions:
    - theme: brand
      text: Get Started
      link: /guide/getting-started
    - theme: alt
      text: Browse Gallery
      link: /gallery
    - theme: alt
      text: Framework Integrations
      link: /integrations

features:
  - title: Framework agnostic
    details: Every icon returns a plain SVG string, so the library works in React, Vue, Svelte, web components, and plain DOM code.
  - title: Built for score notation
    details: Covers notes, rests, clefs, accidentals, time signatures, dynamics, articulations, repeats, and more, alongside broader UI, media, and app icon sets.
  - title: Small callable API
    details: Icons accept size, width, height, color, viewBox, strokeWidth, class, and arbitrary SVG attributes.
---

<div class="lead">
  <p>
    <code>@prastavna/icons</code> is a framework-agnostic icon library for music score notation symbols and other generic icons.
    Each export is a function that returns a complete <code>&lt;svg&gt;</code> string and also exposes metadata such as
    <code>iconName</code>, <code>category</code>, <code>variant</code>, and <code>viewBox</code>.
  </p>
</div>

## Quick Start

```bash
vp add @prastavna/icons
```

```ts
import { noteQuarter } from "@prastavna/icons";

const svg = noteQuarter({ size: 28, color: "#7c3aed" });
element.innerHTML = svg;
```

<div class="quick-grid">
  <div class="quick-card">
    <h3>Guide</h3>
    <p>Install the package, choose root or subpath imports, and wire SVG output into your UI.</p>
    <p><a href="/guide/getting-started">Read the guide</a></p>
  </div>
  <div class="quick-card">
    <h3>API</h3>
    <p>See the icon function shape, supported options, metadata, and rendering behavior.</p>
    <p><a href="/api">Open the API reference</a></p>
  </div>
  <div class="quick-card">
    <h3>Gallery</h3>
    <p>Browse every export by category, search by name, and copy icon names directly from each card.</p>
    <p><a href="/gallery">Open the gallery</a></p>
  </div>
  <div class="quick-card">
    <h3>Integrations</h3>
    <p>See TypeScript examples for plain DOM usage plus React, Vue, Svelte, and Astro integrations.</p>
    <p><a href="/integrations">Open integration examples</a></p>
  </div>
</div>

## Included Categories

Notes, rests, clefs, accidentals, time signatures, dynamics, articulations, ornaments, repeats, barlines, beams, ties, slurs, pedals, bows, miscellaneous notation symbols, notation extended, instruments, player controls, arrows, navigation, actions, files, communication, UI, shapes, media, data, time, weather, maps, social, dev, and commerce.

## Why this library

- The output is raw SVG, not framework-specific components.
- Root exports use category-prefixed names like `noteQuarter` and `clefTreble`.
- Category subpaths use shorter names like `quarter` and `treble`.
- Both outline and filled variants are available for every icon.
- The default `viewBox` is `0 0 24 24`, but it can be overridden per call.
- The docs include framework-specific TypeScript examples for React, Vue, Svelte, Astro, and plain browser code.
