import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];
  itemFav: Product[] = [];
  product: Product;

  totalPrice: number = 0;

  addToCart(product: Product) {
    this.items.push(product);
    this.totalPrice = this.totalPrice + product.price;
  }
  getCurrentTotalPrice() {
    return this.totalPrice;
  }
  removeFromCart(product: Product) {
    const index: number = this.items.indexOf(product);
    if (index !== -1) {
      this.items.splice(index, 1);
      this.totalPrice = this.totalPrice - product.price;
    }
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
  // delete(product: Product) {
  //   this.items.splice(product.price);
  // }
  addtoFav(product: Product) {
    this.itemFav.push(product);
  }

  constructor() {}
}
