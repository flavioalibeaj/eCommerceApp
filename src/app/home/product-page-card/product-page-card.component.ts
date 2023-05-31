import { Component, Input } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product-page-card',
  templateUrl: './product-page-card.component.html',
  styleUrls: ['./product-page-card.component.scss']
})
export class ProductPageCardComponent {

  @Input()
  product?: Product

}
