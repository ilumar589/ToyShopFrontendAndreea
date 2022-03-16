import { Component, OnInit } from '@angular/core';
import {Product, ProductTile} from "../product.models";
import { ProductService } from "../product.service";


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];
  productTiles: ProductTile[];

  constructor(private productService: ProductService) {
    this.products = productService.getProducts();
    this.productTiles = this.products.map(product => new ProductTile('lightblue', 1, 1, product));
  }

  ngOnInit(): void {
  }

  goToProduct(product: Product) {
  }

}
