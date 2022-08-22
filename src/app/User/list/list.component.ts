import { Component, OnInit, Pipe } from '@angular/core';
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
  fullname:any;
  constructor(private userSer:UserServiceService, private router:Router) { }

  ngOnInit() {
    this.userSer.getUser()
    .subscribe(data => {
      this.users=data;
    })
  }

  Create() {
    this.router.navigate(["create"]);
  }

  Edit(user:UserModel) {
    localStorage.setItem("id", user.id.toFixed());
    this.router.navigate(["edit"]);
  }


  Delete(user:UserModel) {
    this.userSer.deleteUser(user)
    .subscribe(data => {
      this.users=this.users.filter(u => u! == user);
      alert("Xóa thành công!");
      //this.ngOnInit();
    })
  }

  Search(){
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
  //tableSizes: any = [3, 6, 9, 12];

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
