import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  productList: any;

  items!: [];
  quantity: number = 0;

  totalItem: number = 0;

  constructor(private proSer:ProductServiceService, private cateSer:CategoryServiceService, private cartSer:CartServiceService,) { }

  ngOnInit(): void {
    this.proSer.getPro()
    .subscribe(data => {
      this.pros=data;
    });

    this.cateSer.getCate()
    .subscribe(data => {
      this.cates=data;
    });

    this.cartSer.getProduts()
    .subscribe(data => {
      this.totalItem = data.length;
    })
  }

  addToCart(pro: any) {
    this.cartSer.addToCart(pro);
  }
}
