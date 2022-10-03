import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderModel } from 'src/app/Model/OrderModel';
import { OrderServiceService } from 'src/app/Service/order-service.service';
import { OrderdetailServiceService } from 'src/app/Service/orderdetail-service.service';

@Component({
  selector: 'app-your-oder',
  templateUrl: './your-oder.component.html',
  styleUrls: ['./your-oder.component.css']
})
export class YourOderComponent implements OnInit {

  orders: OrderModel[] = [];
  order: OrderModel = new OrderModel();
  items: any = [];

  constructor(private orderSer: OrderServiceService, private router: Router, private orderDeSer: OrderdetailServiceService) { }

  ngOnInit(): void {
    let id = sessionStorage.getItem("id");
    this.orderSer.getOrderByUserId(Number(id))
    .subscribe(data => {
      this.orders = data;
    })
  }

  showOrderDetail(order: any) {
    localStorage.setItem("id", order.id.toFixed());
    this.router.navigate(["your-orderDetail"]);
  }

  HuyDonHang(order: OrderModel) {
    order.status = "Hủy Đơn Hàng";
    this.orderSer.update(order)
    .subscribe(data => {
      order = data;
      alert("Hủy đơn hàng thành công");
      this.ngOnInit();
    });
  }

  page: number = 1;
  count: number = 0;
  tableSize: number = 5;

  fetchPosts(){
    this.ngOnInit();
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.fetchPosts();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchPosts();
  }

}
