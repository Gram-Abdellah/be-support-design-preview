# Handoff: Be-Support.eu Website

## Overview
Complete multi-page marketing website for **Be-Support** — a francophone nearshore virtual-assistant service for SMEs in Belgium and France, plus a specialised **Be-Stars** hotel-classification offer. 13 content pages sharing one header and footer, fully responsive, in French (with a working FR/EN/NL language switcher on shared chrome).

## About the Design Files
The files in this bundle are **design references created in HTML** — prototypes showing the intended look, content, and behaviour. They are **not production code to copy directly**. They are authored as "Design Components" (`.dc.html`) that run on a small custom runtime (`support.js`); do **not** ship that runtime. Your task is to **recreate these designs in the target codebase's environment** (e.g. React/Next.js, Vue/Nuxt, Astro, or plain HTML/CSS) using its established patterns, routing, and i18n libraries. If no codebase exists yet, choose the most appropriate framework — a static/SSG stack (Astro or Next.js) suits this marketing site well.

Each `.dc.html` has three parts you can read as plain source: an HTML template (markup between `<x-dc>`…`</x-dc>`), a `class Component extends DCLogic` block (state/handlers/data arrays), and optional props JSON. Read the template for structure and the class for the data (services, plans, FAQ, etc.) and interactions.

## Fidelity
**High-fidelity (hifi).** Final colours, typography, spacing, layout, copy, and interactions. Recreate pixel-faithfully using the codebase's component library. All styling is inline in the templates; the design tokens below are the single source of truth.

## Design Tokens

### Colours (defined in every page's `:root`)
| Token | Hex | Role |
|---|---|---|
| `--navy` | #1e2b48 | Primary structural / dark sections, hero, footer, ink |
| `--navy-2` | #16203a | Darker navy (stats band, deadline bar variant) |
| `--rust` | #bb6a35 | Accent: CTAs, prices, links, emphasis, labels |
| `--rust-dk` | #a2582a | Accent hover |
| `--terra` | #a86a3c | Header background (brand terracotta) |
| `--terra-dk` | #8f5729 | Mobile menu / header expanded background |
| `--cream` | #f3ede2 | Dominant light background |
| `--cream-2` | #faf6ee | Slightly lighter cream (used for tinted cards) |
| `--sand` | #c9b78e | Secondary accent (overlines on dark, Be-Stars ribbon) |
| `--ink` | #1e2b48 | Body text on light |
| `--muted` | #6d7284 | Secondary text |
| `--line` | #e6ded0 | Hairline borders |
| `--line-2` | #d8cfbe | Stronger hairline |
| `--green` | #4a6b52 | Success (form confirmations) |

Colour distribution follows ~60/30/10: cream/white dominant, navy for structural contrast, rust as accent only.

### Typography
- Fonts (Google Fonts): **Spectral** (serif — headings, italic emphasis) and **Hanken Grotesk** (sans — UI/body). Tokens: `--serif:'Spectral',Georgia,serif`, `--sans:'Hanken Grotesk',system-ui,sans-serif`.
- Responsive type scale tokens (in `:root`):
  - `--fs-hero: clamp(44px,5vw,68px)` — homepage hero display heading
  - `--fs-page: clamp(32px,4vw,52px)` — subpage page titles
  - `--fs-section: clamp(30px,3.2vw,44px)` — major section headings
  - `--fs-card: 1.25rem` — card headings
  - `--fs-body: 16.5px` — body / lead text
  - `--fs-label: 11.5px` — overlines, captions (uppercase, letter-spacing .2em)
- Hero paragraph: `clamp(17px,1.25vw,20px)`, measure capped ~46ch. Nav text 14.5px.

### Spacing & layout
- Content container: `width:min(1200px,92vw);margin:0 auto` (Legal uses a narrower ~1080px reading column by design).
- Section vertical rhythm: `padding:clamp(56px,6.5vw,96px) 0`.
- Card grids: `display:grid;gap` with `grid-template-columns:repeat(auto-fit,minmax(300px,1fr))` so multiples-of-3 sections lock to **3 per row** on desktop, reflowing to 2 (tablet) then 1 (mobile).
- Border radius: cards/panels ~16–22px, buttons 10–11px, pills 999px.
- Buttons: min-height ~50px, horizontal padding 26–28px.
- Borders: 1px hairlines using `--line`/`--line-2`.
- Shadows: soft, e.g. `0 20px 50px -20px rgba(20,32,58,.35)` for dropdowns/floating cards.

## Screens / Views
All pages share `SiteHeader` (sticky, terracotta, logo + nav + Services mega-dropdown + FR/EN/NL switcher; burger < 900px) and `SiteFooter` (four-column + legal cluster + WhatsApp).

