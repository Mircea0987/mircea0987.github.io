import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-info-box',
  templateUrl: './product-info-box.component.html',
  styleUrls: ['./product-info-box.component.css'],
})
export class ProductInfoBoxComponent implements OnInit {
  @Input()
  product: Observable<Product[]>;
  constructor() {}

  ngOnInit(): void {}
}
