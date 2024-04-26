import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable} from 'rxjs';
import {
  MovieDetailInterface,
  MovieResponseInterface,
} from '../models/movie.models';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private baseUrl = environment.urlBase;
  private apiKey = environment.ApiKey;

  constructor(private _http: HttpClient) {}

  private getHttpParams(params: { [key: string]: string | number } = {}): HttpParams {
    return Object.entries({ api_key: this.apiKey, ...params })
      .reduce((httpParams, [key, value]) => httpParams.set(key, value), new HttpParams());
  }


  getMovies(page: string = '1'): Observable<MovieResponseInterface> {
    const params = this.getHttpParams({ page });
    return this._http.get<MovieResponseInterface>(
      `${this.baseUrl}/movie/popular`,
      { params }
    );
  }

  getMovieDetail(id: string): Observable<MovieDetailInterface> {
    const params = this.getHttpParams();
    return this._http.get<MovieDetailInterface>(`${this.baseUrl}/movie/${id}`, {
      params,
    });
  }

  getMovieVideo(id:string): Observable<any> {
    const params = this.getHttpParams();
    return this._http.get(`${this.baseUrl}/movie/${id}/videos`, { params });
  }

  searchMovie(
    query: string,
    page: string = '1'
  ): Observable<MovieResponseInterface> {
    const params = this.getHttpParams({ query, page });
    return this._http.get<MovieResponseInterface>(
      `${this.baseUrl}/search/movie`,
      { params }
    );
  }
}
