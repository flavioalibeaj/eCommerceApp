import { Component, Input } from '@angular/core';
import { Category } from 'src/app/model/category';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {


  @Input()
  // categories!: Category[]
  categories!: string
}
