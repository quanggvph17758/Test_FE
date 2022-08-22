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

  user:UserModel = new UserModel();

  constructor(private router:Router){}

}
