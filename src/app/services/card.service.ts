import { HttpClientModule } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  productsInCart: Product[] = []
  // lc = localStorage.setItem("products", "")
  data = localStorage.getItem("products")
  newArr = this.data ? JSON.parse(this.data) : []

  addProductToCart(product: Product) {
    // this.productsInCart.push(product)
    // localStorage.setItem("key", JSON.stringify(this.productsInCart))
    this.newArr.push(product)
    let updatedArr = JSON.stringify(this.newArr)
    localStorage.setItem("products", updatedArr)
  }

  getCardProducts() {
    return this.productsInCart
  }

  // deleteProduct(product: Product) {
  //   let index = this.productsInCart.findIndex(prod => prod === product)

  //   // if (index !== -1) {
  //   this.newArr.splice(index, 1)
  //   // }

  //   let updatedArr = JSON.stringify(this.newArr)
  //   localStorage.setItem("products", updatedArr)
  // }

  deleteAll() {
    this.productsInCart = []
    return this.productsInCart
  }

}
