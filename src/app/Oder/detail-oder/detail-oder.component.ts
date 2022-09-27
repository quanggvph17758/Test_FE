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

  orderDetails: OrderDetailModel[] = [];
  orderDetail: OrderDetailModel = new OrderDetailModel();
  order: OrderModel = new OrderModel();
  items: any = [];

  constructor(private orderSer: OrderServiceService, private orderDeSer: OrderdetailServiceService, private cartSer: CartServiceService) { }

  ngOnInit(): void {
    let id = localStorage.getItem("id");
    this.orderSer.getOrderById(Number(id))
    .subscribe(data => {
      this.order=data;
      this.orderDeSer.getOrderDetailById(data.id)
      .subscribe(data => {
        this.orderDetails = data;
      })
    });
  }
}

