import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

  productId!: string

  constructor(private service: ProductService, private activateRoute: ActivatedRoute) {
    this.activateRoute.params.subscribe(value => {
      this.productId = value['id']
    })
  }

  ngOnInit(): void {
    this.getProductByProductId()
  }

  getProductByProductId() {
    this.service.getProductByProductId(this.productId)
  }

}
