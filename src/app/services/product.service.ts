import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  dataEmmiter = new EventEmitter<any>()
  // shareProducts = new EventEmitter<Product[]>()

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>("https://fakestoreapi.com/products")
  }

  getProductCategories(): Observable<string[]> {
    return this.http.get<string[]>("https://fakestoreapi.com/products/categories")
  }

  getProductsByCategory(category: string): Observable<Product[]> {
    return this.http.get<Product[]>(`https://fakestoreapi.com/products/category/${category}`)
  }

  passDataToSibling(data: any) {
    this.dataEmmiter.emit(data)
  }

  // shareProductsBetweenSiblings(product: Product[]) {
  //   this.shareProducts.emit(product)
  // }

}
