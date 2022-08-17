import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from '../Model/UserModel';
import { UserServiceService } from '../Service/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  user:UserModel = new UserModel();

  constructor(private service:UserServiceService, private router:Router) { }

  ngOnInit(): void {
  }

  LoginForm() {
    console.log(this.user)
    this.service.login(this.user)
    .subscribe(data => {
      alert("Đăng Nhập Thành Công!");
      this.router.navigate(['list']);
    }, error => alert("Đăng Nhập Thất Bại!"));

  }

}
