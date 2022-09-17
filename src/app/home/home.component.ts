import { Component, OnInit } from '@angular/core';
import { CategoryModel } from '../Model/CategoryModel';
import { ProductModel } from '../Model/ProductModel';
import { CartServiceService } from '../Service/cart-service.service';
import { CategoryServiceService } from '../Service/category-service.service';
import { ProductServiceService } from '../Service/product-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pros:ProductModel[] = [];
  cates:CategoryModel[] = [];

  items: any = [];
  subTotalItems: any;

  constructor(private proSer:ProductServiceService, private cateSer:CategoryServiceService, private cartService: CartServiceService) { }

  ngOnInit(): void {
    this.proSer.getPro()
    .subscribe(data => {
      this.pros=data;
    });

    this.cateSer.getCate()
    .subscribe(data => {
      this.cates=data;
    });

    this.count();
    this.amount();
  }


  //----- add item to cart
  addToCart(pro: any) {
    if (!this.cartService.itemInCart(pro)) {
      pro.quantity = 1;
      this.cartService.addToCart(pro); //add items in cart
      this.items = [this.cartService.getItems()];
    }
  }

  get count() {
    return this.items
      .map((item: any) => item.quantity )
      .reduce((total: any, quantity: any) => total += quantity, 0);
  }

  get amount() {
    return this.items
      .map((item: any) => item.quantity * item.price)
      .reduce((total: any, quantity: any) => total += quantity, 0);
  }
}
