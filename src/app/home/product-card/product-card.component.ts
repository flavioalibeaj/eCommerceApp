import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  productsByCategory!: Product[]
  sortedProducts?: Product[]
  addedToCart: boolean = false

  constructor(private service: ProductService) { }

  ngOnInit(): void {
    this.getProducstByCategory()
  }

  getProducstByCategory() {
    this.service.getProductsByCategory(this.category).subscribe(res => {
      this.productsByCategory = res
      this.sortedProducts = res
    })
  }

  @Input()
  category!: string

  addToCart(product: Product) {
    this.addedToCart = true
    console.log(`Added ${product.title} to cart`)
  }

}
