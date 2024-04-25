import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MovieService } from '../../../core/services/movie.service';
import { MovieDetailInterface } from '../../../core/models/movie.models';
import { DatePipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [MatCardModule, DatePipe, MatButtonModule],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.scss'
})
export class MovieDetailComponent {

  @Input('id') movieId!: string;

  movieDetail: MovieDetailInterface={} as MovieDetailInterface;

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.movieService.getMovieDetail(this.movieId).subscribe((data) => {
      this.movieDetail = data;
    });
  }
}
