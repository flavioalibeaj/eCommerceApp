import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-sort-menu',
  templateUrl: './sort-menu.component.html',
  styleUrls: ['./sort-menu.component.scss']
})
export class SortMenuComponent {

  constructor(private prodService: ProductService) { }

  sortProducts(priceOrRate: string, highOrLow: string) {
    let products: any

    this.prodService.passDataToSibling(products)
  }

}
