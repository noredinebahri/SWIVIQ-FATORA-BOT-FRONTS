import { Component, computed, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LANGS, WA_LINK, DICT, type Lang } from '../i18n';
import { CONTENT_UI } from '../content/ui';
import { ABOUT_LABEL, FOOT_GROUPS, apiMenu, legalMenu, siteMenu } from './site-links';

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
        <img class="logo-mark" src="/logo.svg" alt="" width="34" height="34">
        <span class="logo-txt">Fatora<em>Bot</em></span>
      </a>
      <!-- Mêmes entrées, même ordre que le menu de la landing : un seul menu
           pour tout le site. Les ancres renvoient aux sections de l'accueil. -->
      <nav class="nav-links" [class.open]="open()">
        <a [routerLink]="['/', lang()]" fragment="demo" (click)="open.set(false)">{{ d().nav.features }}</a>
        <a [routerLink]="['/', lang()]" fragment="how" (click)="open.set(false)">{{ d().nav.how }}</a>
        <a [routerLink]="['/', lang()]" fragment="pricing" (click)="open.set(false)">{{ d().nav.pricing }}</a>
        <a [routerLink]="['/', lang()]" fragment="faq" (click)="open.set(false)">{{ d().nav.faq }}</a>
        <a [routerLink]="['/', lang(), 'guides']" (click)="open.set(false)">{{ ui().navGuides }}</a>
        <div class="dd">
          <a class="dd-top" [routerLink]="['/', lang(), 'api']" (click)="open.set(false)">API <span class="caret">▾</span></a>
          <div class="dd-menu">
            @for (it of apiLinks(); track it.path) {
              <a [routerLink]="it.path" (click)="open.set(false)">{{ it.label }}</a>
            }
          </div>
        </div>
        <a [routerLink]="['/', lang(), 'a-propos']" (click)="open.set(false)">{{ aboutLabel() }}</a>
      </nav>
      <div class="nav-right">
        <div class="lang-switch">
          @for (l of langs; track l) {
            <a [class.active]="l === lang()" [routerLink]="langHref(l)">{{ l.toUpperCase() }}</a>
          }
        </div>
        <a class="btn-gold" [href]="wa" target="_blank" rel="noopener">{{ d().nav.cta }}</a>
        <button class="burger" (click)="open.set(!open())" aria-label="menu">☰</button>
      </div>
    </div>
  </header>`,
  styles: [`
  :host { display: block; }
  .nav { position: sticky; top: 0; z-index: 50; background: rgba(247,248,251,.88);
    backdrop-filter: blur(14px); border-bottom: 1px solid rgba(16,19,28,.08); }
  /* Même gabarit que le header de la landing : 1180px, items sur UNE ligne. */
  .wrap { max-width: 1180px; margin: 0 auto; padding: 0 24px; }
  .nav-in { display: flex; align-items: center; flex-wrap: nowrap; gap: 16px; height: 68px; }
  .logo { display: flex; align-items: center; gap: 10px; text-decoration: none; color: #10131c;
    flex-shrink: 0; }
  .logo-mark { width: 34px; height: 34px; display: block; flex-shrink: 0; }
  .logo-txt { font-family: 'Sora','Tajawal',sans-serif; font-weight: 800; letter-spacing: -.02em;
    em { font-style: normal; color: #c9902a; } }
  .nav-links { display: flex; align-items: center; flex-wrap: nowrap; gap: 18px;
    margin-inline-start: auto;
    a { color: #4a5163; text-decoration: none; font-size: .9rem; font-weight: 600;
      white-space: nowrap;
      &:hover { color: #10131c; } } }
  .dd { position: relative;
    .caret { font-size: .7em; opacity: .6; }
    .dd-menu { position: absolute; top: 100%; inset-inline-start: -14px; min-width: 250px;
      display: none; flex-direction: column; padding: 10px 0; border-radius: 12px;
      background: #fff; border: 1px solid rgba(16,19,28,.1);
      box-shadow: 0 16px 40px rgba(16,19,28,.14);
      a { display: block; padding: 9px 18px; font-size: .88rem;
        &:hover { background: #f4f5f9; } } }
    &:hover .dd-menu, &:focus-within .dd-menu { display: flex; } }
  .nav-right { display: flex; align-items: center; gap: 12px; flex-shrink: 0; }
  /* Même habillage que le sélecteur de la landing : blanc, actif doré. */
  .lang-switch { display: flex; padding: 3px; border-radius: 999px; background: #fff;
    border: 1px solid rgba(16,19,28,.1); box-shadow: 0 2px 10px rgba(16,19,28,.06);
    a { padding: 6px 10px; border-radius: 999px; font-size: .78rem; font-weight: 700; color: #6b7284;
      text-decoration: none;
      &.active { background: linear-gradient(135deg,#e8b64c,#c9902a); color: #17120a; } } }
  .btn-gold { padding: 9px 17px; border-radius: 999px; font-weight: 700; font-size: .87rem;
    text-decoration: none; color: #17120a; background: linear-gradient(135deg,#e8b64c,#c9902a);
    box-shadow: 0 6px 18px rgba(201,144,42,.32); white-space: nowrap; }
  .burger { display: none; background: none; border: 0; color: #10131c; font-size: 1.5rem;
    cursor: pointer; padding: 4px 6px; }
  /* Sous 1120px le menu complet ne tient plus sur une ligne : il passe en
     panneau vertical ouvert par le burger — même comportement que la landing. */
  @media (max-width: 1120px) {
    .nav-links { display: none; position: fixed; top: 68px; inset-inline: 0;
      flex-direction: column; align-items: stretch; gap: 16px; padding: 22px;
      background: rgba(255,255,255,.98); border-bottom: 1px solid rgba(16,19,28,.1);
      box-shadow: 0 18px 40px rgba(16,19,28,.10);
      &.open { display: flex; }
      .dd { .dd-top { display: none; }
        .dd-menu { display: flex; position: static; min-width: 0; padding: 0;
          border: 0; box-shadow: none; background: none; gap: 16px;
          a { padding: 0; font-size: .9rem; } } } }
    .burger { display: block; }
  }
  @media (max-width: 860px) { .wrap { padding: 0 16px; } }
  @media (max-width: 520px) { .btn-gold { display: none; } }
  `]
})
export class SiteHeader {
  lang = input<Lang>('fr');
  /**
   * Cible du sélecteur de langue, par langue : la page équivalente quand elle
   * existe. À défaut, on retombe sur le hub des guides — prérendu en 4 langues.
   */
  alt = input<Partial<Record<Lang, string>>>({});
  open = signal(false);
  readonly langs = LANGS;
  readonly wa = WA_LINK;
  d = computed(() => DICT[this.lang()]);
  ui = computed(() => CONTENT_UI[this.lang()]);
  apiLinks = computed(() => apiMenu(this.lang()));
  aboutLabel = computed(() => ABOUT_LABEL[this.lang()]);

  langHref(l: Lang): string {
    return this.alt()[l] ?? `/${l}/guides`;
  }
}

@Component({
  selector: 'app-site-footer',
  imports: [RouterLink],
  template: `
  <footer class="footer">
    <div class="wrap foot-in">
      <div>
        <a class="logo" [routerLink]="['/', lang()]">
          <img class="logo-mark" src="/logo.svg" alt="" width="34" height="34">
          <span class="logo-txt">Fatora<em>Bot</em></span>
        </a>
        <p class="tag">{{ d().footer.tag }}</p>
      </div>
      <div class="foot-col">
        <h4>{{ groups().site }}</h4>
        @for (it of siteLinks(); track it.path) {
          <a [routerLink]="it.path">{{ it.label }}</a>
        }
        <a [routerLink]="['/', lang()]" fragment="pricing">{{ d().nav.pricing }}</a>
      </div>
      <div class="foot-col">
        <h4>{{ groups().api }}</h4>
        @for (it of apiLinks(); track it.path) {
          <a [routerLink]="it.path">{{ it.label }}</a>
        }
      </div>
      <div class="foot-col">
        <h4>{{ groups().contact }}</h4>
        <a [href]="wa" target="_blank" rel="noopener">WhatsApp</a>
        <a href="mailto:contact&#64;swiviq.com">contact&#64;swiviq.com</a>
        @for (it of legalLinks(); track it.path) {
          <a [routerLink]="it.path">{{ it.label }}</a>
        }
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
  .logo-mark { width: 34px; height: 34px; display: block; flex-shrink: 0; }
  .logo-txt { font-family: 'Sora','Tajawal',sans-serif; font-weight: 800;
    em { font-style: normal; color: #e8b64c; } }
  .tag { margin-top: 12px; max-width: 320px; font-size: .9rem; line-height: 1.7; color: #98a0b2; }
  .foot-col { display: flex; flex-direction: column; gap: 10px; min-width: 150px;
    h4 { margin: 0 0 4px; font-size: .78rem; font-weight: 800; letter-spacing: .08em;
      text-transform: uppercase; color: #7c8496; }
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
  groups = computed(() => FOOT_GROUPS[this.lang()]);
  apiLinks = computed(() => apiMenu(this.lang()));
  siteLinks = computed(() => siteMenu(this.lang(), this.ui().home, this.ui().navGuides));
  legalLinks = computed(() => legalMenu(this.lang()));
}
