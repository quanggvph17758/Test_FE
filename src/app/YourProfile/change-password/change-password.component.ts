import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/Model/UserModel';
import { UserServiceService } from 'src/app/Service/user-service.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  user:UserModel = new UserModel();
  passwordOld!: any;
  passwordNew!: any;

  constructor(private router:Router, private service:UserServiceService,) { }

  exform!: FormGroup;

  ngOnInit() :void {
    this.Edit();
    this.exform = new FormGroup({
      'passwordOld': new FormControl(null, [Validators.required, Validators.minLength(6)]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)]),
    });
  }

  Edit() {
    let id = sessionStorage.getItem("id");
    this.service.getUserId(Number(id))
    .subscribe(data => {
      this.user=data;
    });
  }

  Update(user:UserModel) {
    let id = sessionStorage.getItem("id");
    this.service.getUserId(Number(id))
    .subscribe(data => {
      if (this.passwordOld != data.password) {
        alert("Mật khẩu cũ không đúng");
      } else {
        if (this.passwordNew == this.passwordOld) {
          alert("Mật khẩu mới phải khác mật khẩu cũ!")
        } else {
          user.password = this.passwordNew;
          this.service.updateUser(user)
          .subscribe(data => {
            alert("Đổi Mật khẩu thành công!");
            this.router.navigate(["yourProfile"]);
        });
        }
      }
    });
  }

}
