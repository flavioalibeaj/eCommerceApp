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
  private data: any

  constructor(private http: HttpClient) { }

  eventKalimi(data: any) {
    this.dataEmitter.emit(data)
  }

  cardEvent(data: any) {
    this.cardDataEmitter.emit(data)
  }

  transferCardProds(prods: Product[]) {
    this.dataEmitter.emit(prods)
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>("http://localhost:3001/api/products")
  }

  getProductCategories(): Observable<string[]> {
    return this.http.get<string[]>("https://fakestoreapi.com/products/categories")
  }

  getProductsByCategory(category: string): Observable<Product[]> {
    return this.http.get<Product[]>(`http://localhost:3001/api/products/${category}`)
  }

  getProductByProductId(id: string | number): Observable<Product> {
    // console.log(`Tipi i id: ${id} eshte ${typeof id}`)
    return this.http.get<Product>(`http://localhost:3001/api/products/${id}`)
  }

}
