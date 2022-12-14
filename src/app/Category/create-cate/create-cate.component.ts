import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryModel } from 'src/app/Model/CategoryModel';
import { CategoryServiceService } from 'src/app/Service/category-service.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-create-cate',
  templateUrl: './create-cate.component.html',
  styleUrls: ['./create-cate.component.css']
})
export class CreateCateComponent implements OnInit {

  cate:CategoryModel = new CategoryModel();
  createDate = new Date();

  constructor(private router: Router, private cateSer: CategoryServiceService, private toast: NgToastService) { }

  exform!: FormGroup;

  ngOnInit(): void {
    this.exform = new FormGroup({
      'name': new FormControl(null, Validators.required),
    });
  }

  save() {
    this.cate.create_Date = this.createDate;
    this.cateSer.createCate(this.cate)
    .subscribe(data => {
      this.toast.success({summary:"Thêm Danh Mục Sản Phẩm " + this.cate.name + "Thành Công" , duration:3000});
      this.router.navigate(["list-cate"]);
    }, error => this.toast.error({summary:"Thêm Danh Mục Sản Phẩm Thất Bại" , duration:3000}));
  }
}
