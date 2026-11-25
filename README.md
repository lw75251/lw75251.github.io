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

Set `draft: false` to publish. Every post gets its own "signal" line (`src/components/Signal.astro`),
seeded from its filename, so it stays the same over time.

## Other content

- Homepage intro, selected work, side projects: `src/pages/index.astro`
- About + off-the-clock: `src/pages/about.astro`
- Now page (update it monthly): `src/pages/now.astro`
- Links and email: `src/site.ts`

## Deploy

Pushing to `master` runs `.github/workflows/deploy.yml`, which builds and publishes to GitHub Pages.
In the repo settings, **Pages → Build and deployment → Source** must be set to **GitHub Actions**.
