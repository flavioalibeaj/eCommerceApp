import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-sort-menu',
  templateUrl: './sort-menu.component.html',
  styleUrls: ['./sort-menu.component.scss']
})
export class SortMenuComponent implements OnInit, OnDestroy {

  products!: Product[]
  dataSubscription!: Subscription

  constructor(private service: ProductService) { }

  ngOnInit(): void {
    this.dataSubscription = this.service.dataEmitter.subscribe(value => {
      this.products = value;
    });
  }

  ngOnDestroy(): void {
    this.dataSubscription.unsubscribe()
  }

  sortProducts(priceOrRate: string, highOrLow: string) {
    const compareFunction = (a: Product, b: Product) => {
      if (priceOrRate === "price") {
        return highOrLow === "low" ? a.price - b.price : b.price - a.price;
      } else if (priceOrRate === "rate") {
        return highOrLow === "low" ? a.rating.rate - b.rating.rate : b.rating.rate - a.rating.rate;
      }
      return 0;
    };

    this.products.sort(compareFunction);
    // console.log(this.products)
  }

}
