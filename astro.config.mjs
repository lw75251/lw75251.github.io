// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readdirSync, readFileSync } from 'node:fs';
import { FORECASTS } from './src/data/forecasts.ts';

// Keep empty sections out of the sitemap until they have real content.
const hasPublishedWriting = readdirSync('./src/content/writing')
  .filter((f) => f.endsWith('.md'))
  .some((f) => !/^draft:\s*true\s*$/m.test(readFileSync(`./src/content/writing/${f}`, 'utf8')));
const hasForecasts = FORECASTS.some((f) => !f.example);

export default defineConfig({
  site: 'https://lw75251.github.io',
  // The About and Now pages were folded into the homepage; keep old links working.
  redirects: { '/about': '/', '/now': '/' },
  integrations: [
    sitemap({
      filter: (page) =>
        !(!hasPublishedWriting && page.includes('/writing')) && !(!hasForecasts && page.includes('/forecasts')),
    }),
  ],
  markdown: {
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
    },
  },
});
