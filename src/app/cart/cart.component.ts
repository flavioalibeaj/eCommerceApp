import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../model/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  productsInCard: Product[] | undefined

  constructor(private service: ProductService) { }

  ngOnInit(): void {
    this.getProductsFromProductCard()
  }

  getProductsFromProductCard() {
    this.service.cardEvent(this.productsInCard)
    console.log("Added products to card in card component")
  }

}
