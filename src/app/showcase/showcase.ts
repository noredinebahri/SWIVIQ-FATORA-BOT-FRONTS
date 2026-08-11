import { Component, OnDestroy, afterNextRender, computed, input, signal } from '@angular/core';
import { Ico } from '../icon';
import { SHOWCASE } from './showcase-i18n';
import type { Lang } from '../i18n';

/** Durée d'affichage d'une scène avant rotation automatique (ms) */
const ROTATE_MS = 8000;

/** Motif QR décoratif 9×9 (déterministe : identique côté serveur et navigateur) */
const QR_PATTERN = [
  '111010111',
  '101101101',
  '111011111',
  '000110000',
  '101010110',
  '011101001',
  '111011101',
  '101100110',
  '111010011'
].join('');

@Component({
  selector: 'app-showcase',
  imports: [Ico],
  templateUrl: './showcase.html',
  styleUrl: './showcase.scss'
})
export class Showcase implements OnDestroy {
  lang = input<Lang>('fr');
  d = computed(() => SHOWCASE[this.lang()] ?? SHOWCASE.fr);

  active = signal(0);

  readonly icons = ['mic', 'file', 'stamp', 'qr', 'globe', 'users'];
  readonly bars = Array.from({ length: 16 }, (_, i) => i);
  /** Transcription mot à mot affichée progressivement */
  readonly words = 'sayab liya fatora l Ahmed Transport, tlata dyal l-bibane b 1500 dh'.split(' ');
  /** Total 5 400 : « # » = séparateur de milliers */
  readonly totalDigits = ['5', '#', '4', '0', '0'];
  /** Deux cycles 0-9 pour que chaque chiffre fasse un tour complet */
  readonly rollDigits = Array.from({ length: 20 }, (_, i) => i % 10);
  readonly qrCells = QR_PATTERN.split('').map((c) => c === '1');

  private timer?: ReturnType<typeof setInterval>;

  constructor() {
    // Rotation automatique — navigateur uniquement (SSR rend la première scène)
    afterNextRender(() => this.play());
  }

  select(i: number): void {
    this.active.set(i);
    this.play();
  }

  private play(): void {
    clearInterval(this.timer);
    this.timer = setInterval(
      () => this.active.set((this.active() + 1) % this.d().items.length),
      ROTATE_MS
    );
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }
}
