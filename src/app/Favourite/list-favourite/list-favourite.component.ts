import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FavouriteModel } from 'src/app/Model/FavouriteModel';
import { ProductModel } from 'src/app/Model/ProductModel';
import { CartServiceService } from 'src/app/Service/cart-service.service';
import { FavouriteServiceService } from 'src/app/Service/favourite-service.service';

@Component({
  selector: 'app-list-favourite',
  templateUrl: './list-favourite.component.html',
  styleUrls: ['./list-favourite.component.css']
})
export class ListFavouriteComponent implements OnInit {

  favs: FavouriteModel [] = [];
  fav: FavouriteModel = new FavouriteModel();
  pro: ProductModel = new ProductModel();
  items: any = [];

  constructor(private favSer: FavouriteServiceService,
              private cartService: CartServiceService,
              private router: Router) { }

  ngOnInit(): void {
    let id = sessionStorage.getItem("id");
    this.favSer.getFavouriteByUserId(Number(id))
    .subscribe(data => {
      this.favs = data;
    })

    this.fav.product_id = this.pro;
  }

  addToCart(fav: any) {
    if (!this.cartService.itemInCart(fav.product_id)) {
      fav.product_id.quantity = 1;
      this.cartService.addToCart(fav.product_id);
      this.items = [this.cartService.getItems()];
      alert("Thêm sản phẩm vào giỏ hàng thành công!")
      this.router.navigate(["cart"]);
      sessionStorage.setItem("item", fav.product_id.id);
    } else {
      alert("Sản phẩm đã có trong giỏ hàng!")
    }
  }

  Delete(fav: FavouriteModel) {
    this.favSer.deleteFavourite(fav)
    .subscribe(data => {
      this.favs=this.favs.filter(p => p! == fav);
      alert("Bỏ yêu thích sản phẩm thành công!");
      this.ngOnInit();
    })
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
