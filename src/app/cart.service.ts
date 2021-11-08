import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];
  itemFav: Product[] = [];
  addToCart(product: Product) {
    this.items.push(product);
  }
  getItemsCart() {
    return this.items;
  }
  getItemsFav() {
    return this.itemFav;
  }
  clearCart() {
    this.items = [];
    return this.items;
  }
  addtoFav(product: Product) {
    this.itemFav.push(product);
  }

  constructor() {}
}
