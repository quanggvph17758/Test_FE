import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderDetailModel } from 'src/app/Model/OrderDetailModel';
import { OrderModel } from 'src/app/Model/OrderModel';
import { ProductModel } from 'src/app/Model/ProductModel';
import { OrderServiceService } from 'src/app/Service/order-service.service';
import { OrderdetailServiceService } from 'src/app/Service/orderdetail-service.service';

@Component({
  selector: 'app-checkout-oder',
  templateUrl: './checkout-oder.component.html',
  styleUrls: ['./checkout-oder.component.css']
})
export class CheckoutOderComponent implements OnInit {

  order: OrderModel = new OrderModel();
  pro: ProductModel = new ProductModel();
  orderDe: OrderDetailModel = new OrderDetailModel();
  createDate = new Date();
  items: any;

  constructor(private orderSer: OrderServiceService, private orderDeSer: OrderdetailServiceService, private router: Router) { }

  ngOnInit(): void {

  }

  checkOut() {
    this.orderSer.createOrder(this.order)
    .subscribe(data => {
      alert("Đặt hàng thành công")
      this.router.navigate(["home"]);
    });

    // this.orderDeSer.createOrderDetail(this.orderDe)
    // .subscribe(data => {

    // });
  }

}
