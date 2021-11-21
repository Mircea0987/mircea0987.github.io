import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../product.model';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(public CartService: CartService) {}
  items = this.CartService.getItemsCart();

  // @Output() CalculusEvent = new EventEmitter();

  // Calcul() {
  //   this.CalculusEvent.emit();
  // }
  ngOnInit(): void {}

  removeFromCart(product: Product) {
    this.CartService.removeFromCart(product);
  }
}
