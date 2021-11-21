import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.css'], 
})
export class ProductModalComponent implements OnInit {
  constructor(public CartService: CartService) {}
  @Input() product: Product;
  ngOnInit(): void {}

  Pay(product: Product) {
    this.CartService.addToCart(product);
  }
  Fav(product: Product) {
    this.CartService.addtoFav(product);
  }
}
