import { Injectable } from '@angular/core';
import { ProductTile } from "./product.models";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts() : ProductTile[] {
    return [
      { product: { id: 1, name: 'Toy 1', description: 'Toy 1 description'}, cols: 1, rows: 1, color: 'lightblue' },
      { product: { id: 2, name: 'Toy 2', description: 'Toy 2 description'}, cols: 1, rows: 2, color: 'lightgreen' },
    ];
  }
}
