import { Component, Input } from '@angular/core';

/** Icônes SVG inline (trait fin, style professionnel), colorées par currentColor */
@Component({
  selector: 'ico',
  template: `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
       stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"
       [attr.width]="size" [attr.height]="size" aria-hidden="true">
    @switch (name) {
      @case ('mic') {
        <rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 10v1a7 7 0 0 0 14 0v-1"/><path d="M12 18v4"/><path d="M8 22h8"/>
      }
      @case ('file') {
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z"/><path d="M14 2v6h6"/><path d="m9 15 2 2 4-4"/>
      }
      @case ('stamp') {
        <path d="M5 22h14"/><path d="M19.27 13.73A2.5 2.5 0 0 0 17.5 13h-11A2.5 2.5 0 0 0 4 15.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1.5c0-.66-.26-1.3-.73-1.77Z"/><path d="M14 13V8.5C14 7 15 7 15 5a3 3 0 0 0-6 0c0 2 1 2 1 3.5V13"/>
      }
      @case ('qr') {
        <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h3v3h-3z"/><path d="M21 14v2"/><path d="M14 20h2"/><path d="M20 20h1v1"/><path d="M21 18h.01"/>
      }
      @case ('send') {
        <path d="m22 2-7 20-4-9-9-4 20-7Z"/><path d="M22 2 11 13"/>
      }
      @case ('users') {
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      }
      @case ('archive') {
        <rect x="2" y="3" width="20" height="5" rx="1"/><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"/><path d="M10 12h4"/>
      }
      @case ('edit') {
        <path d="M21.17 6.83a2.85 2.85 0 0 0-4-4L3.84 16.17a2 2 0 0 0-.5.83l-1.32 4.35a.5.5 0 0 0 .62.62l4.35-1.32a2 2 0 0 0 .83-.5Z"/><path d="m15 5 4 4"/>
      }
      @case ('shield') {
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1Z"/><path d="m9 12 2 2 4-4"/>
      }
      @case ('spark') {
        <path d="m12 3 1.9 5.8a2 2 0 0 0 1.29 1.29L21 12l-5.8 1.9a2 2 0 0 0-1.29 1.29L12 21l-1.9-5.8a2 2 0 0 0-1.29-1.29L3 12l5.8-1.9a2 2 0 0 0 1.29-1.29Z"/>
      }
      @case ('gift') {
        <rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13"/><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5C11 3 12 8 12 8s1-5 4.5-5a2.5 2.5 0 0 1 0 5"/>
      }
      @case ('star') {
        <path d="M11.53 3.6a.53.53 0 0 1 .94 0l2.1 4.4 4.83.62a.53.53 0 0 1 .3.9l-3.55 3.36.9 4.78a.53.53 0 0 1-.78.56L12 15.9l-4.27 2.32a.53.53 0 0 1-.78-.56l.9-4.78L4.3 9.52a.53.53 0 0 1 .3-.9l4.83-.62Z"/>
      }
      @case ('card') {
        <rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>
      }
      @case ('check') {
        <path d="M20 6 9 17l-5-5"/>
      }
      @case ('globe') {
        <circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z"/>
      }
      @case ('voice') {
        <path d="M2 10v4"/><path d="M6 6v12"/><path d="M10 3v18"/><path d="M14 8v8"/><path d="M18 5v14"/><path d="M22 10v4"/>
      }
      @case ('building') {
        <rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M8 10h.01"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 14h.01"/><path d="M16 14h.01"/><path d="M12 14h.01"/>
      }
    }
  </svg>`
})
export class Ico {
  @Input({ required: true }) name!: string;
  @Input() size = 24;
}
