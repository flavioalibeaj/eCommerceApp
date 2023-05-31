import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from '../home/home.component';
import { CarouselComponent } from '../home/carousel/carousel.component';
import { ProductCardComponent } from '../home/product-card/product-card.component';
import { TabComponent } from '../home/tab/tab.component';
import { SortMenuComponent } from '../home/sort-menu/sort-menu.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { ProductPageComponent } from './product-page/product-page.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { ProductPageCardComponent } from './product-page-card/product-page-card.component';
import { ProductPageDescriptionComponent } from './product-page-description/product-page-description.component';
import { ProductPageSimilarProdComponent } from './product-page-similar-prod/product-page-similar-prod.component';

@NgModule({
  declarations: [
    HomeComponent,
    CarouselComponent,
    ProductCardComponent,
    TabComponent,
    SortMenuComponent,
    ProductPageComponent,
    ProductPageCardComponent,
    ProductPageDescriptionComponent,
    ProductPageSimilarProdComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
    MatGridListModule
  ]
})
export class HomeModule { }
