import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
// import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
})
export class FavoriteComponent implements OnInit {
  constructor(public CartService: CartService) {}
  items = this.CartService.getItemsFav();
  ngOnInit(): void {}
}
