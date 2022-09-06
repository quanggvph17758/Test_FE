import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderModel } from 'src/app/Model/OrderModel';
import { OrderServiceService } from 'src/app/Service/order-service.service';

@Component({
  selector: 'app-checkout-oder',
  templateUrl: './checkout-oder.component.html',
  styleUrls: ['./checkout-oder.component.css']
})
export class CheckoutOderComponent implements OnInit {

  order: OrderModel = new OrderModel();

  constructor(private orderSer: OrderServiceService, private router: Router) { }

  ngOnInit(): void {

  }

  checkOut() {
    this.orderSer.createOrder(this.order)
    .subscribe(data => {
      alert("Đặt hàng thành công")
      this.router.navigate(["list-order"]);
    })
  }

}
