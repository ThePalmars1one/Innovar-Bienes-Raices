import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { ShoppingCarComponent } from './public/shopping-car/shopping-car.component';
import { RentComponent } from './renting/rent/rent.component';
import { SellComponent } from './sales/sell/sell.component';

const routes: Routes = [
  {path:"Home", component: HomeComponent},
  {path: "Rent", component: RentComponent},
  {path: "Cart", component: ShoppingCarComponent},
  {path: "Sales", component: SellComponent},
  {path: "", component: HomeComponent, pathMatch: "full"},
  {path: "**", redirectTo: "/", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
