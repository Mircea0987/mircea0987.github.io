import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  CartTotal: Product[] = [];
  total = 0;

  constructor(public CartService: CartService) {}
  items = this.CartService.getItemsCart();

  ngOnInit(): void {
    this.CartTotal.forEach((index) => {
      this.total += index.price;
    });
  }
}
