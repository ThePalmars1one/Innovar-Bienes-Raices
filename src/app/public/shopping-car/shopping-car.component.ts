import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { iProducts, products } from 'src/app/products';

@Component({
  selector: 'app-shopping-car',
  templateUrl: './shopping-car.component.html',
  styleUrls: ['./shopping-car.component.sass']
})
export class ShoppingCarComponent implements OnInit{

  items = this._productsService.getItems();

  constructor(private _productsService: ProductsService) {}

  ngOnInit() {
    
  
  }


}
