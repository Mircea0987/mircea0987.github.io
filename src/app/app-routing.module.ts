import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContComponent } from './cont/cont.component';
import { CreateComponent } from './create/create.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductDescirptionComponent } from './product-descirption/product-descirption.component';
import { ProductModalComponent } from './product-modal/product-modal.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  { component: ProductsComponent, path: '' },
  { component: ProductModalComponent, path: 'produse' },
  { component: ContComponent, path: 'cont' },
  { component: CreateComponent, path: 'create' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
