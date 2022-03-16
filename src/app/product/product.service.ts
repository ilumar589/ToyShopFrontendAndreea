import { Injectable } from '@angular/core';
import {Product, ProductTile} from "./product.models";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  dummyProducts: Product[];
  productsCache: Map<number, Product>

  constructor() {
    this.dummyProducts = [
      { id: 1, name: 'Toy 1', description: 'Toy 1 description' },
      { id: 2, name: 'Toy 2', description: 'Toy 2 description' }
    ];

    this.productsCache = new Map<number, Product>();
    this.dummyProducts.forEach(product => this.productsCache.set(product.id, product));
  }

  getProducts() {
    return this.dummyProducts; //TODO this should call the backend
  }

  getProduct(productId: number) {
    return this.productsCache.get(productId); //TODO this should call the backend
  }

  // getProducts() : ProductTile[] {
  //   return [
  //     { product: { id: 1, name: 'Toy 1', description: 'Toy 1 description'}, cols: 1, rows: 1, color: 'lightblue' },
  //     { product: { id: 2, name: 'Toy 2', description: 'Toy 2 description'}, cols: 1, rows: 2, color: 'lightgreen' },
  //   ];
  // }
}
