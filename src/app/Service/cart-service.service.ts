import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  cartItemList: any = []
  productList = new BehaviorSubject<any>([]);

  url = "http://localhost:8080/test/product";

  constructor() { }

  getProduts() {
    return this.productList.asObservable();
  }

  setProducts(product: any) {
    this.cartItemList.push(product);
    this.productList.next(product);
  }

  addToCart(product: any) {
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
  }

  getTotalPrice(): number {
    let grandTotal = 0;
    this.cartItemList.map((a: any) => {
      grandTotal += a.total;
    })
    return grandTotal;
  }

  removeCartItem(product: any) {
    this.cartItemList.map((a: any, index: any) => {
      if(product.id === a.id) {
        this.cartItemList.splice(index, 1);
      }
    })
    this.productList.next(this.cartItemList);
  }

  removeAllCart() {
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }

}
