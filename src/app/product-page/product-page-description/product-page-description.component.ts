import { Component, Input } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product-page-description',
  templateUrl: './product-page-description.component.html',
  styleUrls: ['./product-page-description.component.scss']
})
export class ProductPageDescriptionComponent {

  @Input()
  product?: Product

}
