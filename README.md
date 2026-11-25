# lw75251.github.io

Leon Wu's personal site, built with [Astro](https://astro.build). Plain CSS, no client-side JavaScript.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321, shows drafts
npm run build    # production build into dist/, drafts excluded
```

## Writing

Add a Markdown file to `src/content/writing/`:

```md
---
title: "Post title"
description: "One sentence for lists, RSS and link previews."
date: 2026-12-01
draft: true     # visible in `npm run dev` only; listed as "On the desk" on the homepage
---
```

Set `draft: false` to publish. Until at least one essay is published, Writing stays out of the
nav, off the homepage and out of the sitemap. Highlighted `TODO` markers in drafts show where real
details are needed; remove them all before publishing. Every post gets its own "signal" line (`src/components/Signal.astro`),
seeded from its filename, so it stays the same over time.

## Forecasts

Public, dated predictions live in `src/data/forecasts.ts`. Add `{ id, made, resolves, claim, p }`,
and later `outcome` + `resolvedOn`; never change `p` afterwards. The `/forecasts` page scores them
(Brier score + calibration plot). Entries marked `example: true` are dev-only placeholders; the page
and nav link go live as soon as one real forecast exists, and a calibration line appears on the
homepage after 5 resolved forecasts.

## Other content

- Homepage intro, selected work, side projects: `src/pages/index.astro`
- About + off-the-clock: `src/pages/about.astro`
- Now page (update it monthly): `src/pages/now.astro`
- Links, email, page title and meta description: `src/site.ts`
- Link-preview image: `public/og.png`. Regenerate with `npm run build && npm run og` after changing the headline.

## Deploy

Pushing to `master` runs `.github/workflows/deploy.yml`, which builds and publishes to GitHub Pages.
In the repo settings, **Pages → Build and deployment → Source** must be set to **GitHub Actions**.
