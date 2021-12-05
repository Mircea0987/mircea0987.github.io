import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-box-cart',
  templateUrl: './box-cart.component.html',
  styleUrls: ['./box-cart.component.css'],
})
export class BoxCartComponent implements OnInit {

  constructor(public CartService: CartService) {}


  ngOnInit(): void {}
}
