import { Injectable} from '@angular/core';
import { iProducts } from '../products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
 
  items: iProducts[] = [];
  url: string = "https://api.whatsapp.com/send?phone=+573205728762&text="
  sl: string= "&0A";
  full: any [] = []

  constructor() { }

  addToCart(product: iProducts) {
    let index = -1;
    index = this.items.findIndex(
        p => p.id === product.id
      );
      if (index != -1) {
        this.items[index].quantity += 1;
        alert("No puede agregar inmuebles repetidos")
      } else if (index === -1) {
        this.items.push(product);
      }
    
  }

  getItems() {
    return this.items;
  }

  itemsCount(){
    return this.items.length;
  }

  deleteItem(product: iProducts){
    let indexC = this.items.findIndex(p => p.id === product.id);
    this.items.splice(indexC,1);
    return this.items;
  }

  clearCart(totalItems: number){
    let indexC = this.items.findIndex(p => p.id === p.id);
    this.items.splice(indexC, totalItems)
    return this.items
  }

  sendMessage(product: string) {
    let info = product;
    var url = 'https://api.whatsapp.com/send?phone=573205728762&text=' + encodeURIComponent(info);
    window.open(url);
  }


}
