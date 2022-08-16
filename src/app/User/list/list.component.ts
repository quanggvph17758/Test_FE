import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/Model/UserModel';
import { UserServiceService } from '../../Service/user-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  users:UserModel[]=[];

  constructor(private userSer:UserServiceService, private router:Router) { }

  ngOnInit() {
    this.userSer.getUser()
    .subscribe(data => {
      this.users=data;
    })
  }

  Edit(user:UserModel) {
    localStorage.setItem("id", user.id.toFixed());
    this.router.navigate(["edit"]);
  }

  Delete(user:UserModel) {
    this.userSer.deleteUser(user)
    .subscribe(data => {
      this.users=this.users.filter(p => p! == user);
      alert("Xóa thành công!")
    })
  }

  Create() {
    this.router.navigate(["create"]);
  }

}
