import { Component, OnInit, Pipe } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/Model/UserModel';
import { UserServiceService } from '../../Service/user-service.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  users:UserModel[]=[];
  fullname:any;
  constructor(private userSer:UserServiceService, private router:Router, private toast: NgToastService) { }

  ngOnInit() {
    this.userSer.getUser()
    .subscribe(data => {
      this.users=data;
    });
  }

  Edit(user:UserModel) {
    localStorage.setItem("id", user.id.toFixed());
    this.router.navigate(["edit"]);
  }

  getRole() {
    return sessionStorage.getItem("role");
  }

  ActiveUser(user: UserModel) {
    user.active = "1";
    this.userSer.updateUser(user)
    .subscribe(data => {
      user = data;
      this.toast.success({summary:"Kích Hoạt Tài Khoản " + user.fullname + " Thành Công" , duration:3000});
      this.ngOnInit();
    });
  }

  InActiveUser(user: UserModel) {
    user.active = "0";
    this.userSer.updateUser(user)
    .subscribe(data => {
      user = data;
      this.toast.info({summary:"khóa Tài Khoản " + user.fullname + " Thành Công" , duration:3000});
      this.ngOnInit();
    });
  }

  Delete(user:UserModel) {
    let u_id = sessionStorage.getItem("id");
    if (Number(u_id) == user.id) {
      this.toast.warning({summary:"Bạn Không Thể Xóa Tài Khoản Của Chính Mình" , duration:3000});
    } else {
      this.userSer.deleteUser(user)
      .subscribe(data => {
        this.users=this.users.filter(u => u! == user);
        this.toast.success({summary:"Xóa Tài Khoản " + user.fullname + " Thành Công" , duration:3000});
        this.ngOnInit();
      });
    }
  }

  Search() {
    if (this.fullname == "") {
      this.ngOnInit();
    } else {
      this.users = this.users.filter(data => {
        return data.fullname.toLocaleLowerCase().match(this.fullname.toLocaleLowerCase());
      });
    }
  }

  page: number = 1;
  count: number = 0;
  tableSize: number = 5;

  fetchPosts(){
    this.ngOnInit();
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.fetchPosts();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchPosts();
  }
}
