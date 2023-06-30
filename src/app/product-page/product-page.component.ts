import { Component } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

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

  // ngOnInit(): void {
  //   this.activateRoute.params.subscribe(params => {
  //     this.productId = params['id'];
  //     this.getProductByProductId();
  //   });
  // }

  // getProductByProductId() {
  //   this.service.getProductByProductId(this.productId).subscribe((prod: Product) => {
  //     this.product = prod
  //     this.productCategory = this.product.category
  //     this.getSimilarProducts()
  //   }, (err) => {
  //     console.log(err)
  //   })
  // }

  ngOnInit(): void {
    this.activateRoute.params.pipe(
      switchMap(params => {
        this.productId = params['id'];
        return this.service.getProductByProductId(this.productId);
      })
    ).subscribe(
      (prod: Product) => {
        this.product = prod;
        this.productCategory = this.product.category;
        this.getSimilarProducts();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getSimilarProducts() {
    this.service.getProductsByCategory(this.productCategory).subscribe(
      (prods: Product[]) => {
        this.similarProducts = prods.filter((prod: Product) => prod.id !== this.product?.id)
      },
      (err) => {
        console.log(err)
      }
    )
  }

}
