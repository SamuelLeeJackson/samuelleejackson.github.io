# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal academic website for Samuel Lee Jackson, hosted on GitHub Pages at samuelleejackson.co.uk. Static site with no build system or package manager — just HTML, CSS, and JS served directly.

## Development

No build, test, or lint commands. To preview locally, open any `index.html` in a browser or use a local server (e.g. `python -m http.server`).

Deployment is automatic via GitHub Pages on push to `main`.

## Architecture

- **Static multi-page site** with four pages, each in its own directory with an `index.html`:
  - `/index.html` — About (home page)
  - `/Research/index.html` — Research & publications
  - `/Teaching/index.html` — Outreach & teaching (uses accordion panels)
  - `/CV/index.html` — Embeds `img/SamJackson_CV.pdf`

- **Frontend stack**: Bootstrap 3.4.1, jQuery 3.3.1, Font Awesome 5.8.1, Academicons, Google Fonts (Open Sans, Montserrat)
- **CSS**: `css/main.css` (global styles), `css/teaching-panels.css` (Teaching page only)
- **JS**: `js/main.js` (scroll-to-top, read-more toggle, accordion expand/collapse)
- **Analytics**: Google Analytics (gtag.js) + Cloudflare Web Analytics on every page

## Key Patterns

- **No templating** — the navbar, footer, and head boilerplate are duplicated in each page's HTML. Changes to shared elements (nav links, footer, scripts, favicon links) must be applied to all four `index.html` files.
- Subpages reference assets with `../` relative paths; root page uses `./` or bare paths.
- Active nav item is set per-page via inline `<script>` that adds `.active` and `.hvr-bubble-bottom` classes to the corresponding `<li>` element.
- Brand colors: dark blue `#20364c` (navbar, headings), accent blue `#1585cf` (links, badges, back-to-top button).
