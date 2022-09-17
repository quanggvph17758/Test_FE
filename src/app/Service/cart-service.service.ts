import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductModel } from '../Model/ProductModel';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  constructor(private http:HttpClient) { }

  items: any = [];

  addToCart(addedItem: any) {
    this.items.push(addedItem);

    this.saveCart();
  }

  getItems() {
    return this.items;
  }

  loadCart(): void {
    var json = localStorage.getItem("cart_items");
    this.items = json ? JSON.parse(json) : [];
  }

  saveCart(): void {
    localStorage.setItem('cart_items', JSON.stringify(this.items));
  }

  clearCart(items: any) {
    this.items = [];

    localStorage.removeItem("cart_items")
  }

  removeItem(item: any) {
    const index = this.items.findIndex((o: any) => o.id === item.id);

    if (index > -1) {
      this.items.splice(index, 1);
      this.saveCart();
    }
  }

  itemInCart(item: any): boolean {
    return this.items.findIndex((o: any) => o.id === item.id) > -1;
  }
}
