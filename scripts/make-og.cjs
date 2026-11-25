// Regenerates public/og.png (the link-preview image) from the built homepage.
// Usage: npm run build && node scripts/make-og.cjs   (needs Playwright + Chromium installed)
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const home = fs.readFileSync(path.join(root, 'dist/index.html'), 'utf8');
const signal = home.match(/<svg[^>]*hero-signal[\s\S]*?<\/svg>/)[0];
const font = (p) => 'file://' + path.join(root, 'node_modules/@fontsource-variable', p);

const html = `<!doctype html><html><head><style>
@font-face { font-family: N; src: url(${font('newsreader/files/newsreader-latin-opsz-normal.woff2')}); }
@font-face { font-family: N; font-style: italic; src: url(${font('newsreader/files/newsreader-latin-opsz-italic.woff2')}); }
@font-face { font-family: I; src: url(${font('inter/files/inter-latin-wght-normal.woff2')}); }
body { margin: 0; width: 1200px; height: 630px; background: #f7f5f0; color: #1c1b19; font-family: I; }
.c { padding: 80px 90px; box-sizing: border-box; height: 100%; display: flex; flex-direction: column; }
.n { font-weight: 600; font-size: 30px; }
.k { font-family: ui-monospace, monospace; letter-spacing: .08em; text-transform: uppercase; color: #5f5d57; font-size: 20px; margin-top: 10px; }
.l { font-family: N; font-size: 60px; line-height: 1.15; margin-top: 46px; max-width: 980px; }
.l em { color: #b83c0a; }
svg { width: 100%; height: auto; margin-top: auto; color: #9b978e; }
.signal-dot { fill: #b83c0a } .signal-ring { fill: none; stroke: #b83c0a; opacity: .35 }
</style></head><body><div class="c">
<div class="n">Leon Wu</div><div class="k">Data science · data engineering · AI for data</div>
<div class="l">I built <em>Oracle</em>, Replit's internal analytics agent. Over half the company asks it questions every week.</div>
${signal.replace(/class="[^"]*"/, '')}
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
