import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RoleModel } from 'src/app/Model/RoleModel';
import { UserModel } from 'src/app/Model/UserModel';
import { RoleServiceService } from 'src/app/Service/role-service.service';
import { UserServiceService } from 'src/app/Service/user-service.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {

  user:UserModel = new UserModel();
  role: RoleModel = new RoleModel();
  roles: RoleModel[]=[];


  constructor(private router:Router, private service:UserServiceService, private roleSer: RoleServiceService) { }

  exform!: FormGroup;

  ngOnInit(): void {
    this.exform = new FormGroup({
      'fullname': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.pattern("^[\\w-_\\.+]*[\\w-_\\.]\\@([\\w]+\\.)+[\\w]+[\\w]$")]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)]),
      'birthday': new FormControl(null, Validators.required),
      'gender': new FormControl(null, Validators.required),
      'address': new FormControl(null, Validators.required),
      'role_id': new FormControl(null, Validators.required),
    });

    this.roleSer.getRole()
    .subscribe(data => {
      this.roles = data;
    });

    this.user.role_id = this.role;
  }

  save() {
    this.service.CreateUser(this.user)
    .subscribe(data => {
      this.user = data;
      alert("Thêm thành công!")
      this.router.navigate(["list"]);
    });
  }

}
