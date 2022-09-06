import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../Model/ProductModel';
import { CartServiceService } from '../Service/cart-service.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  items: any = [];
  grandTotal!: number;
  quantity: number = 0;

  constructor(private cartSer: CartServiceService) { }

  ngOnInit(): void {
    this.cartSer.getProduts()
    .subscribe(data => {
      this.items = data;
      this.quantity++;
      this.grandTotal = this.cartSer.getTotalPrice();
    })
  }

  removeItem(item: any) {
    this.cartSer.removeCartItem(item);
  }

  removeAll() {
    this.cartSer.removeAllCart();
  }

}
