import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { DataService } from '../products/data.service';

@Component({
  selector: 'app-product-modal-for',
  templateUrl: './product-modal-for.component.html',
  styleUrls: ['./product-modal-for.component.css'],
})
export class ProductModalForComponent implements OnInit {
  @Input() product: Product;
  constructor(public DataService: DataService) {}
  products: Product[];
  ngOnInit(): void {
    this.DataService.getData().subscribe((data) => (this.products = data));
  }
}
