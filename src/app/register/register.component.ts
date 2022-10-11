import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RoleModel } from '../Model/RoleModel';
import { UserModel } from '../Model/UserModel';
import { UserServiceService } from '../Service/user-service.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:UserModel = new UserModel();
  role:RoleModel = new RoleModel();

  constructor(private router:Router, private service:UserServiceService, private toast: NgToastService) { }

  exform!: FormGroup;

  ngOnInit(): void {
    this.exform = new FormGroup({
      'fullname': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.pattern("^[\\w-_\\.+]*[\\w-_\\.]\\@([\\w]+\\.)+[\\w]+[\\w]$")]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)]),
      'birthday': new FormControl(null, Validators.required),
      'gender': new FormControl(null, Validators.required),
      'address': new FormControl(null, Validators.required),
    });

    this.user.role_id = this.role;

  }

  save() {
    this.user.role_id.id = "KH";
    this.user.active = "0";
    this.service.registerUser(this.user)
    .subscribe(data => {
      this.toast.success({summary:"Đăng Ký Thành Công", duration:3000});
      this.router.navigate(["login"]);
    }, error => this.toast.error({summary:"Đăng Ký Thất Bại", sticky: true}));
  }
}
