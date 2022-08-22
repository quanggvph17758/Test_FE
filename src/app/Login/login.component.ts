import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from '../Model/UserModel';
import { LoginServiceService } from '../Service/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  user:UserModel = new UserModel();

  constructor(private lgService:LoginServiceService , private router:Router) { }

  ngOnInit(): void {
  }

  LoginForm() {
    console.log(this.user)
    this.lgService.login(this.user)
    .subscribe(data => {
      alert("Đăng Nhập Thành Công!");
      this.router.navigate(['list']);
    }, error => alert("Đăng Nhập Thất Bại!"));
  }

}
