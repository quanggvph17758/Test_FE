import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductModel } from '../Model/ProductModel';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  cartItemList: any = []
  productList = new BehaviorSubject<any>([]);

  products: ProductModel[] = [];
  quantity: number = 0;

  constructor(private http:HttpClient) { }

  getProducts() {
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
    this.saveToLocalStorage();
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
        this.saveToLocalStorage();
      }
    })
    this.productList.next(this.cartItemList);
  }

  removeAllCart() {
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
    localStorage.clear();
  }

  saveToLocalStorage() {
    localStorage.setItem('cart_items', JSON.stringify(this.products));
  }

  loadToLocalStorage() {
    this.products = JSON.parse(localStorage.getItem('cart_items') as any) || [];
  }

  productInCart(pro: ProductModel) {
    return this.products.findIndex((x: any) => x.id === pro.id) > -1;
  }

}
