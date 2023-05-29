import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  productsByCategory!: Product[]
  productsInCart: Product[] = []

  constructor(private service: ProductService) { }

  ngOnInit(): void {
    this.getProductsByCategory()
  }

  getProductsByCategory() {
    this.service.getProductsByCategory(this.category).subscribe(res => {
      this.productsByCategory = res;

      this.service.eventKalimi(this.productsByCategory);
    });
  }

  addToCart(product: Product) {
    this.productsInCart.push(product)
    // product.addedInCart = true

    this.service.setData(this.productsInCart)
  }



  @Input() category!: string;

}
