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
  pro: ProductModel = new ProductModel();
  items: any = [];

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
  }

  addToCart(pro: any) {
    if (!this.cartService.itemInCart(pro)) {
      pro.quantity = 1;
      this.cartService.addToCart(pro);
      this.items = [this.cartService.getItems()];
      alert("Thêm sản phẩm vào giỏ hàng thành công!")
    } else {
      alert("Sản phẩm đã có trong giỏ hàng!")
    }
  }


  page: number = 1;
  counts: number = 0;
  tableSize: number = 6;

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
