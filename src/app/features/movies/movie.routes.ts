import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'movie/:id',
        loadComponent: () =>import('./movie-detail/movie-detail.component').then((m) => m.MovieDetailComponent)
      },
      {
        path: 'reproductor/:id',
        loadComponent: () =>import('./reproductor/reproductor.component').then((m) => m.ReproductorComponent)
      }
    ]
  }
]
