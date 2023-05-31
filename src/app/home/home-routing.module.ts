import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ProductPageComponent } from './product-page/product-page.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: ":id/:category", component: ProductPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
