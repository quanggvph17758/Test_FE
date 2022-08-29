import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryModel } from 'src/app/Model/CategoryModel';
import { ProductModel } from 'src/app/Model/ProductModel';
import { CategoryServiceService } from 'src/app/Service/category-service.service';
import { ProductServiceService } from 'src/app/Service/product-service.service';

@Component({
  selector: 'app-list-pro',
  templateUrl: './list-pro.component.html',
  styleUrls: ['./list-pro.component.css']
})

export class ListProComponent implements OnInit {

  item = []
  pros:ProductModel[]=[];
  cates:CategoryModel[]=[];
  name:any;
  constructor(private proSer:ProductServiceService, private cateSer:CategoryServiceService, private router:Router) { }

  ngOnInit() {
    this.proSer.getPro()
    .subscribe(data => {
      this.pros=data;
    });

    this.cateSer.getCate()
    .subscribe(data => {
      this.cates=data;
    });
  }

  Create() {
    this.router.navigate(["create-pro"]);
  }

  Edit(pro:ProductModel) {
    localStorage.setItem("id", pro.id.toFixed());
    this.router.navigate(["edit-pro"]);
  }


  Delete(pro:ProductModel) {
    this.proSer.deletePro(pro)
    .subscribe(data => {
      this.pros=this.pros.filter(p => p! == pro);
      alert("Xóa thành công!");
    })
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
