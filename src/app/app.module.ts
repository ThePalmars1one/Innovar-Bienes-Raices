import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { NavBarComponent } from './home/nav-bar/nav-bar.component';
import { FooterComponent } from './home/footer/footer.component';
import { HomeComponent } from './home/home/home.component';
import { RentComponent } from './renting/rent/rent.component';
import { ProductsComponent } from './renting/products/products.component';
import { SellComponent } from './sales/sell/sell.component';
import { ProductsSellComponent } from './sales/products-sell/products-sell.component';
import { ShoppingCarComponent } from './public/shopping-car/shopping-car.component';
import { SliderComponent } from './home/slider/slider.component';
import { SwiperModule } from "swiper/angular";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    RentComponent,
    ProductsComponent,
    SellComponent,
    ProductsSellComponent,
    ShoppingCarComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
