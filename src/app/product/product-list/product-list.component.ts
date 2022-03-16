import { Component, OnInit } from '@angular/core';
import {Product, ProductTile} from "../product.models";
import { ProductService } from "../product.service";
import {map, Observable} from "rxjs";


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products$: Observable<Product[]>;
  productTiles$: Observable<ProductTile[]>;

  constructor(private productService: ProductService) {
    this.products$ = productService.getProducts();
    this.productTiles$ = this.products$.pipe(
      map(products => products.map(product => new ProductTile('lightblue', 1, 1, product))
    ));
  }

  ngOnInit(): void {
  }

  goToProduct(product: Product) {
  }

}
