import { Routes } from '@angular/router';
import { Landing } from './landing/landing';

/**
 * Les pages éditoriales sont chargées à la demande : le corps des guides pèse
 * plus lourd que la landing elle-même, et un visiteur qui arrive sur l'accueil
 * n'a aucune raison de le télécharger. Les pages restent pré-rendues au build,
 * donc le HTML complet part avec la première réponse — le découpage ne coûte
 * rien au référencement.
 */
export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'fr' },
  // Les routes à plusieurs segments passent avant `:lang`, qui ne consomme
  // qu'un segment et ne matcherait de toute façon pas les URL éditoriales.
  { path: ':lang/guides', loadComponent: () => import('./article/hub').then((m) => m.Hub) },
  { path: ':lang/a-propos', loadComponent: () => import('./article/about').then((m) => m.About) },
  { path: ':lang/:section/:slug', loadComponent: () => import('./article/article').then((m) => m.Article) },
  { path: ':lang', component: Landing },
  { path: '**', redirectTo: 'fr' }
];
