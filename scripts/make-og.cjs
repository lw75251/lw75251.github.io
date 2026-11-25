// Regenerates public/og.png (the link-preview image).
// Usage: node scripts/make-og.cjs   (needs Playwright + Chromium installed)
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const font = (p) => 'file://' + path.join(root, 'node_modules/@fontsource-variable', p);

const html = `<!doctype html><html><head><style>
@font-face { font-family: N; src: url(${font('newsreader/files/newsreader-latin-opsz-normal.woff2')}); }
@font-face { font-family: N; font-style: italic; src: url(${font('newsreader/files/newsreader-latin-opsz-italic.woff2')}); }
@font-face { font-family: I; src: url(${font('inter/files/inter-latin-wght-normal.woff2')}); }
body { margin: 0; width: 1200px; height: 630px; background: #f7f5f0; color: #1c1b19; font-family: I; }
.c { padding: 80px 90px; box-sizing: border-box; height: 100%; display: flex; flex-direction: column; }
.n { font-family: N; font-weight: 500; font-size: 40px; display: flex; align-items: center; gap: 16px; }
.k { font-family: ui-monospace, monospace; letter-spacing: .08em; text-transform: uppercase; color: #5f5d57; font-size: 20px; margin-top: 10px; }
.l { margin-top: auto !important; margin-bottom: 20px; font-family: N; font-size: 60px; line-height: 1.15; margin-top: 46px; max-width: 980px; }
.l em { color: #b83c0a; }
</style></head><body><div class="c">
<div class="n"><svg width="34" height="34" viewBox="0 0 20 20"><circle cx="10" cy="10" r="8.5" fill="none" stroke="#b83c0a" stroke-width="1.5" opacity="0.45"/><circle cx="10" cy="10" r="4" fill="#b83c0a"/></svg><span>Leon Wu</span></div><div class="k">Staff Data Scientist · Early Replit</div>
<div class="l">I rebuilt and scaled <em>Oracle</em>, Replit's internal analytics agent, to over half the company.</div>
</div></body></html>`;

(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
  const tmp = path.join(root, 'node_modules/.og-card.html');
  fs.writeFileSync(tmp, html);
  await p.goto('file://' + tmp, { waitUntil: 'load' });
  await p.evaluate(() => document.fonts.ready);
  await p.screenshot({ path: path.join(root, 'public/og.png') });
  fs.unlinkSync(tmp);
  await b.close();
  console.log('wrote public/og.png');
})();
