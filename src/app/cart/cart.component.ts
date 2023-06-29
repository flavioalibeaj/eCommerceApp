import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../model/product';
import { CardService } from '../services/card.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  productsInCard!: Product[]
  count = 1

  constructor(private cartService: CardService) { }

  ngOnInit(): void {
    // this.productsInCard = this.cartService.getCardProducts()
    let data = localStorage.getItem("products")
    if (data) this.productsInCard = JSON.parse(data)
  }

  deleteProduct(product: Product) {
    let index = this.productsInCard.findIndex(prod => prod === product)
    this.productsInCard.splice(index, 1)
    console.log("After delete", this.cartService.getCardProducts())
    // this.cartService.deleteProduct(product)
  }

  deleteAll() {
    this.productsInCard = this.cartService.deleteAll()
    console.log("After delete all", this.cartService.getCardProducts())
  }

  getFromLocalStorage() {
    // if (data) {
    //   this.productsInCard = JSON.parse(data)
    // }
  }

}
