import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/Model/UserModel';
import { UserServiceService } from 'src/app/Service/user-service.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  user:UserModel = new UserModel();


  constructor(private router:Router, private service:UserServiceService,) { }

  exform!: FormGroup;

  ngOnInit() :void {
    this.Edit();
    this.exform = new FormGroup({
      'fullname': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.pattern("^[\\w-_\\.+]*[\\w-_\\.]\\@([\\w]+\\.)+[\\w]+[\\w]$")]),
      'birthday': new FormControl(null, Validators.required),
      'gender': new FormControl(null, Validators.required),
      'address': new FormControl(null, Validators.required),
    });
  }

  Edit() {
    let id = sessionStorage.getItem("id");
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
      this.ngOnInit();
    });
  }

  Reset() {
    this.user.fullname = "";
    this.user.email = "";
    this.user.birthday = new Date();
    this.user.gender = "";
    this.user.address = "";
  }
}
