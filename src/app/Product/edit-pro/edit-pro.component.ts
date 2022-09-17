import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryModel } from 'src/app/Model/CategoryModel';
import { ProductModel } from 'src/app/Model/ProductModel';
import { CategoryServiceService } from 'src/app/Service/category-service.service';
import { ProductServiceService } from 'src/app/Service/product-service.service';
import { UploadImgService } from 'src/app/Service/upload-img.service';

@Component({
  selector: 'app-edit-pro',
  templateUrl: './edit-pro.component.html',
  styleUrls: ['./edit-pro.component.css']
})
export class EditProComponent implements OnInit {

  pro:ProductModel = new ProductModel();
  cates:CategoryModel[]=[];
  cate: CategoryModel = new CategoryModel();
  shortLink: string = "";
  loading: boolean = false;
  file!: File;

  constructor(private proSer:ProductServiceService, private cateSer:CategoryServiceService, private router:Router, private uploadSer: UploadImgService) { }

  exform!: FormGroup;

  ngOnInit(): void {
    this.exform = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'create_Date': new FormControl(null, Validators.required),
      'price': new FormControl(null, Validators.required),
      'categoryId': new FormControl(null, Validators.required),
    });

    this.cateSer.getCate()
    .subscribe(data => {
      this.cates=data;
    });

    this.pro.category_id = this.cate

    this.Edit();
  }

  Edit() {
    let id = localStorage.getItem("id");
    this.proSer.getProId(Number(id))
    .subscribe(data => {
      this.pro=data;
    });
  }


  Update(pro:ProductModel) {
    this.proSer.updatePro(pro)
    .subscribe(data => {
      pro = data;
      alert("Update Thành Công!");
      this.router.navigate(["list-pro"]);
    });
  }

  Reset() {
    this.pro.name = "";
    this.pro.images = "";
    this.pro.create_Date = new Date();
    this.pro.price = 0;
  }

  List() {
    this.router.navigate(["list-pro"])
  }
}
