import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductItemComponent } from "./product-item/product-item.component";

const productRoutes: Routes = [
  {
    path: '',
    component: ProductListComponent,
    children: [
      {
        path: ':id',
        component: ProductItemComponent
      },
      {
        path: '',
        component: ProductListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(productRoutes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
