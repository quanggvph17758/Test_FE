import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryModel } from 'src/app/Model/CategoryModel';
import { ProductModel } from 'src/app/Model/ProductModel';
import { CategoryServiceService } from 'src/app/Service/category-service.service';
import { ProductServiceService } from 'src/app/Service/product-service.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-list-pro',
  templateUrl: './list-pro.component.html',
  styleUrls: ['./list-pro.component.css']
})

export class ListProComponent implements OnInit {

  pros:ProductModel[] = [];
  name:any;

  constructor(private proSer:ProductServiceService,
              private cateSer:CategoryServiceService,
              private router:Router,
              private toast: NgToastService) { }

  ngOnInit() {
    this.proSer.getPro()
    .subscribe(data => {
      this.pros=data;
    });
  }

  Edit(pro:ProductModel) {
    localStorage.setItem("id", pro.id.toFixed());
    this.router.navigate(["edit-pro"]);
  }

  getRole() {
    return sessionStorage.getItem("role");
  }


  Delete(pro:ProductModel) {
    this.proSer.deletePro(pro)
    .subscribe(data => {
      this.pros=this.pros.filter(p => p! == pro);
      this.toast.success({summary:"Xóa Sản Phẩm " + pro.name + " Thành Công" , duration:3000});
      this.ngOnInit();
    }, error => this.toast.error({summary:"Xóa Sản Phẩm Thất Bại" , duration:3000}));
  }

  Search(){
    if (this.name == "") {
      this.ngOnInit();
    } else {
      this.pros = this.pros.filter(data => {
        return data.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      });
    }
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
