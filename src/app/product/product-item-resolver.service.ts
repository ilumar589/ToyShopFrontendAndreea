import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import { Product } from "./product.models";
import { ProductService } from "./product.service";

@Injectable({
  providedIn: 'root'
})
export class ProductItemResolverService implements Resolve<Product>{

  constructor(private productService: ProductService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Product {
    const id = Number.parseInt(route.paramMap.get('id')!, 10);
    return this.productService.getProduct(id)!;
  }
}
