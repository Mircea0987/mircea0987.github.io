import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-info-box',
  templateUrl: './product-info-box.component.html',
  styleUrls: ['./product-info-box.component.css'],
})
export class ProductInfoBoxComponent implements OnInit {
  @Input() product: Product;
  @Output() PayEvent = new EventEmitter();
  @Output() FavEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  Pay() {
    this.PayEvent.emit();
  }
  Fav() {
    this.FavEvent.emit();
  }
}
