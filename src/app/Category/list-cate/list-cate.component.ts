import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryModel } from 'src/app/Model/CategoryModel';
import { CategoryServiceService } from 'src/app/Service/category-service.service';

@Component({
  selector: 'app-list-cate',
  templateUrl: './list-cate.component.html',
  styleUrls: ['./list-cate.component.css']
})
export class ListCateComponent implements OnInit {

  cates:CategoryModel[]=[];
  name:any;

  constructor(private router:Router, private cateSer:CategoryServiceService) { }

  ngOnInit(): void {
    this.cateSer.getCate()
    .subscribe(data => {
      this.cates=data;
    })
  }

  Create() {
    this.router.navigate(["create-cate"]);
  }

  Edit(cate:CategoryModel) {
    localStorage.setItem("id", cate.id.toFixed());
    this.router.navigate(["edit-cate"]);
  }


  Delete(cate:CategoryModel) {
    this.cateSer.deleteCate(cate)
    .subscribe(data => {
      this.cates=this.cates.filter(cate => cate! == cate);
      alert("Xóa thành công!");
    })
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
