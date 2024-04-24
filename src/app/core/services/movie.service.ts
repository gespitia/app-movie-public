import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MovieResponse } from '../models/movie.models';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
    private baseUrl = environment.urlBase;
    private apiKey = environment.ApiKey;

  constructor(private _http: HttpClient) { }

    getMovies(page:string='1'): Observable<MovieResponse>{
      const url = `${this.baseUrl}/movie/popular?api_key=${this.apiKey}&page=${page}`;
      return this._http.get<MovieResponse>(url);
    }

    getCategorieMovie(){
      const url = `${this.baseUrl}genre/movie/list?api_key=${this.apiKey}&language=es-ES`;
      return this._http.get(url);
    }

}
