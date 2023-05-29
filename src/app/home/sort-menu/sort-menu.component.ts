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

  // sortProducts(priceOrRate: string, highOrLow: string) {
  //   if (priceOrRate === "price" && highOrLow === "low") {
  //     for (let i = 0; i < this.products.length; i++) {
  //       for (let j = i + 1; j < this.products.length; j++) {
  //         if (this.products[i].price > this.products[j].price) {
  //           let temp = this.products[i]
  //           this.products[i] = this.products[j]
  //           this.products[j] = temp
  //         }
  //       }
  //     }
  //   } else if (priceOrRate === "price" && highOrLow === "high") {
  //     for (let i = 0; i < this.products.length; i++) {
  //       for (let j = i + 1; j < this.products.length; j++) {
  //         if (this.products[i].price < this.products[j].price) {
  //           let temp = this.products[i]
  //           this.products[i] = this.products[j]
  //           this.products[j] = temp
  //         }
  //       }
  //     }
  //   } else if (priceOrRate === "rate" && highOrLow === "high") {
  //     for (let i = 0; i < this.products.length; i++) {
  //       for (let j = i + 1; j < this.products.length; j++) {
  //         if (this.products[i].rating.rate < this.products[j].rating.rate) {
  //           let temp = this.products[i]
  //           this.products[i] = this.products[j]
  //           this.products[j] = temp
  //         }
  //       }
  //     }
  //   } else if (priceOrRate === "rate" && highOrLow === "low") {
  //     for (let i = 0; i < this.products.length; i++) {
  //       for (let j = i + 1; j < this.products.length; j++) {
  //         if (this.products[i].rating.rate > this.products[j].rating.rate) {
  //           let temp = this.products[i]
  //           this.products[i] = this.products[j]
  //           this.products[j] = temp
  //         }
  //       }
  //     }
  //   }
  // }

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
  }

}
