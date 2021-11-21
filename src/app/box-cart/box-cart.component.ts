import { Component,  OnInit, Output } from '@angular/core';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-box-cart',
  templateUrl: './box-cart.component.html',
  styleUrls: ['./box-cart.component.css'],
})
export class BoxCartComponent implements OnInit {
  total = 0;
  Calcul(){
  }
  constructor(public CartService: CartService) {}
  items = this.CartService.getItemsCart().forEach((product) => {
    this.total += product.price;
  });

  ngOnInit(): void {}
}
