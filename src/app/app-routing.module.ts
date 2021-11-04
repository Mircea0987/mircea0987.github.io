import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarousellComponent } from './carousell/carousell.component';
import { CartComponent } from './cart/cart.component';
import { ContComponent } from './cont/cont.component';
import { CreateComponent } from './create/create.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductDescirptionComponent } from './product-descirption/product-descirption.component';
import { ProductModalForComponent } from './product-modal-for/product-modal-for.component';
import { ProductModalComponent } from './product-modal/product-modal.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  // { component: ProductsComponent, path: '' },
  // { path: '', redirectTo: '', pathMatch: 'full' },
  { component: ProductsComponent, path: '' },
  { component: FavoriteComponent, path: 'favorite' },
  { component: CartComponent, path: 'cart' },
  { component: ProductModalForComponent, path: 'product' },
  { component: ContComponent, path: 'cont' },
  { component: CreateComponent, path: 'create' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
