import { Component, inject, ViewChild } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { ListComponent } from '../movies/list/list.component';
import { MovieService } from '../../core/services/movie.service';
import { AsyncPipe } from '@angular/common';
import {
  MatPaginator,
  MatPaginatorIntl,
  MatPaginatorModule,
  PageEvent,
} from '@angular/material/paginator';
import {
  MovieInterface,
  MovieResponseInterface,
} from '../../core/models/movie.models';
import { ListMoviesService } from '../services/list-movies.service';
import { PaginatorService } from '../services/paginator.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatTabsModule,
    ListComponent,
    AsyncPipe,
    MatPaginatorModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  providers: [{ provide: MatPaginatorIntl, useClass: PaginatorService }],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  public allMovies: MovieResponseInterface = {} as MovieResponseInterface;
  public currentPageMovies: MovieInterface[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  search:string = '';

  movieService = inject(MovieService);

  constructor(
    private _movieServices: MovieService,
    private listMovieService: ListMoviesService
  ) {
    this.requestMoviesPage().subscribe((data) => this.setResults(data));
  }

  requestMoviesPage():Observable<MovieResponseInterface> {
    const page = this.paginator ? this.paginator?.pageIndex + 1 : 1;
    if (this.search) {
      return this.movieService.searchMovie(this.search, page.toString());
    }
    return this._movieServices.getMovies(page.toString());
  }

  setResults(data: MovieResponseInterface) {
    this.allMovies = data;
    this.currentPageMovies = this.allMovies.results;
    this.listMovieService.cargarPeliculas(this.currentPageMovies);
  }

  onSearchChange(search: string) {
    this.search = search;
    this.paginator.firstPage();
    this.requestMoviesPage().subscribe((data) => this.setResults(data));
  }

  onPageChange() {
    this.requestMoviesPage().subscribe((data) => this.setResults(data));
  }
}
