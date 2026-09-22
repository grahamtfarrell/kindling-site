# Kindling

Kindling is a storytelling and organic-marketing studio for founders: "You build your company. We'll tell your story." This repo is the Kindling marketing website.

## What's here

- `site/index.html` — the approved landing-page prototype (single file: HTML, CSS and vanilla JS inline). Sections: hero, "Organic marketing matters" story cards, the process-rail stage, the Work photo grid, closing CTA + footer. It includes a "viewfinder" motion layer (film grain, drifting photos, running timecodes, scan reveal) that respects `prefers-reduced-motion`.
- `site/img/` — photography and logos used by the prototype. Photos are low-res stand-ins; replace with full-resolution originals before launch (see `design-system/imagery.md`).
- `design-system/` — the Kindling brand book, exported from the Kindling design system:
  - `README.md` — voice, visual foundations, logo rules. **Read this before any UI work.**
  - `tokens.json` — colors, type scale, spacing, radius, borders (source of truth for values).
  - `imagery.md`, `logos.md`, `photography.md` — image and logo usage.
  - `components/*.md` — guidelines for Button, NavBar, Headline, PhotoFrame, StoryCard, ChevronList, LogoStrip, ProcessRail, Logo.
  - `components/index.d.ts` + `reference.css` — the component API and CSS from the design-system prototype (reference only).

## Brand rules that matter most

- Colors: `ink #381105` for all text (never pure black), `paper #FAFAFA` ground, `cream #FFF5E5` brand white, `orange #FF6800` is the only accent. `amber`, `olive` are supporting fills, never text.
- Orange on paper is only 2.78:1 — use it at display sizes, fills and markers; small text stays `ink`.
- Fonts (Google Fonts): Syne (display), Instrument Sans (body/UI), Texturina italic (the orange accent phrase), Roboto Mono (uppercase captions/labels).
- Square corners everywhere, 1px hairline outlines, no shadows, no gradients, no emoji, no icon sets. The only glyph is the orange chevron marker.
- Headlines are two beats: plain Syne statement, then a Texturina-italic orange turn.
- Never retype the logo in a font; use the PNGs in `site/img/`.

## Open decisions (ask Graham before assuming)

- Framework / hosting for the production site (the prototype is plain static HTML).
- Real partner names for the "Trusted by" strip (current names are placeholders).
- Contact destination for "Talk to Us" (currently `mailto:hello@kindling.example`) and whether "Log in" is needed.
- `paper` (#FAFAFA) vs `cream` (#FFF5E5) as the page ground.

## Preview locally

`cd site && python3 -m http.server 8000` then open http://localhost:8000
