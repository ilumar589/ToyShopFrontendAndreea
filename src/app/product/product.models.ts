export class ProductTile {
  color: string;
  cols: number;
  rows: number;
  product: Product;

  constructor(color: string, cols: number, rows: number, product: Product) {
    this.color = color;
    this.cols = cols;
    this.rows = rows;
    this.product = product;
  }
}

export interface Product {
  id: number,
  name: string,
  description: string,
}
