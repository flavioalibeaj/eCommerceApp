import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { CardService } from 'src/app/services/card.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  productsByCategory!: Product[]
  productsInCart: Product[] = []

  constructor(private service: ProductService, private cartService: CardService) { }

  ngOnInit(): void {
    this.getProductsByCategory()
  }

  getProductsByCategory() {
    this.service.getProductsByCategory(this.category).subscribe((res) => {
      this.productsByCategory = res;
      this.service.eventKalimi(this.productsByCategory);
      // this.setToFalse()
    }, (err) => {
      console.log("Error", err)
    });

  }

  // setToFalse() {
  //   this.productsByCategory.forEach(prod => prod.addedInCart = false)
  // }

  addToCart(product: Product) {
    product.addedInCart = true

    this.cartService.addProductToCart(product)
    // console.log("Prod Card", this.cartService.getCardProducts())
  }



  @Input() category!: string;

}
