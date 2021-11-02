import { Component, Input } from '@angular/core';
import { productDescription } from 'src/product-description';
import { Product } from './product.model';
import { Y } from './y';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'input';
  // productDescription: productDescription[] = [
  //   {
  //     title: 'string',
  //     price: 3,
  //     gen: 'string3',
  //     description: 'string',
  //   },
  //   {
  //     title: 'string',
  //     price: 3,
  //     gen: 'string2',
  //     description: 'string',
  //   },
  //   {
  //     title: 'string',
  //     price: 3,
  //     gen: 'string4',
  //     description: 'string',
  //   },
  //   {
  //     title: 'string',
  //     price: 3,
  //     gen: 'string4',
  //     description: 'string',
  //   },
  // ];
}
