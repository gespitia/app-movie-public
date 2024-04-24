import { Component, computed, Injectable, ViewChild } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { ListComponent } from '../movies/list/list.component';
import { MovieService } from '../../core/services/movie.service';
import { AsyncPipe } from '@angular/common';
import {
  MatPaginator,
  MatPaginatorIntl,
  MatPaginatorModule,
} from '@angular/material/paginator';
import { Subject } from 'rxjs';
import { Movie, MovieResponse } from '../../core/models/movie.models';

@Injectable()
export class MyCustomPaginatorIntl implements MatPaginatorIntl {
  changes = new Subject<void>();

  firstPageLabel = `First page`;
  itemsPerPageLabel = `Items per page:`;
  lastPageLabel = `Last page`;

  nextPageLabel = 'Next page';
  previousPageLabel = 'Previous page';

  getRangeLabel(page: number, pageSize: number, length: number): string {
    if (length === 0) {
      return `Page 1 of 1`;
    }
    const amountPages = Math.ceil(length / pageSize);
    return `Page ${page + 1} of ${amountPages}`;
  }
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatTabsModule, ListComponent, AsyncPipe, MatPaginatorModule],
  providers: [{ provide: MatPaginatorIntl, useClass: MyCustomPaginatorIntl }],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  public allMovies!: MovieResponse;
  public currentPageMovies: Movie[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private _movieServices: MovieService) {
    this.requestMoviesPage();
  }

  requestMoviesPage() {
    const page = this.paginator ? this.paginator.pageIndex + 1 : 1;
    this._movieServices.getMovies(page.toString()).subscribe((data) => {
      this.allMovies = data;
      this.currentPageMovies = this.allMovies.results;
    });
  }
}
