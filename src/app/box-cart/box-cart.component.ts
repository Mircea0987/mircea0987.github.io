import { Component, OnInit } from '@angular/core';
import { FileWatcherEventKind } from 'typescript';
import { Product } from '../product.model';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-box-cart',
  templateUrl: './box-cart.component.html',
  styleUrls: ['./box-cart.component.css'],
})
export class BoxCartComponent implements OnInit {
  CartTotal: ProductsComponent[] = [];
  total = 0;
  constructor() {}
  

  ngOnInit(): void {
    // this.CartTotal.forEach((index) => {
    //   this.total += index;
    // });
  }
}
