import { Component, OnInit} from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { products, iProducts } from 'src/app/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {

  product: iProducts | undefined;
  products: any = products;
  

  constructor (private _productsService: ProductsService){}

  ngOnInit(): void {
  }

  addToCart(products: any) {
    this._productsService.addToCart(products);
    console.log(this.products);
  }
}
