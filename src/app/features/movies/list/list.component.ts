import { Component, input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { Movie } from '../../../core/models/movie.models';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  movies = input<Movie[]>();

}
