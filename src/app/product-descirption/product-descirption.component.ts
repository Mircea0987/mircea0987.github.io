import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product.model';
import { DataService } from '../products/data.service';
@Component({
  selector: 'app-product-descirption',
  templateUrl: './product-descirption.component.html',
  styleUrls: ['./product-descirption.component.css'],
})
export class ProductDescirptionComponent implements OnInit {
  @Input()
  product: Product;
  constructor(public DataService: DataService) {}
  products: Product[];
  search: any;

  ngOnInit(): void {
    this.DataService.getData().subscribe((data) => (this.products = data));
  }
}
