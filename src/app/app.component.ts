import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from './Model/UserModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = '';

  constructor(private router: Router){}

  ngOnInit() {

  }

  getUser() {
   return sessionStorage.getItem("user");
  }

  logOut() {
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("role");
    sessionStorage.removeItem("address");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("id");
    sessionStorage.removeItem("item");
    this.router.navigate(["login"])
  }

  getRole() {
    return sessionStorage.getItem("role");
  }

}
