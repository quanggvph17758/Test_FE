import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = '';

  constructor(private router: Router, private toast: NgToastService){}

  ngOnInit() {

  }

  getUser() {
   return sessionStorage.getItem("user");
  }

  logOut() {
    sessionStorage.clear();
    this.toast.success({summary:"Đăng Xuất Thành Công" , duration:3000});
    this.router.navigate(["login"]);
  }

  getRole() {
    return sessionStorage.getItem("role");
  }

}
