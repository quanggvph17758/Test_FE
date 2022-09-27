import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryModel } from 'src/app/Model/CategoryModel';
import { ProductModel } from 'src/app/Model/ProductModel';
import { CategoryServiceService } from 'src/app/Service/category-service.service';
import { ProductServiceService } from 'src/app/Service/product-service.service';
import { UploadImgService } from 'src/app/Service/upload-img.service';

@Component({
  selector: 'app-create-pro',
  templateUrl: './create-pro.component.html',
  styleUrls: ['./create-pro.component.css']
})
export class CreateProComponent implements OnInit {

  pro:ProductModel = new ProductModel();
  cates:CategoryModel[]=[];
  cate: CategoryModel = new CategoryModel();
  createDate = new Date();

  constructor(private proSer:ProductServiceService, private cateSer:CategoryServiceService, private router:Router, private uploadSer: UploadImgService) { }

  exform!: FormGroup;

  ngOnInit(): void {
    this.exform = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'price': new FormControl(null, Validators.required),
      'categoryId': new FormControl(null, Validators.required),
    });

    this.cateSer.getCate()
    .subscribe(data => {
      this.cates=data;
    });

    this.pro.category_id = this.cate;

  }

  uploadFile: any;

  Save(pro:ProductModel) {
    pro.create_Date = this.createDate
    this.proSer.createPro(pro)
    .subscribe(data => {
      var formdata = new FormData();
      formdata.append('files', this.uploadFile || [0]);
       this.uploadSer.uploadFile(formdata)
       .subscribe(res => {
        pro.images = res.name;
        alert("Thêm Sản Phẩm thành công")
        this.router.navigate(["list-pro"]);
       });
    })
  }

  onChange() {
    this.uploadFile;
  }
}
