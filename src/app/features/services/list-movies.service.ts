import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MovieInterface } from '../../core/models/movie.models';

@Injectable({
  providedIn: 'root'
})
export class ListMoviesService {

  private moviesSource = new BehaviorSubject<MovieInterface[]>([]);
  peliculas = this.moviesSource.asObservable();

  constructor() { }

  cargarPeliculas(datosCargados: MovieInterface[]) {
    this.moviesSource.next(datosCargados);
  }

}
