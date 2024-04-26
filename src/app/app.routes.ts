import { Routes } from '@angular/router';
import { routes as MovieRoutes } from '../app/features/movies/movie.routes';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./features/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'movies',
    children: MovieRoutes,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home',
  }
];
