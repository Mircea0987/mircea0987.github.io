import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Category } from '../category-inteface';
import { Product } from '../product.model';
import { DataService } from '../products/data.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  search:any;
  categoryes: Category[] = [
    {
      category: 'Mobila',
    },
    {
      category: 'Carti',
    },
    {
      category: 'Telefoane',
    },
    {
      category: 'Masini',
    },
    {
      category: 'PC',
    },
    {
      category: 'Aer Conditionat',
    },
  ];
  constructor(
    public DataService: DataService,
    public cartService: CartService
  ) {}
  // Sorting(){
  //   this.cartService.Sort()

  // }

  ngOnInit(): void {}
}
