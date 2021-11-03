import { Component, OnInit, Input } from '@angular/core';
import { productDescription } from 'src/product-description';
import { productModal } from 'src/product-modal';
import { Product } from '../product.model';
import { Y } from '../y';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.css'],
})
export class ProductModalComponent implements OnInit {
  constructor() {}
  @Input() product: Product;
  ngOnInit(): void {}
}
