import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryModel } from 'src/app/Model/CategoryModel';
import { CategoryServiceService } from 'src/app/Service/category-service.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-list-cate',
  templateUrl: './list-cate.component.html',
  styleUrls: ['./list-cate.component.css']
})
export class ListCateComponent implements OnInit {

  cates:CategoryModel[]=[];
  name:any;

  constructor(private router:Router, private cateSer:CategoryServiceService, private toast: NgToastService) { }

  ngOnInit(): void {
    this.cateSer.getCate()
    .subscribe(data => {
      this.cates=data;
    })
  }

  Edit(cate:CategoryModel) {
    localStorage.setItem("id", cate.id.toFixed());
    this.router.navigate(["edit-cate"]);
  }

  getRole() {
    return sessionStorage.getItem("role");
  }

  Delete(cate:CategoryModel) {
    this.cateSer.deleteCate(cate)
    .subscribe(data => {
      this.cates=this.cates.filter(cate => cate! == cate);
      this.toast.success({summary:"Xóa Danh Mục Sản Phẩm " + cate.name + " Thành Công" , duration:3000});
      this.ngOnInit();
    }, error =>  this.toast.error({summary:"Xóa Danh Mục Sản Phẩm Thất Bại" , sticky: true}));
  }

  Search(){
    if (this.name == "") {
      this.ngOnInit();
    } else {
      this.cates = this.cates.filter(data => {
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
