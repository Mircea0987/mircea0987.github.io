import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/category-inteface';
import { Product } from 'src/app/product.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {

  @Input() category: Product;

  constructor() {}

  ngOnInit(): void {}
}
