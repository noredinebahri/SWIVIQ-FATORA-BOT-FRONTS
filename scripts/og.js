// Génère les images Open Graph 1200×630 (une par langue) avec Chrome headless.
// Usage : node scripts/og.js    (réutilise puppeteer installé dans center_atlas_back)
const path = require('path');
const fs = require('fs');
const puppeteer = require(path.join('D:', 'start', 'center_atlas_back', 'node_modules', 'puppeteer'));

const OUT = path.join(__dirname, '..', 'public');

const T = {
  fr: {
    dir: 'ltr', badge: 'MAROC · FACTURATION',
    h1: 'Vos factures<br><span>par la voix</span>, sur WhatsApp',
    sub: 'Dictez en darija, recevez un PDF conforme',
    pills: ['ICE', 'IF', 'TVA', 'Cachet'],
    cta: 'wa.me · +212 691 02 08 05'
  },
  ar: {
    dir: 'rtl', badge: 'المغرب · الفوترة',
    h1: 'الفواتير ديالك<br><span>بالصوت</span>، على الواتساب',
    sub: 'دكتي بالدارجة، وتوصل بـPDF قانوني',
    pills: ['ICE', 'IF', 'TVA', 'الطابع'],
    cta: 'wa.me · +212 691 02 08 05'
  },
  en: {
    dir: 'ltr', badge: 'MOROCCO · INVOICING',
    h1: 'Your invoices<br><span>by voice</span>, on WhatsApp',
    sub: 'Dictate in Darija, get a compliant PDF',
    pills: ['ICE', 'IF', 'VAT', 'Stamp'],
    cta: 'wa.me · +212 691 02 08 05'
  },
  es: {
    dir: 'ltr', badge: 'MARRUECOS · FACTURACIÓN',
    h1: 'Tus facturas<br><span>por voz</span>, en WhatsApp',
    sub: 'Dicta en dariya, recibe un PDF conforme',
    pills: ['ICE', 'IF', 'IVA', 'Sello'],
    cta: 'wa.me · +212 691 02 08 05'
  }
};

