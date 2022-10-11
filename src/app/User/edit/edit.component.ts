import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RoleModel } from 'src/app/Model/RoleModel';
import { UserModel } from 'src/app/Model/UserModel';
import { RoleServiceService } from 'src/app/Service/role-service.service';
import { UserServiceService } from 'src/app/Service/user-service.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit {

  roles: RoleModel[]=[];
  role: RoleModel = new RoleModel();
  user:UserModel = new UserModel();

  constructor(private router:Router,
              private service:UserServiceService,
              private roleSer: RoleServiceService,
              private toast: NgToastService) { }

  exform!: FormGroup;

  ngOnInit() :void {
    this.Edit();
    this.exform = new FormGroup({
      'fullname': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.pattern("^[\\w-_\\.+]*[\\w-_\\.]\\@([\\w]+\\.)+[\\w]+[\\w]$")]),
      'birthday': new FormControl(null, Validators.required),
      'gender': new FormControl(null, Validators.required),
      'address': new FormControl(null, Validators.required),
      'role_id': new FormControl(null, Validators.required),
    });

    this.roleSer.getRole()
    .subscribe(data => {
      this.roles = data;
    })

    this.user.role_id = this.role;
  }

  getRole() {
    return sessionStorage.getItem("role");
  }

  Edit() {
    let id = localStorage.getItem("id");
    this.service.getUserId(Number(id))
    .subscribe(data => {
      this.user=data;
    });
  }


  Update(user:UserModel) {
    this.service.updateUser(user)
    .subscribe(data => {
      user = data;
      this.toast.success({summary:"Cập nhật Tài Khoản " + user.fullname + " Thành Công", duration:3000});
      this.router.navigate(["list"]);
    },error => this.toast.error({summary:"Cập nhật Thất Bại", sticky:true}));
  }

  Reset() {
    this.user.fullname = "";
    this.user.email = "";
    this.user.birthday = new Date();
    this.user.gender = "";
    this.user.address = "";
  }
}
