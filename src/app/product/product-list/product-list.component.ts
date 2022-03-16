import { Component, OnInit } from '@angular/core';
import {Product, ProductTile} from "../product.models";
import { ProductService } from "../product.service";


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productTiles: ProductTile[]

  constructor(productService: ProductService) {
    this.productTiles = productService.getProducts();
  }

  ngOnInit(): void {
  }

  goToProduct(product: Product) {
    this.router
  }

}
