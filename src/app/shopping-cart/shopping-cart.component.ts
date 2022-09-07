import { Component, OnInit } from '@angular/core';
import { OrderDetailModel } from '../Model/OrderDetailModel';
import { CartServiceService } from '../Service/cart-service.service';
import { OrderdetailServiceService } from '../Service/orderdetail-service.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  items: any = [];
  grandTotal!: number;
  quantity: number = 0;
  subTotal!: any;

  oDetail: OrderDetailModel = new OrderDetailModel();

  constructor(private cartSer: CartServiceService, private orderDeSer: OrderdetailServiceService) { }

  ngOnInit(): void {
    this.cartSer.getProducts()
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
