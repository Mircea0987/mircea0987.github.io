import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [
    {
      title: 'string',
      category: 'string',
      company: 'string',
      deliveryCompany: 'string',
      price: 2,
      rate: 3,
      isInStock: true,
      description: 'string',
      dimensions: 'string',
      material: 'string',
    },
    
  ];
  constructor() {}

  ngOnInit(): void {}
}
