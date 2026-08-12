import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LANGS, WA_LINK, DICT, type Lang } from '../i18n';
import { CONTENT_UI } from '../content/ui';

/**
 * En-tête et pied de page des pages éditoriales.
 * Volontairement autonomes : la landing garde son propre balisage, ces
 * composants ne doivent pas la faire régresser.
 */
@Component({
  selector: 'app-site-header',
  imports: [RouterLink],
  template: `
  <header class="nav">
    <div class="wrap nav-in">
      <a class="logo" [routerLink]="['/', lang()]">
        <span class="logo-mark">ف</span>
        <span class="logo-txt">Fatora<em>Bot</em></span>
      </a>
      <nav class="nav-links">
        <a [routerLink]="['/', lang()]">{{ ui().home }}</a>
        <a [routerLink]="['/', lang(), 'guides']">{{ ui().navGuides }}</a>
        <a [routerLink]="['/', lang()]" fragment="pricing">{{ d().nav.pricing }}</a>
      </nav>
      <div class="nav-right">
        <div class="lang-switch">
          @for (l of langs; track l) {
            <a [class.active]="l === lang()" [routerLink]="['/', l, 'guides']">{{ l.toUpperCase() }}</a>
          }
        </div>
        <a class="btn-gold" [href]="wa" target="_blank" rel="noopener">{{ d().nav.cta }}</a>
      </div>
    </div>
  </header>`,
  styles: [`
  :host { display: block; }
  .nav { position: sticky; top: 0; z-index: 50; background: rgba(247,248,251,.88);
    backdrop-filter: blur(14px); border-bottom: 1px solid rgba(16,19,28,.08); }
  .wrap { max-width: 1140px; margin: 0 auto; padding: 0 24px; }
  .nav-in { display: flex; align-items: center; gap: 20px; height: 66px; }
  .logo { display: flex; align-items: center; gap: 10px; text-decoration: none; color: #10131c; }
  .logo-mark { width: 34px; height: 34px; border-radius: 10px; display: grid; place-items: center;
    background: linear-gradient(135deg,#e8b64c,#c9902a); color: #17120a; font-weight: 800; font-size: 1.1rem; }
  .logo-txt { font-family: 'Sora','Tajawal',sans-serif; font-weight: 800; letter-spacing: -.02em;
    em { font-style: normal; color: #c9902a; } }
  .nav-links { display: flex; gap: 22px; margin-inline-start: auto;
    a { color: #4a5163; text-decoration: none; font-size: .93rem; font-weight: 600;
      &:hover { color: #10131c; } } }
  .nav-right { display: flex; align-items: center; gap: 14px; }
  .lang-switch { display: flex; gap: 2px; padding: 3px; border-radius: 999px; background: #eceef4;
    a { padding: 5px 9px; border-radius: 999px; font-size: .72rem; font-weight: 700; color: #6b7284;
      text-decoration: none;
      &.active { background: #fff; color: #10131c; box-shadow: 0 1px 3px rgba(16,19,28,.12); } } }
  .btn-gold { padding: 9px 17px; border-radius: 999px; font-weight: 700; font-size: .87rem;
    text-decoration: none; color: #17120a; background: linear-gradient(135deg,#e8b64c,#c9902a);
    box-shadow: 0 6px 18px rgba(201,144,42,.32); white-space: nowrap; }
  @media (max-width: 860px) {
    .nav-links { display: none; }
    .wrap { padding: 0 16px; }
  }
  @media (max-width: 520px) { .btn-gold { display: none; } }
  `]
})
export class SiteHeader {
  lang = input<Lang>('fr');
  readonly langs = LANGS;
  readonly wa = WA_LINK;
  d = computed(() => DICT[this.lang()]);
  ui = computed(() => CONTENT_UI[this.lang()]);
}

@Component({
  selector: 'app-site-footer',
  imports: [RouterLink],
  template: `
  <footer class="footer">
    <div class="wrap foot-in">
      <div>
        <a class="logo" [routerLink]="['/', lang()]">
          <span class="logo-mark">ف</span>
          <span class="logo-txt">Fatora<em>Bot</em></span>
        </a>
        <p class="tag">{{ d().footer.tag }}</p>
      </div>
      <div class="foot-links">
        <a [routerLink]="['/', lang(), 'guides']">{{ ui().navGuides }}</a>
        <a [routerLink]="['/', lang(), 'a-propos']">{{ aboutLabel() }}</a>
        <a href="https://bot.swiviq.com/privacy" target="_blank" rel="noopener">{{ d().footer.privacy }}</a>
        <a [href]="wa" target="_blank" rel="noopener">WhatsApp</a>
        <a href="mailto:contact&#64;swiviq.com">contact&#64;swiviq.com</a>
      </div>
    </div>
    <div class="wrap foot-base">
      <span>© 2026 Fatora-Bot · Swiviq — {{ d().footer.rights }}</span>
      <span>{{ d().footer.made }}</span>
    </div>
  </footer>`,
  styles: [`
  :host { display: block; }
  .footer { background: #10131c; color: #cfd4e0; padding: 54px 0 26px; margin-top: 72px; }
  .wrap { max-width: 1140px; margin: 0 auto; padding: 0 24px; }
  .foot-in { display: flex; justify-content: space-between; gap: 34px; flex-wrap: wrap;
    padding-bottom: 28px; border-bottom: 1px solid rgba(255,255,255,.09); }
  .logo { display: flex; align-items: center; gap: 10px; text-decoration: none; color: #fff; }
  .logo-mark { width: 34px; height: 34px; border-radius: 10px; display: grid; place-items: center;
    background: linear-gradient(135deg,#e8b64c,#c9902a); color: #17120a; font-weight: 800; }
  .logo-txt { font-family: 'Sora','Tajawal',sans-serif; font-weight: 800;
    em { font-style: normal; color: #e8b64c; } }
  .tag { margin-top: 12px; max-width: 420px; font-size: .9rem; line-height: 1.7; color: #98a0b2; }
  .foot-links { display: flex; flex-direction: column; gap: 10px;
    a { color: #cfd4e0; text-decoration: none; font-size: .9rem; &:hover { color: #e8b64c; } } }
  .foot-base { display: flex; justify-content: space-between; gap: 14px; flex-wrap: wrap;
    padding-top: 22px; font-size: .82rem; color: #7c8496; }
  @media (max-width: 720px) { .wrap { padding: 0 16px; } }
  `]
})
export class SiteFooter {
  lang = input<Lang>('fr');
  readonly wa = WA_LINK;
  d = computed(() => DICT[this.lang()]);
  ui = computed(() => CONTENT_UI[this.lang()]);
  aboutLabel = computed(
    () => ({ fr: 'À propos', ar: 'من نحن', en: 'About', es: 'Quiénes somos' })[this.lang()]
  );
}
