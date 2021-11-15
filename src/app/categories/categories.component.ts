import { Component, OnInit } from '@angular/core';
import { Category } from '../category-inteface';
import { Product } from '../product.model';
import { DataService } from '../products/data.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  categoryes: Product[] = [
    {
      id: 1,
      title: 'string',
      category: 'Mobila',
      company: 'string',
      deliveryCompany: 'string',
      price: 1,
      rate: 2,
      isInStock: true,
      description: 'string',
      descriptionDescription: 'string',
      dimensions: 'string',
      material: 'string',
      url: 'string',
    },
    {
      id: 2,
      title: 'string',
      category: 'Carti',
      company: 'string',
      deliveryCompany: 'string',
      price: 1,
      rate: 2,
      isInStock: true,
      description: 'string',
      descriptionDescription: 'string',
      dimensions: 'string',
      material: 'string',
      url: 'string',
    },
    {
      id: 3,
      title: 'string',
      category: 'Telefoane',
      company: 'string',
      deliveryCompany: 'string',
      price: 1,
      rate: 2,
      isInStock: true,
      description: 'string',
      descriptionDescription: 'string',
      dimensions: 'string',
      material: 'string',
      url: 'string',
    },
    
  ];
  constructor(public DataService: DataService) {}

  ngOnInit(): void {}
}
