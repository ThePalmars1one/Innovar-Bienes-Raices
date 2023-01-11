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
  itemWS: any = products;

  constructor(private _productsService: ProductsService) {}

  ngOnInit() {
    
  }

  deleteItem(list: any){
    this._productsService.deleteItem(list);
  }

  send(){
    var message= "Estoy interesado en los siguientes inmuebles: "
    this.items.forEach(function(product){
      message += " N° ID: " + product.id + " Ubicado en " + product.location + " y con un canon de " + product.price + "$." + "\n"
    })
    this._productsService.sendMessage(message)
  }

}
