import { Component } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.sass']
})
export class RentComponent {

  constructor(private _productsService: ProductsService){}

  itemCount(){
    return this._productsService.itemsCount();
  }

}
