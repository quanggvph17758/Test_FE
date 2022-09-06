import { Component, OnInit } from '@angular/core';
import { OrderDetailModel } from 'src/app/Model/OrderDetailModel';
import { OrderModel } from 'src/app/Model/OrderModel';
import { CartServiceService } from 'src/app/Service/cart-service.service';
import { OrderServiceService } from 'src/app/Service/order-service.service';
import { OrderdetailServiceService } from 'src/app/Service/orderdetail-service.service';

@Component({
  selector: 'app-detail-oder',
  templateUrl: './detail-oder.component.html',
  styleUrls: ['./detail-oder.component.css']
})
export class DetailOderComponent implements OnInit {

  orders: OrderModel[] = [];
  orderDetails: OrderDetailModel[] = [];
  items: any = [];
  grandTotal!: number;
  quantity: number = 0;

  constructor(private orderSer: OrderServiceService, private orderDeSer: OrderdetailServiceService, private cartSer: CartServiceService) { }

  ngOnInit(): void {
    this.orderDeSer.getOderDetail()
    .subscribe(data => {
      this.orderDetails = data;
    });

    this.orderSer.getOrder()
    .subscribe(data => {
      this.orders = data;
    });

    this.cartSer.getProduts()
    .subscribe(data => {
      this.items = data;
      this.quantity++;
      this.grandTotal = this.cartSer.getTotalPrice();
    })
  }

}
