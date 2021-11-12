import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../product.model';
import { ProductComponent } from '../product/product.component';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-box-cart',
  templateUrl: './box-cart.component.html',
  styleUrls: ['./box-cart.component.css'],
})
export class BoxCartComponent implements OnInit {
  CartTotal: ProductsComponent[] = [];
  total = 0;
  constructor(public CartService: CartService) {}
  items = this.CartService.getItemsCart().forEach((index) => {
    this.total += index.price;
  });

  ngOnInit(): void {}
}
