import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  productsInCart: Product[] = []

  addProductToCart(product: Product) {
    this.productsInCart.push(product)
    // localStorage.setItem("key", "value")
  }

  getCardProducts() {
    return this.productsInCart
  }

  deleteAll() {
    this.productsInCart = []
    return this.productsInCart
  }

}
