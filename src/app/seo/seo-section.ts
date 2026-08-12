import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Ico } from '../icon';
import { SEO } from './seo-i18n';
import { WA_LINK, type Lang } from '../i18n';
import { CONTENT_UI } from '../content/ui';
import { HOME_LINKS, LINK_LANG } from '../content/links';

/** Section éditoriale : contexte réglementaire + secteurs + couverture géographique (SEO) */
@Component({
  selector: 'app-seo-section',
  imports: [Ico, RouterLink],
  template: `
  <section id="guide" class="seo">
    <div class="wrap">
      <article class="art">
        <h2>{{ d().title }}</h2>
        <p class="lead">{{ d().intro }}</p>
        @for (b of d().blocks; track b.h) {
          <h3>{{ b.h }}</h3>
          <p>{{ b.p }}</p>
        }
      </article>

      <h3 class="sec-t">{{ d().sectorsTitle }}</h3>
      <p class="sec-i">{{ d().sectorsIntro }}</p>
      <div class="sectors">
        @for (s of d().sectors; track s.t) {
          <div class="sec">
            <span class="dot"><ico name="check" [size]="14"/></span>
            <div><b>{{ s.t }}</b><i>{{ s.d }}</i></div>
          </div>
        }
      </div>

      <div class="cities">
        <h3>{{ d().citiesTitle }}</h3>
        <p>{{ d().cities }}</p>
      </div>

      @if (guides().length) {
        <div class="guides">
          <h3>{{ ui().hubTitle }}</h3>
          <ul>
            @for (g of guides(); track g.slug) {
              <li><a [routerLink]="['/', linkLang(), g.section, g.slug]">{{ g.label }}</a></li>
            }
          </ul>
          <a class="all" [routerLink]="['/', lang(), 'guides']">{{ ui().hubTitle }} →</a>
        </div>
      }

      <div class="seo-cta">
        <p>{{ d().ctaText }}</p>
        <a class="btn" [href]="wa" target="_blank" rel="noopener">{{ d().ctaBtn }} →</a>
      </div>
    </div>
  </section>`,
  styles: [`
  :host { display: block; }
  .seo { padding: 84px 0; background: #fff; border-block: 1px solid rgba(16,19,28,.09); }
  .wrap { max-width: 900px; margin: 0 auto; padding: 0 24px; }
  h2 { font-family: 'Sora','Tajawal',sans-serif; font-size: clamp(1.6rem,3.2vw,2.2rem);
    letter-spacing: -.02em; margin: 0 0 18px; line-height: 1.25; }
  h3 { font-family: 'Sora','Tajawal',sans-serif; font-size: 1.15rem; margin: 30px 0 10px; }
  .lead { font-size: 1.06rem; color: #3b4252; line-height: 1.8; }
  p { color: #5b6272; line-height: 1.85; margin: 0 0 6px; }
  .art { padding-bottom: 10px; }
  .sec-t { margin-top: 48px; font-size: 1.35rem; }
  .sec-i { margin-bottom: 22px; }
  .sectors { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
  .sec { display: flex; gap: 12px; padding: 16px 18px; border-radius: 14px;
    background: #f7f8fb; border: 1px solid rgba(16,19,28,.07);
    b { display: block; font-size: .95rem; margin-bottom: 3px; }
    i { font-style: normal; color: #5b6272; font-size: .88rem; line-height: 1.6; } }
  .dot { flex-shrink: 0; width: 26px; height: 26px; border-radius: 50%; display: grid;
    place-items: center; color: #128c7e; background: rgba(37,211,102,.14); }
  .cities { margin-top: 44px; padding: 22px 24px; border-radius: 16px;
    background: linear-gradient(135deg, rgba(232,182,76,.10), rgba(232,182,76,.03));
    border: 1px solid rgba(201,144,42,.28);
    h3 { margin: 0 0 8px; font-size: 1.05rem; color: #a8761c; }
    p { font-size: .92rem; margin: 0; } }
  .guides { margin-top: 44px;
    h3 { margin: 0 0 14px; font-size: 1.15rem; }
    ul { list-style: none; display: grid; grid-template-columns: 1fr 1fr; gap: 10px 26px; }
    li { position: relative; padding-inline-start: 18px;
      &::before { content: ''; position: absolute; inset-inline-start: 2px; top: .72em;
        width: 6px; height: 6px; border-radius: 50%; background: #e8b64c; } }
    a { color: #3b4252; text-decoration: none; font-size: .94rem; line-height: 1.7;
      &:hover { color: #a8761c; text-decoration: underline; } }
    .all { display: inline-block; margin-top: 16px; font-weight: 700; color: #a8761c;
      text-decoration: none; font-size: .93rem; } }
  .seo-cta { margin-top: 40px; text-align: center;
    p { margin-bottom: 16px; font-weight: 600; color: #10131c; }
    .btn { display: inline-flex; align-items: center; gap: 10px; padding: 15px 30px;
      border-radius: 999px; font-weight: 700; text-decoration: none; color: #fff;
      background: linear-gradient(135deg,#25d366,#128c7e);
      box-shadow: 0 10px 28px rgba(37,211,102,.35); transition: transform .18s;
      &:hover { transform: translateY(-2px); } } }
  @media (max-width: 720px) {
    .seo { padding: 56px 0; }
    .wrap { padding: 0 16px; }
    .sectors { grid-template-columns: 1fr; }
  }`]
})
export class SeoSection {
  lang = input<Lang>('fr');
  d = computed(() => SEO[this.lang()] ?? SEO.fr);
  ui = computed(() => CONTENT_UI[this.lang()]);
  /**
   * Liens contextuels vers le pôle éditorial. Les langues sans contenu propre
   * pointent vers les guides français plutôt que vers rien : mieux vaut un lien
   * utile dans une autre langue qu'une section vide.
   */
  linkLang = computed(() => LINK_LANG[this.lang()]);
  guides = computed(() => HOME_LINKS[this.lang()]);
  readonly wa = WA_LINK;
}
