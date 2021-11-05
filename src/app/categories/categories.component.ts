import { Component, OnInit } from '@angular/core';
import { Category } from '../category-inteface';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  categoryes: Category[] = [
    {
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
  constructor() {}

  ngOnInit(): void {}
}
