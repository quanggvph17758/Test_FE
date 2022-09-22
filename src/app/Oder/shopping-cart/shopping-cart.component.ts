import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderModel } from 'src/app/Model/OrderModel';
import { ProductModel } from 'src/app/Model/ProductModel';
import { OrderServiceService } from 'src/app/Service/order-service.service';
import { OrderDetailModel } from '../../Model/OrderDetailModel';
import { CartServiceService } from '../../Service/cart-service.service';
import { OrderdetailServiceService } from '../../Service/orderdetail-service.service';

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
  orderDe: OrderDetailModel = new OrderDetailModel();
  createDate = new Date();

  exform!: FormGroup;

  constructor(private cartService: CartServiceService,
              private orderSer: OrderServiceService,
              private orderDeSer: OrderdetailServiceService,
              private router: Router) { }

  ngOnInit(): void {
    this.cartService.loadCart();
    this.items = this.cartService.getItems();

    this.exform = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.pattern("^[\\w-_\\.+]*[\\w-_\\.]\\@([\\w]+\\.)+[\\w]+[\\w]$")]),
      'phone': new FormControl(null, [Validators.required, Validators.pattern("(\\+84|0)([0-9]{9}|[0-9]{10})")]),
      'address': new FormControl(null, Validators.required),
    });

    console.log(this.items);

    this.orderDe.order_id = this.order;
    this.orderDe.product_id = this.pro;
  }

  removeFromCart(item: any) {
    this.cartService.removeItem(item);
    this.items = this.cartService.getItems();
  }

  clearCart(items: any) {
    this.cartService.clearCart(items);
    this.items = [this.cartService.getItems()];
    this.ngOnInit();
  }

  checkOut() {
    this.order.create_date = this.createDate;
    this.order.status = "Chờ Xác Nhận";
    this.orderSer.createOrder(this.order)
    .subscribe(data => {
      this.orderDe.order_id.id = data.id;
      this.orderDe.product_id.id = this.items.id;
      this.orderDe.price = this.items.price;
      this.orderDe.quantity = this.items.quantity;
      this.orderDeSer.createOrderDetail(this.orderDe)
      .subscribe(data => {
        alert("Đặt hàng thành công");
        this.router.navigate(["home"]);
      });
    });
  }
}
