import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryModel } from 'src/app/Model/CategoryModel';
import { CategoryServiceService } from 'src/app/Service/category-service.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-edit-cate',
  templateUrl: './edit-cate.component.html',
  styleUrls: ['./edit-cate.component.css']
})
export class EditCateComponent implements OnInit {

  cate:CategoryModel = new CategoryModel();
  updateDate = new Date();

  constructor(private router:Router, private cateSer:CategoryServiceService, private toast: NgToastService) { }

  exform!: FormGroup;

  ngOnInit(): void {
    this.exform = new FormGroup({
      'name': new FormControl(null, Validators.required),
    });
    this.Edit();
  }

  Edit() {
    let id = localStorage.getItem("id");
    this.cateSer.getCateId(Number(id))
    .subscribe(data => {
      this.cate=data;
    });
  }


  Update(cate:CategoryModel) {
    cate.update_Date = this.updateDate;
    cate.update_user = String(sessionStorage.getItem("user"));
    this.cateSer.updateCate(cate)
    .subscribe(data => {
      cate = data;
      this.toast.success({summary:"Cập Nhật Danh Mục Sản Phẩm " + cate.name + " Thành Công" , duration:3000});
      this.router.navigate(["list-cate"]);
    }, error =>  this.toast.error({summary:"Cập Nhật Danh Mục Sản Phẩm Thất Bại" , duration:3000}));
  }

  Reset() {
    this.cate.name = "";
  }
}
