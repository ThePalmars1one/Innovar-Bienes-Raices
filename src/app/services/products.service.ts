import { Injectable} from '@angular/core';
import { iProducts } from '../products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
 
  items: iProducts[] = [];

  constructor() { }

  addToCart(product: iProducts) {
    let index = -1;
    index = this.items.findIndex(
        p => p.id === product.id
      );
      if (index != -1) {
        this.items[index].quantity += 1;
      } else if (index === -1) {
        this.items.push(product);
      }
    
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
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

  





}
