import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryModel } from 'src/app/Model/CategoryModel';
import { ProductModel } from 'src/app/Model/ProductModel';
import { CategoryServiceService } from 'src/app/Service/category-service.service';
import { ImagesService } from 'src/app/Service/images.service';
import { ProductServiceService } from 'src/app/Service/product-service.service';

@Component({
  selector: 'app-create-pro',
  templateUrl: './create-pro.component.html',
  styleUrls: ['./create-pro.component.css']
})
export class CreateProComponent implements OnInit {

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
      'images': new FormControl(null, Validators.required),
      'create_Date': new FormControl(null, Validators.required),
      'price': new FormControl(null, Validators.required),
      'quantity': new FormControl(null, Validators.required),
      'categoryId': new FormControl(null, Validators.required),
    });

    this.cateSer.getCate()
    .subscribe(data => {
      this.cates=data;
    });
  }

  Save() {
    this.proSer.createPro(this.pro)
    .subscribe(data => {
      this.onUpload();
      alert("Thêm thành công");
      this.router.navigate(["list-pro"])
    })
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