import { Component, OnInit } from '@angular/core';
import { OrderDetailModel } from 'src/app/Model/OrderDetailModel';
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
  orderDetail: OrderDetailModel = new OrderDetailModel;
  items: any = [];

  constructor(private orderSer: OrderServiceService, private orderDeSer: OrderdetailServiceService, private cartSer: CartServiceService) { }

  ngOnInit(): void {

    this.orderDeSer.getOrderDetail()
    .subscribe(data => {
      this.orderDetails = data;
    });
  }
}
