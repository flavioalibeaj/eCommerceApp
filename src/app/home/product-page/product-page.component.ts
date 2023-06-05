import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

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
    this.service.getProductByProductId(this.productId).subscribe(res => {
      this.product = res
    })
    this.getProductsByProductCategory();
  }

  getProductsByProductCategory() {
    this.service.getProductsByCategory(this.productCategory).subscribe(res => {
      this.similarProducts = res.filter(prod => prod.id !== this.product?.id)
    })
  }

}
