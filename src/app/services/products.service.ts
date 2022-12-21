import { Injectable} from '@angular/core';
import { iProducts } from '../products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
 
  items: iProducts[] = [];

  constructor() { }

  addToCart(product: iProducts) {
    this.items.push(product);
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

}
