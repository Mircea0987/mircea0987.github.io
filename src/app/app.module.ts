import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductModalComponent } from './product-modal/product-modal.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductDescirptionComponent } from './product-descirption/product-descirption.component';
import { ProductInfoBoxComponent } from './product-info-box/product-info-box.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { ContComponent } from './cont/cont.component';
import { CreateComponent } from './create/create.component';
import { CartComponent } from './cart/cart.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { CarousellComponent } from './carousell/carousell.component';
import { ProductModalForComponent } from './product-modal-for/product-modal-for.component';
import { BoxCartComponent } from './box-cart/box-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductModalComponent,
    NavbarComponent,
    ProductDescirptionComponent,
    ProductInfoBoxComponent,
    FooterComponent,
    ProductsComponent,
    ProductComponent,
    ContComponent,
    CreateComponent,
    CartComponent,
    FavoriteComponent,
    CarousellComponent,
    ProductModalForComponent,
    BoxCartComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
