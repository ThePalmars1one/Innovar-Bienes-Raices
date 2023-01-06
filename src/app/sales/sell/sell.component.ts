import { Component } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.sass']
})
export class SellComponent {

  constructor(private _productsService: ProductsService){}

  itemCount(){
    return this._productsService.itemsCount();
  }

}
