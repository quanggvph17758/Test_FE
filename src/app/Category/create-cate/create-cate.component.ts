import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryModel } from 'src/app/Model/CategoryModel';
import { CategoryServiceService } from 'src/app/Service/category-service.service';

@Component({
  selector: 'app-create-cate',
  templateUrl: './create-cate.component.html',
  styleUrls: ['./create-cate.component.css']
})
export class CreateCateComponent implements OnInit {

  cate:CategoryModel = new CategoryModel();

  constructor(private router:Router, private cateSer:CategoryServiceService) { }

  exform!: FormGroup;

  ngOnInit(): void {
    this.exform = new FormGroup({
      'name': new FormControl(null, Validators.required),
    });
  }

  save() {
    this.cateSer.createCate(this.cate)
    .subscribe(data => {
      alert("Thêm thành công!")
      this.router.navigate(["list-cate"]);
    });
  }

}
