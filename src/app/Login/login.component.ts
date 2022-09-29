import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RoleModel } from '../Model/RoleModel';
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

  constructor(private lgService:LoginServiceService, private router:Router) { }

  ngOnInit(): void {
    this.exform = new FormGroup({
      'email': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required),
    });
  }

  LoginForm() {
    this.lgService.login(this.user)
    .subscribe(data => {
      sessionStorage.setItem("id", String(data.id));
      sessionStorage.setItem("user", data.fullname);
      sessionStorage.setItem("role", data.role_id.id);
      sessionStorage.setItem("address", data.address);
      sessionStorage.setItem("email", data.email);
      alert("Đăng Nhập Thành Công!");
      this.router.navigate(['home']);
    }, error => alert("Đăng Nhập Thất Bại!"));
  }
}
