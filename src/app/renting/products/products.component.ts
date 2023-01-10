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
  products: any= products;
  allProducts: any = products;

  constructor (private _productsService: ProductsService){}

  ngOnInit(): void {
  
  }

  addToCart(products: any) {
    this._productsService.addToCart(products);
    console.log(this.products);
  }

  filterC(category: string){
    if(category === ""){
      this.products = this.allProducts
    }else if (category === "house"){
      this.products = this.allProducts.filter ((p: any) => p.type === "house")
    }else if (category === "apartment"){
      this.products = this.allProducts.filter ((p: any) => p.type === "apartment")
    }else{
      this.products = this.allProducts
    }
  }
  
}
