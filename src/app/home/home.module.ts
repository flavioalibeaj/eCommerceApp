import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from '../home/home.component';
import { CarouselComponent } from '../home/carousel/carousel.component';
import { ProductCardComponent } from '../home/product-card/product-card.component';
import { TabComponent } from '../home/tab/tab.component';
import { SortMenuComponent } from '../home/sort-menu/sort-menu.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    HomeComponent,
    CarouselComponent,
    ProductCardComponent,
    TabComponent,
    SortMenuComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatTabsModule,
    MatButtonModule,
    MatMenuModule,
  ]
})
export class HomeModule { }
