import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { UserModel } from '../Model/UserModel';
import { LoginServiceService } from '../Service/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  user: UserModel = new UserModel();

  exform!: FormGroup;

  constructor(private lgService:LoginServiceService, private router:Router, private toast: NgToastService) { }

  ngOnInit(): void {
    this.exform = new FormGroup({
      'email': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required),
    });
  }

  LoginForm() {
    this.lgService.login(this.user)
    .subscribe(data => {
      if (data.active == "0") {
        this.toast.warning({summary:"Tài Khoản Của Bạn Đã Bị Khóa" , duration:3000});
        this.user.email = "";
        this.user.password = "";
      } else {
      sessionStorage.setItem("id", String(data.id));
      sessionStorage.setItem("user", data.fullname);
      sessionStorage.setItem("role", data.role_id.id);
      sessionStorage.setItem("address", data.address);
      sessionStorage.setItem("email", data.email);
      this.toast.success({summary:"Đăng Nhập Thành Công" , duration:3000});
      this.router.navigate(['home']);
      }
    }, error => this.toast.error({summary:"Đăng Nhập Thất Bại" , sticky: true}));
  }
}
