import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product.model';
@Component({
  selector: 'app-product-descirption',
  templateUrl: './product-descirption.component.html',
  styleUrls: ['./product-descirption.component.css'],
})
export class ProductDescirptionComponent implements OnInit {
  @Input()
  product: Product;
  constructor() {}

  ngOnInit(): void {}
}
