import { Component } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent {

  product?: Product
  productId!: string
  productCategory!: string
  similarProducts!: Product[]

  constructor(private service: ProductService, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params => {
      this.productId = params['id'];
      this.productCategory = params['category'];
      this.getProductByProductId();
      // this.getProductsByProductCategory();
    });
  }

  getProductByProductId() {
    // let id = parseInt(this.productId)
    // console.log(`ID ${id} tani esht kthyer ne ${typeof id}`)

    this.service.getProductByProductId(this.productId).subscribe((res) => {
      this.product = res
      console.log(res)
    }, (err) => {
      console.log(err)
    })
    // this.getProductsByProductCategory();
  }

  getProductsByProductCategory() {
    this.service.getProductsByCategory(this.productCategory).subscribe(res => {
      this.similarProducts = res.filter(prod => prod.id !== this.product?.id)
    })
  }

  // getSimilarProducts(){

  // }

}
