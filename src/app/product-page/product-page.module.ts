import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPageComponent } from './product-page.component';
import { ProductPageCardComponent } from './product-page-card/product-page-card.component';
import { ProductPageSimilarProdComponent } from './product-page-similar-prod/product-page-similar-prod.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';



import { ProductPageRoutingModule } from './product-page-routing.module';


@NgModule({
  declarations: [
    ProductPageComponent,
    ProductPageCardComponent,
    ProductPageSimilarProdComponent
  ],
  imports: [
    CommonModule,
    ProductPageRoutingModule,
    MatCardModule,
    MatDividerModule
  ]
})
export class ProductPageModule { }