- **Home** (`Home.dc.html`): Navy hero (ambient glow blurs, noise, floating status pill with pulsing dot, animated dashboard/checklist/automation cards on the right, trust row); then stats band, "Analyser. Décider. Agir." 3-step approach, Missions (7 cards, 3-3-1), Services, "Pourquoi maintenant", "Le relais opérationnel", Tarifs preview, Nos valeurs (bordered cards), FAQ, CTA.
- **Be-Stars** (`Be-Stars.dc.html`): Sand deadline ribbon under header, navy hero, offer detail, **navy "Livrables" panel** (two-column: intro + divided checklist with check badges), pricing, FAQ.
- **Services** hub + **Service** detail template; **Approche**; **Tarifs** (3 plans, comparison table — "Non" for excluded rows, "Recommandé" highlight); **Réalisations** hub + **Réalisation** case-study template; **À propos**; **Blog** + **Article**; **Contact** (form + info + booking placeholder + **newsletter/guide capture section** at the bottom with success state); **Legal** template (narrower column, TOC collapses < 760px).

Exact copy, data arrays (services, plans, FAQ, values, missions, deliverables), and per-section layout live in each file's template + `Component` class — read them directly; they are the source of truth for content.

## Interactions & Behavior
- **Header:** Services mega-dropdown (click to toggle, caret rotates); language dropdown (desktop) / three-button row (mobile); burger menu < 900px with expandable Services list. Language choice persists (localStorage) and translates shared chrome; page-body EN/NL not yet filled.
- **Hero (Home):** entrance animations (`heroUp`), pulsing status dot, animated chart; all respect `prefers-reduced-motion`.
- **Contact form** and **newsletter capture:** front-end demo — set `sent`/`subscribed` state on submit to show a success panel. Wire to real backend (form endpoint + email/Mailchimp) and swap the Contact booking placeholder for the real Calendly/Cal.com embed.
- **Hover states** throughout use the token hovers (`--rust-dk`, cream backgrounds, border darken).
- **Responsive breakpoints:** ~900px (burger), ~760px (Legal TOC), grids reflow via `auto-fit minmax(300px,1fr)`.

## State Management
- `lang` (FR/EN/NL) — persisted, drives chrome translation dictionaries in `SiteHeader`/`SiteFooter`.
- Header: `servicesOpen`, `langOpen`, `mobileOpen`, `mobServicesOpen`.
- Contact: `sent`, `subscribed`.
- Data (services, plans, rows, faq, values, missions, deliverables) is static in each `Component` class — move to content files/CMS as appropriate.

## Assets
- Logos included: `logo-color.png`, `logo-mark-color.png` (light bg), `logo-white.png`, `logo-mark-white.png` (reversed, for terracotta/navy). Header uses `logo-mark-white.png`.
- Placeholder imagery (hero visual, team, case studies) still needs real photography.
- Fonts via Google Fonts (link in each page's `<helmet>`).
- `image-slot.js` is a prototype drag-drop placeholder — not needed in production.

## Files
`design_files/` contains all 13 page components, `SiteHeader`/`SiteFooter`, `index.dc.html` (nav hub), logos, and the runtime (`support.js` — reference only, do not ship). Open any `.dc.html` in a browser to preview.


## Changelog since previous handoff (2026-08-10)
- **New pages:** `Be-Stars-Pro.dc.html` (redesigned Be-Stars page, white-header variant via `SiteHeaderLight`), `Service-Comptable.dc.html` and `Service-Webdesign.dc.html` (dedicated service pages with hero illustrations), `CGV-Be-Stars.dc.html` (print-ready Be-Stars CGV-CGU document on the doc-page shell), `SiteHeaderLight.dc.html` (white-background header used by Be-Stars-Pro).
- **Header/footer:** colored transparent logo (`logo-color-full.png`) in header; white transparent logo (`logo-white-full.png`) in footer. Per-service hrefs in the Services dropdown and footer column (service 02 -> Service-Comptable, 05 -> Service-Webdesign).
- **Home:** "Voir tous les créneaux" links directly to Calendly; pricing cards' individual buttons replaced by one global CTA (Calendly primary, WhatsApp secondary).
- **Be-Stars (both versions):** regulatory copy corrected and verified — "arrêté conjoint n° 985-24" (not "décret"), mystery-visit section no longer claims a 5-star threshold, references list fixed (décret n° 2-23-441). Pricing note standardized: "Audit complet en 1 jour · rapport livré sous 7 jours · retour téléphonique inclus." New CGV-CGU download card before the FAQ linking to `CGV-Be-Stars.dc.html`.
- **Services hub:** per-service intros (no repeated generic opener), reworked stats/numbers section, per-card hrefs.
- **Typography tokens** applied sitewide: `--fs-hero`, `--fs-page`, `--fs-section`, `--fs-card`, `--fs-body`, `--fs-label` (values in Design Tokens above). Semantic color roles added (`--brand`, `--accent`, `--cta`, `--surface`, `--border`, `--success`, `--warning`, `--error`).
- **Assets added:** service hero illustrations (admin, compta, webdesign), Be-Stars photography (webp), processed transparent logos.
- Note: `CGV-Be-Stars.dc.html` legal text is a draft template — have counsel validate before publishing.

## Open items for the developer
1. Fill EN/NL body translations (chrome already wired).
2. Wire Contact form, newsletter capture, and real Calendly/Cal.com booking embed.
3. Replace placeholder images with real assets.
4. Choose framework + i18n + CMS/content approach per the codebase.
