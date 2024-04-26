import { Component, Input } from '@angular/core';
import { MovieService } from '../../../core/services/movie.service';

@Component({
  selector: 'app-reproductor',
  standalone: true,
  imports: [],
  templateUrl: './reproductor.component.html',
  styleUrl: './reproductor.component.scss'
})
export class ReproductorComponent {
  @Input('id') videoSrc!: string;

  video: any;

  constructor(private movieService:MovieService) {
    this.movieService.getMovieVideo(this.videoSrc).subscribe((data) => {
      this.video = data.results[0];
      console.log(this.video);
    });
  }

}
