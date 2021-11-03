import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarousellComponent } from './carousell/carousell.component';
import { ContComponent } from './cont/cont.component';
import { CreateComponent } from './create/create.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductDescirptionComponent } from './product-descirption/product-descirption.component';
import { ProductModalForComponent } from './product-modal-for/product-modal-for.component';
import { ProductModalComponent } from './product-modal/product-modal.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  // { component: CarousellComponent, path: 'carousell' },
  // { component: ProductsComponent, path: '' },
  // { path: '', redirectTo: '', pathMatch: 'full' },
  { component: ProductModalForComponent, path: 'product' },
  // { component: ContComponent, path: 'cont' },
  // { component: CreateComponent, path: 'create' },
  {component: ProductsComponent, path:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
