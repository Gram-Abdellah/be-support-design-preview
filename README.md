# Be-Support — website

Production marketing website for **Be-Support**, a francophone nearshore virtual-assistant
service for SMEs in Belgium and France (plus the **Be-Stars** hotel-classification offer),
operated under the Bema Consulting brand from Essaouira, Morocco.

This is a real Next.js implementation, ported page-by-page from the design reference bundle in
`design_handoff_be_support/` (kept in this repo for reference — see its own README for the
original design tokens, copy, and interaction notes).

## Stack

- [Next.js 15](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) — design tokens (colors, type scale, spacing) wired
  through the `@theme inline` block in `app/globals.css`
- Fonts via `next/font/google`: **Spectral** (serif, headings/emphasis) and **Hanken Grotesk**
  (sans, UI/body)
- All content is static/prerendered (`next build` outputs fully static HTML for every route)

## Getting started

```bash
npm install
npm run dev      # start the dev server on http://localhost:3000
npm run build    # production build (static export of every route)
npm run start    # serve the production build
npm run lint     # eslint
```

## Project structure

- `app/` — routes (App Router). Every page has its own `metadata` (title/description).
- `components/` — shared UI: `site-header.tsx` / `site-footer.tsx` (client components, own the
  language switcher and mobile menu), `page-hero.tsx` / `cta-banner.tsx` (shared section
  layouts), `faq-accordion.tsx`, `contact-form.tsx`, `newsletter-*-form.tsx`,
  `case-studies-grid.tsx`, `blog-grid.tsx`, `legal-page.tsx`.
- `content/*.ts` — typed content arrays/objects (services, plans, FAQ, values, missions, case
  studies, blog posts, Be-Stars data, legal copy), ported verbatim from the design source. Pages
  import from these rather than hardcoding copy inline.
- `lib/i18n.ts` — FR/EN/NL dictionaries for the shared header/footer chrome.
- `lib/lang-provider.tsx` — client-side language context; persists the chosen language to
  `localStorage['bs-lang']` and keeps `SiteHeader`/`SiteFooter` in sync.
- `public/` — static assets, including the four Be-Support logo variants.

## Routes

| Route | Notes |
|---|---|
| `/` | Home |
| `/be-stars` | Be-Stars hotel-classification offer |
| `/services` | Services hub |
| `/services/[slug]` | Service detail (6 services, slugs from `content/services.ts`) |
| `/approche` | Approach / methodology |
| `/tarifs` | Pricing |
| `/realisations` | Case studies hub (client-side category filter) |
| `/realisations/[slug]` | Case study detail (6 case studies) |
| `/a-propos` | About |
| `/blog` | Blog hub (featured post + filterable grid + newsletter signup) |
| `/blog/[slug]` | Article detail (7 posts) |
| `/contact` | Contact form + booking placeholder + newsletter/guide capture |
| `/mentions-legales`, `/politique-de-confidentialite`, `/cgv`, `/cgu` | Legal docs, all rendered by the shared `LegalPage` component with per-doc content in `content/legal.ts` |

## i18n scope

Only the shared header/footer chrome (`SiteHeader`, `SiteFooter`) is translated FR/EN/NL, matching
the scope of the original design handoff. All page body content (headlines, paragraphs, service
descriptions, etc.) is French-only by design — there are no `/en/` or `/nl/` routes.

## Forms

`ContactForm`, `NewsletterGuideForm` (Contact page) and `NewsletterInlineForm` (Blog page) are
front-end-only demos: submitting flips local component state to show a success panel. Each has a
`// TODO:` comment marking where a real backend call would go.

## Open items for the next developer

1. Fill in EN/NL **body** translations if the page content itself needs to be multilingual (the
   header/footer chrome is already wired for FR/EN/NL).
2. Wire `ContactForm` and the newsletter forms to a real backend (form endpoint +
   email/CRM/Mailchimp-style integration), and replace the Contact page's booking placeholder
   with a real Calendly/Cal.com embed.
3. Replace placeholder imagery (hero/service/case-study/team visuals, currently CSS gradient
   placeholders) with real photography.
4. Decide whether a CMS should back `content/*.ts` (e.g. for the blog) or whether static
   TypeScript content files remain the source of truth.
5. Confirm/replace the placeholder legal copy in `content/legal.ts` (mentions légales, politique
   de confidentialité, CGV, CGU) with text reviewed by counsel — it is written to be
   plausible/standard but is not legal advice.

## Deviations from the design reference

- The header's responsive desktop/mobile split (~900px) is implemented with a Tailwind
  breakpoint (`min-[900px]:`) rather than a JS `window.innerWidth` resize listener, which avoids
  a hydration/layout-shift flash on load while producing the same visual behavior.
- A couple of pages/sections that only had one fully-specified example in the design source
  (e.g. the Service detail template, the Realisation case-study template, 6 of 7 blog article
  bodies) were extended with additional plausible copy in the same voice/structure to cover all
  service/case-study/article slugs, since the production site needs a real page per slug.
