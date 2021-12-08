import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product.model';
import { DataService } from 'src/app/products/data.service';

@Component({
  selector: 'app-categories-for',
  templateUrl: './categories-for.component.html',
  styleUrls: ['./categories-for.component.css'],
})
export class CategoriesForComponent implements OnInit {
  constructor(public dataService: DataService) {}
  
  product: Product[];

  ngOnInit(): void {
    this.dataService.getData().subscribe((data) => (this.product = data));
  }
}
