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

  deleteCart(){
    let totalProducts = this.items.length;
    this._productsService.clearCart(totalProducts);
  }

  send(){
    var message= "Estoy interesado en los siguientes inmuebles: ";
    var totalItems = this.items.length
    this.items.forEach(function(product){
      message += " N° ID: " + product.id + ", Ubicado en " + product.location + " y con un canon de " + product.price + "$." + "\n"
    })
    if (totalItems > 1){
      message += "En total me interesan " + totalItems + " inmuebles para agendar una visita."
    }else {
      message += "En total me interesa " + totalItems + " inmueble para agendar una visita."
    }
    this._productsService.sendMessage(message)
  }

}
