import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from "@angular/router";
import { Product } from "./product.models";
import { ProductService } from "./product.service";
import {EMPTY, mergeMap, Observable, of, take} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductItemResolverService implements Resolve<Product>{

  constructor(private productService: ProductService,
              private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product> | Observable<never> {
    const id = Number.parseInt(route.paramMap.get('id')!, 10);
    return this.productService.getProduct(id)
      .pipe(
        take(1),
        mergeMap(product => {
          if (product) {
            return of(product);
          } else {
            this.router.navigate(['product-list']);
            return EMPTY;
          }
        })
      );
  }
}
