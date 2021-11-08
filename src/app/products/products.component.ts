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
      description: ``,
      dimensions: '180 X 60 (mm)',
      material: 'Cel mai bun silicon',
      url: 'https://s13emagst.akamaized.net/products/33382/33381519/images/res_a40457d533d5f7a229cf370e39a691a2.jpg?width=450&height=450&hash=76A3F3CE2BFB77CAE80826C102A5F751',
    },
    {
      title: 'IphoneXXx',
      category: 'Phone',
      company: 'Apple',
      deliveryCompany: 'Sameday',
      price: 5000,
      rate: 4.5,
      isInStock: false,
      descriptionDescription: 'Un telefon extra, de nota 20',
      description: ``,
      dimensions: '180 X 60 (mm)',
      material: 'Cel mai bun silicon',
      url: 'https://s13emagst.akamaized.net/products/33382/33381519/images/res_a40457d533d5f7a229cf370e39a691a2.jpg?width=450&height=450&hash=76A3F3CE2BFB77CAE80826C102A5F751',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
