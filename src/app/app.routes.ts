import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./features/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'movie/:id',
    loadComponent: () =>
      import('./features/movies/movie-detail/movie-detail.component').then(
        (m) => m.MovieDetailComponent
      )
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home',
  }
];
