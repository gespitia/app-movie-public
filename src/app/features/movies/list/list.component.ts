import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { MovieInterface } from '../../../core/models/movie.models';
import { RouterLink } from '@angular/router';
import { ListMoviesService } from '../../services/list-movies.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [MatCardModule, RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit{

  constructor(private listMovieService:ListMoviesService) { }

  movies: MovieInterface[]=[];

  ngOnInit() {
    this.listMovieService.peliculas.subscribe((data) => {
      this.movies = data;
    })
  }

}
