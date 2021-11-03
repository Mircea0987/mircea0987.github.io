import { Component, OnInit, Input } from '@angular/core';
import { productDescription } from 'src/product-description';
import { Product } from '../product.model';
import { Y } from '../y';
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
