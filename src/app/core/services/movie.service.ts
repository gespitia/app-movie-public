import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MovieDetailInterface, MovieResponseInterface } from '../models/movie.models';

@Injectable({
  providedIn: 'root'
})

export class MovieService {
    private baseUrl = environment.urlBase;
    private apiKey = environment.ApiKey;

  constructor(private _http: HttpClient) { }

    getMovies(page:string='1'): Observable<MovieResponseInterface>{
      const url = `${this.baseUrl}/movie/popular?api_key=${this.apiKey}&page=${page}`;
      return this._http.get<MovieResponseInterface>(url);
    }

    getMovieDetail(id:string): Observable<MovieDetailInterface>{
      const url = `${this.baseUrl}/movie/${id}?api_key=${this.apiKey}`;
      return this._http.get<MovieDetailInterface>(url);
    }

    getCategorieMovie(){
      const url = `${this.baseUrl}genre/movie/list?api_key=${this.apiKey}&language=es-ES`;
      return this._http.get(url);
    }

    searchMovie(query:string, page:string='1'): Observable<MovieResponseInterface>{
      const url = `${this.baseUrl}/search/movie?api_key=${this.apiKey}&query=${query}&page=${page}`;
      return this._http.get<MovieResponseInterface>(url);
    }

}
