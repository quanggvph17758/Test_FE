import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/Model/UserModel';
import { UserServiceService } from 'src/app/Service/user-service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit {

  constructor(private router:Router, private service:UserServiceService) { }

  exform!: FormGroup;

  ngOnInit() :void {
    this.Edit();
    this.exform = new FormGroup({
      'fullname': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)]),
      'birthday': new FormControl(null, Validators.required),
      'gender': new FormControl(null, Validators.required),
      'address': new FormControl(null, Validators.required),
    });
  }

  user:UserModel = new UserModel();

  Edit() {
    let id = localStorage.getItem("id");
    this.service.getUserId(Number(id))
    .subscribe(data => {
      this.user=data;
    });
  }


  Update(user:UserModel) {
    this.service.updateUser(user)
    .subscribe(data => {
      user = data;
      alert("Update Thành Công!");
      this.router.navigate(["list"]);
    });
  }
}
