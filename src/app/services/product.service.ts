import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  dataEmitter = new EventEmitter()
  cardDataEmitter = new EventEmitter()

  constructor(private http: HttpClient) { }

  eventKalimi(data: any) {
    this.dataEmitter.emit(data)
  }

  cardEvent(data: any) {
    this.cardDataEmitter.emit(data)
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>("https://fakestoreapi.com/products")
  }

  getProductCategories(): Observable<string[]> {
    return this.http.get<string[]>("https://fakestoreapi.com/products/categories")
  }

  getProductsByCategory(category: string): Observable<Product[]> {
    return this.http.get<Product[]>(`https://fakestoreapi.com/products/category/${category}`)
  }

}
