import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reproductor',
  standalone: true,
  imports: [],
  templateUrl: './reproductor.component.html',
  styleUrl: './reproductor.component.scss'
})
export class ReproductorComponent {
  @Input() videoSrc!: string;

  constructor() { }

}
