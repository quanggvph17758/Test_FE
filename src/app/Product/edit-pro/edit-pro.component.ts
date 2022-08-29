import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryModel } from 'src/app/Model/CategoryModel';
import { ProductModel } from 'src/app/Model/ProductModel';
import { CategoryServiceService } from 'src/app/Service/category-service.service';
import { ImagesService } from 'src/app/Service/images.service';
import { ProductServiceService } from 'src/app/Service/product-service.service';

@Component({
  selector: 'app-edit-pro',
  templateUrl: './edit-pro.component.html',
  styleUrls: ['./edit-pro.component.css']
})
export class EditProComponent implements OnInit {

  pro:ProductModel = new ProductModel();
  cates:CategoryModel[]=[];
  shortLink: string = "";
  loading: boolean = false;
  file!: File;

  constructor(private proSer:ProductServiceService, private cateSer:CategoryServiceService, private router:Router, private uploadSer: ImagesService) { }

  exform!: FormGroup;

  ngOnInit(): void {
    this.exform = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'create_Date': new FormControl(null, Validators.required),
      'price': new FormControl(null, Validators.required),
      'quantity': new FormControl(null, Validators.required),
      'categoryId': new FormControl(null, Validators.required),
    });

    this.cateSer.getCate()
    .subscribe(data => {
      this.cates=data;
    });

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
      this.onUpload();
      alert("Update Thành Công!");
      this.router.navigate(["list-pro"]);
    });
  }

  Reset() {
    this.pro.name = "";
    this.pro.images = "";
    this.pro.createDate = new Date();
    this.pro.price = 0;
    this.pro.quantity = 0;
    this.pro.categoryId = 0;
  }

  List() {
    this.router.navigate(["list-pro"])
  }

   onChange(event:any) {
    this.file = event.target.files[0];
  }

  onUpload() {
    this.loading = !this.loading;
    console.log(this.file);
    this.uploadSer.uploadImage(this.file).subscribe(
      (event: any) => {
        if (typeof (event) === 'object') {
          this.shortLink = event.link;
          this.loading = false;
        }
      }
  );
}

}
