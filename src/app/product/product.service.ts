import { Injectable } from '@angular/core';
import { Product } from "./product.models";
import {BehaviorSubject, map} from "rxjs";
import { MOCK_PRODUCTS } from "./mock-products";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products$: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>(MOCK_PRODUCTS);

  constructor() {}

  getProducts() {
    return this.products$; //TODO this should call the backend
  }

  getProduct(productId: number | string) {
    return this.getProducts().pipe(
      map(products => products.find(product => product.id === productId)!)
    ); //TODO this should call the backend
  }

  // getProducts() : ProductTile[] {
  //   return [
  //     { product: { id: 1, name: 'Toy 1', description: 'Toy 1 description'}, cols: 1, rows: 1, color: 'lightblue' },
  //     { product: { id: 2, name: 'Toy 2', description: 'Toy 2 description'}, cols: 1, rows: 2, color: 'lightgreen' },
  //   ];
  // }
}