const html = (t) => `<!doctype html><html dir="${t.dir}"><head><meta charset="utf-8"><style>
*{margin:0;padding:0;box-sizing:border-box}
body{width:1200px;height:630px;overflow:hidden;position:relative;
  background:#0b0d14;color:#fff;
  font-family:${t.dir === 'rtl' ? "'Tahoma','Segoe UI'" : "'Segoe UI','Arial'"},sans-serif}
.bg{position:absolute;inset:0;
  background:
    radial-gradient(620px 420px at 12% 12%, rgba(232,182,76,.28), transparent 62%),
    radial-gradient(560px 420px at 92% 78%, rgba(37,211,102,.22), transparent 62%),
    linear-gradient(135deg,#0b0d14,#141826)}
.grid{position:absolute;inset:0;opacity:.14;
  background-image:linear-gradient(rgba(255,255,255,.5) 1px,transparent 1px),
    linear-gradient(90deg,rgba(255,255,255,.5) 1px,transparent 1px);background-size:56px 56px;
  -webkit-mask-image:radial-gradient(circle at 50% 40%,#000,transparent 72%)}
.in{position:relative;height:100%;display:flex;align-items:center;
  padding:0 78px;gap:56px}
.copy{flex:1}
.logo{display:flex;align-items:center;gap:16px;margin-bottom:30px}
.mark{width:66px;height:66px;border-radius:20px;display:flex;align-items:center;justify-content:center;
  background:linear-gradient(135deg,#e8b64c,#c9902a);color:#17120a;font-size:36px;font-weight:800;
  font-family:'Tahoma',sans-serif;box-shadow:0 12px 34px rgba(232,182,76,.4)}
.name{font-size:34px;font-weight:800;letter-spacing:-.5px}
.name i{font-style:normal;color:#e8b64c}
.badge{display:inline-block;padding:9px 18px;border-radius:999px;font-size:17px;font-weight:700;
  letter-spacing:2px;color:#e8b64c;background:rgba(232,182,76,.13);
  border:1px solid rgba(232,182,76,.42);margin-bottom:22px}
h1{font-size:54px;line-height:1.14;font-weight:800;letter-spacing:-1.6px;margin-bottom:18px}
h1 span{background:linear-gradient(92deg,#e8b64c,#f6dc9a 55%,#25d366);
  -webkit-background-clip:text;background-clip:text;color:transparent}
.sub{font-size:26px;color:#aeb4c6;margin-bottom:28px}
.pills{display:flex;gap:12px;flex-wrap:wrap}
.pill{padding:11px 22px;border-radius:999px;font-size:19px;font-weight:700;
  background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.16)}
.cta{display:inline-flex;align-items:center;gap:13px;margin-top:26px;
  padding:14px 26px;border-radius:999px;font-size:21px;font-weight:800;color:#fff;
  background:linear-gradient(135deg,#25d366,#128c7e);box-shadow:0 14px 36px rgba(37,211,102,.42)}
.dot{width:12px;height:12px;border-radius:50%;background:#fff}
.phone{width:300px;height:520px;border-radius:40px;background:#fff;padding:14px;
  box-shadow:0 40px 90px rgba(0,0,0,.55);flex-shrink:0;transform:rotate(3deg)}
.scr{height:100%;border-radius:28px;background:#efeae2;padding:16px 12px;display:flex;
  flex-direction:column;gap:11px}
.b{max-width:88%;padding:11px 14px;border-radius:15px;font-size:15px;color:#111b21;
  box-shadow:0 1px 2px rgba(0,0,0,.1)}
.me{align-self:flex-start;background:#d9fdd3}
.bt{align-self:flex-end;background:#fff}
.eq{display:flex;align-items:center;gap:3px;height:20px}
.eq i{width:3px;border-radius:2px;background:#128c7e}
.pdf{display:flex;align-items:center;gap:10px;align-self:flex-end;background:#fff;
  padding:12px 14px;border-radius:15px;box-shadow:0 1px 2px rgba(0,0,0,.1)}
.pdfi{width:36px;height:36px;border-radius:9px;background:rgba(201,144,42,.16);color:#c9902a;
  display:flex;align-items:center;justify-content:center;font-size:19px;font-weight:800}
.pdft{font-size:13px;color:#111b21;font-weight:700}
.pdfs{font-size:11px;color:#128c7e}
</style></head><body>
<div class="bg"></div><div class="grid"></div>
<div class="in">
  <div class="copy">
    <div class="logo"><div class="mark">&#1601;</div><div class="name">Fatora<i>Bot</i></div></div>
    <div class="badge">${t.badge}</div>
    <h1>${t.h1}</h1>
    <div class="sub">${t.sub}</div>
    <div class="pills">${t.pills.map((p) => `<span class="pill">${p}</span>`).join('')}</div>
    <div class="cta"><span class="dot"></span>${t.cta}</div>
  </div>
  <div class="phone"><div class="scr">
    <div class="b me"><div class="eq">${[10, 16, 8, 20, 12, 18, 9, 15, 11, 19, 7, 14].map((h) => `<i style="height:${h}px"></i>`).join('')}</div></div>
    <div class="b bt" dir="rtl">فهمت، فاتورة لأحمد: ثلاثة بيبان بألف وخمسميا درهم. المجموع 5 400 درهم.</div>
    <div class="b me">Wakha</div>
    <div class="pdf"><div class="pdfi">&#8595;</div><div>
      <div class="pdft">FAT-2026-0042.pdf</div><div class="pdfs">5 400,00 MAD</div></div></div>
  </div></div>
</div>
</body></html>`;

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 });
  for (const [lang, t] of Object.entries(T)) {
    await page.setContent(html(t), { waitUntil: 'load' });
    const file = path.join(OUT, `og-${lang}.png`);
    await page.screenshot({ path: file, type: 'png' });
    console.log('✓', file, (fs.statSync(file).size / 1024).toFixed(0) + ' kB');
  }
  await browser.close();
})();
