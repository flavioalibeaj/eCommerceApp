import { Component, Input } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product-page-similar-prod',
  templateUrl: './product-page-similar-prod.component.html',
  styleUrls: ['./product-page-similar-prod.component.scss']
})
export class ProductPageSimilarProdComponent {

  @Input()
  similarProducts!: Product[]

}
