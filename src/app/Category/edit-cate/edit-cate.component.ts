import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryModel } from 'src/app/Model/CategoryModel';
import { CategoryServiceService } from 'src/app/Service/category-service.service';

@Component({
  selector: 'app-edit-cate',
  templateUrl: './edit-cate.component.html',
  styleUrls: ['./edit-cate.component.css']
})
export class EditCateComponent implements OnInit {

  cate:CategoryModel = new CategoryModel();

  constructor(private router:Router, private cateSer:CategoryServiceService) { }

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
    this.cateSer.updateCate(cate)
    .subscribe(data => {
      cate = data;
      alert("Update Thành Công!");
      this.router.navigate(["list-cate"]);
    });
  }

  Reset() {
    this.cate.name = "";
  }

  List() {
    this.router.navigate(["list-cate"])
  }

}
