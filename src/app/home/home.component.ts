import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../model/product';
import { Category } from '../model/category';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // categories!: Category[]
  categories!: string
  productByCategories!: Product[]


  constructor(private service: ProductService) { }

  ngOnInit(): void {
    this.getProductCategories()
  }

  // getAllProducts() {
  //   this.service.getProducts().subscribe(res => console.log(res))
  // }

  // getProductCategories() {
  //   this.service.getProductCategories().subscribe(
  //     (categories: Category[]) => {
  //       this.categories = categories
  //       // console.log("Pergjigja eshte", categories)
  //     },
  //     (err) => {
  //       console.log(err)
  //     })
  // }
  getProductCategories() {
    this.service.getProductCategories().subscribe(
      (categories: string) => {
        this.categories = categories
        // console.log("Pergjigja eshte", categories)
      },
      (err) => {
        console.log(err)
      })
  }

}
