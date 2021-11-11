import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { DataService } from './data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  constructor(public DataService: DataService) {}
  products: Product[];

  ngOnInit(): void {
    this.products = this.DataService.products;
  }
}
