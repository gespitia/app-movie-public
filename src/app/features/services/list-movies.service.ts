import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MovieInterface } from '../../core/models/movie.models';

@Injectable({
  providedIn: 'root'
})
export class ListMoviesService {

  private peliculasSource = new BehaviorSubject<MovieInterface[]>([]);
  peliculas = this.peliculasSource.asObservable();

  constructor() { }

  cargarPeliculas(datosCargados: MovieInterface[]) {
    this.peliculasSource.next(datosCargados);
  }

}
