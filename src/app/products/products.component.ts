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

  product: Product[];
  
  search: any;

  ngOnInit(): void {
    this.DataService.getData().subscribe((data) => (this.product = data));
  }
}
