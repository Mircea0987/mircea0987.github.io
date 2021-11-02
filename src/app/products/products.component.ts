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
      title: 'IphoneX',
      category: 'Phone',
      company: 'Apple',
      deliveryCompany: 'Sameday',
      price: 5000,
      rate: 4.5,
      isInStock: false,
      descriptionDescription: 'Un telefon extra, de nota 20',
      description: 'Telefon mobil, care merge foarte bine',
      dimensions: '180 X 60 (mm)',
      material: 'Cel mai bun silicon',
    },
    {
      title: 'Iphone12',
      category: 'Phone',
      company: 'Apple',
      deliveryCompany: 'Sameday',
      price: 6000,
      rate: 5,
      isInStock: true,
      descriptionDescription: 'Un telefon antaia, de nota 30',
      description: 'Telefon mobil, care merge foarte foarte bine',
      dimensions: '2000 X 80 (mm)',
      material: 'Cel mai extra silicon',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
