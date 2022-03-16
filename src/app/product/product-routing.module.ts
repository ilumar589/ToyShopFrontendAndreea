import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductItemComponent } from "./product-item/product-item.component";
import {ProductItemResolverService} from "./product-item-resolver.service";

const productRoutes: Routes = [
  {
    path: '',
    component: ProductListComponent,
    children: [
      {
        path: ':id',
        component: ProductItemComponent,
        resolve: {
          productItemResolver: ProductItemResolverService
        }
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
