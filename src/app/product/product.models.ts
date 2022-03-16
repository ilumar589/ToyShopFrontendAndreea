export interface ProductTile {
  color: string,
  cols: number,
  rows: number,
  product: Product
}

export interface Product {
  id: number,
  name: string,
  description: string,
}
