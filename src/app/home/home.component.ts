import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../model/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  categories!: string[]
  productByCategories!: Product[]


  constructor(private service: ProductService) { }

  ngOnInit(): void {
    this.getProductCategories()
  }

  getAllProducts(){
    this.service.getProducts().subscribe(res => console.log(res))
  }

  getProductCategories(){
    this.service.getProductCategories().subscribe(res => {
      this.categories = res
    })
  }

  // getFirstProductByCategory(category: string){
  //   this.service.getProductByCategory(category).subscribe(res => {
  //     this.productByCategories = res
  //   })
  // }

}
