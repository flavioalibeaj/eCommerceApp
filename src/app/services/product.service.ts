import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, catchError } from 'rxjs';
import { Product } from '../model/product';
import { Category } from '../model/category';

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

  // getProductCategories(): Observable<Category[]> {
  //   return this.http.get<Category[]>("localhost:3001/api/categories")
  //     .pipe(
  //       catchError(err => {
  //         console.log("Error:", err)
  //         throw err
  //       })
  //     )
  // }
  getProductCategories(): Observable<string> {
    return this.http.get<string>("https://fakestoreapi.com/products/categories")
      .pipe(
        catchError(err => {
          console.log("Error:", err)
          throw err
        })
      )
  }

  getProductsByCategory(category: string): Observable<Product[]> {
    return this.http.get<Product[]>(`http://localhost:3001/api/products/${category}`)
  }

  getProductByProductId(id: string | number): Observable<Product> {
    // return this.http.get<Product>(`http://localhost:3001/api/products/${id}`)
    return this.http.get<Product>(`http://localhost:3001/${id}`)
  }

}
