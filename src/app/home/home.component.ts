import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryModel } from '../Model/CategoryModel';
import { FavouriteModel } from '../Model/FavouriteModel';
import { ProductModel } from '../Model/ProductModel';
import { UserModel } from '../Model/UserModel';
import { CartServiceService } from '../Service/cart-service.service';
import { CategoryServiceService } from '../Service/category-service.service';
import { FavouriteServiceService } from '../Service/favourite-service.service';
import { ProductServiceService } from '../Service/product-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pros:ProductModel[] = [];
  cates:CategoryModel[] = [];
  fav: FavouriteModel = new FavouriteModel();
  user: UserModel = new UserModel();
  pro: ProductModel = new ProductModel();
  items: any = [];
  itemsFav: any = [];

  constructor(private proSer:ProductServiceService,
              private cateSer:CategoryServiceService,
              private cartService: CartServiceService,
              private router: Router,
              private favSer: FavouriteServiceService) { }

  ngOnInit(): void {
    this.proSer.getPro()
    .subscribe(data => {
      this.pros=data;
    });

    this.cateSer.getCate()
    .subscribe(data => {
      this.cates=data;
    });

    this.fav.user_id = this.user;
    this.fav.product_id = this.pro;
  }

  listByCate() {
    let id = localStorage.getItem("id");
    this.cateSer.getCateId(Number(id))
    .subscribe(data => {
      this.proSer.getProductByCategoryId(data.id)
      .subscribe(data => {
        this.pros = data;
      });
    })
  }

  showByCate(cate:CategoryModel) {
    localStorage.setItem("id", cate.id.toFixed());
    this.listByCate();
  }

  getUser() {
    return sessionStorage.getItem("user");
  }

  addToCart(pro: any) {
    if (this.getUser() == null) {
      alert("Vui Lòng Đăng Nhập Để Đặt Hàng");
      this.router.navigate(["login"]);
    } else {
    if (!this.cartService.itemInCart(pro)) {
      pro.quantity = 1;
      this.cartService.addToCart(pro);
      this.items = [this.cartService.getItems()];
      alert("Thêm sản phẩm vào giỏ hàng thành công!")
      sessionStorage.setItem("item", pro.id);
    } else {
      alert("Sản phẩm đã có trong giỏ hàng!")
    }
  }
  }

  addToFavourite(pro: any) {
    if (this.getUser() == null) {
      alert("Vui Lòng Đăng Nhập!");
      this.router.navigate(["login"]);
    } else {
          this.fav.user_id.id = Number(sessionStorage.getItem("id"));
          this.fav.product_id.id = pro.id;
          this.favSer.createFavourite(this.fav)
          .subscribe(data => {
            alert("Thêm sản phẩm vào mục yêu thích thành công!");
        });
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
