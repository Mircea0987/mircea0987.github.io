import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryComponent } from './categories/category/category.component';
import { ContComponent } from './cont/cont.component';
import { CreateComponent } from './create/create.component';
import { FavoriteComponent } from './favorite/favorite.component';

import { ProductModalForComponent } from './product-modal-for/product-modal-for.component';

import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  { component: ProductsComponent, path: '' },
  { component: FavoriteComponent, path: 'favorite' },
  { component: CartComponent, path: 'cart' },
  { component: ProductModalForComponent, path: 'product' },
  { component: ContComponent, path: 'cont' },
  { component: CreateComponent, path: 'create' },
  { component: CategoriesComponent, outlet: 'categories', path: '' },
  { component: CategoryComponent, path: 'categorii' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
