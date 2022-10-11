import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderModel } from 'src/app/Model/OrderModel';
import { ProductModel } from 'src/app/Model/ProductModel';
import { UserModel } from 'src/app/Model/UserModel';
import { OrderServiceService } from 'src/app/Service/order-service.service';
import { OrderDetailModel } from '../../Model/OrderDetailModel';
import { CartServiceService } from '../../Service/cart-service.service';
import { OrderdetailServiceService } from '../../Service/orderdetail-service.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  oDetail: OrderDetailModel = new OrderDetailModel();
  items: any = [];
  order: OrderModel = new OrderModel();
  pro: ProductModel = new ProductModel();
  user: UserModel = new UserModel();
  orderDe: OrderDetailModel = new OrderDetailModel();
  createDate = new Date();

  exform!: FormGroup;

  constructor(private cartService: CartServiceService,
              private orderSer: OrderServiceService,
              private orderDeSer: OrderdetailServiceService,
              private router: Router,
              private toast: NgToastService) { }

  ngOnInit(): void {
      this.cartService.loadCart();
      this.items = this.cartService.getItems();

    this.exform = new FormGroup({
      'phone': new FormControl(null, [Validators.required, Validators.pattern("(\\+84|0)([0-9]{9}|[0-9]{10})")]),
    });

    this.orderDe.order_id = this.order;
    this.orderDe.product_id = this.pro;
    this.order.user_id = this.user;

  }

  getUserId() {
    return sessionStorage.getItem("id");
  }

  getEmail()  {
    return sessionStorage.getItem("email");
  }

  getAddress() {
    return sessionStorage.getItem("address");
  }

  getItem() {
    return localStorage.getItem("cart_items");
  }

  saveCart() {
    this.cartService.saveCart();
  }

  removeFromCart(item: any) {
    this.cartService.removeItem(item);
    sessionStorage.removeItem("item");
    this.toast.success({summary:"Xóa Sản Phẩm " + item.name + " Khỏi Giỏ Hàng Thành Công" , duration:3000});
    this.items = this.cartService.getItems();
    this.ngOnInit();
  }

  clearCart(items: any) {
    this.cartService.clearCart(items);
    sessionStorage.removeItem("item");
    this.items = [this.cartService.getItems()];
    this.toast.success({summary:"Xóa Tất Cả Sản Phẩm Khỏi Giỏ Hàng Thành Công" , duration:3000});
    this.ngOnInit();
  }

  clearCartAll(items: any) {
    this.cartService.clearCart(items);
    sessionStorage.removeItem("item");
    this.items = [this.cartService.getItems()];
    this.ngOnInit();
  }

  checkOut() {
    this.order.create_date = this.createDate;
    this.order.status = "Chờ Xác Nhận";
    this.order.address = String(sessionStorage.getItem("address"));
    this.order.user_id.id = Number(sessionStorage.getItem("id"));
    this.orderSer.createOrder(this.order)
    .subscribe(data => {
      this.orderDe.order_id.id = data.id;
      this.items.map((item: any) => {
        this.orderDe.product_id.id = item.id;
        this.orderDe.price = item.price;
        this.orderDe.quantity = item.quantity;
      this.orderDeSer.createOrderDetail(this.orderDe)
      .subscribe(data => {
        this.clearCartAll(data);
      })});
      this.toast.success({summary:"Đặt Hàng Thành Công" , duration:3000});
      this.router.navigate(["home"]);
    }, error =>  this.toast.error({summary:"Đặt Hàng Thất Bại" , sticky: true}));
  }
}
