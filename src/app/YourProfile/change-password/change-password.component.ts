import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/Model/UserModel';
import { UserServiceService } from 'src/app/Service/user-service.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  user:UserModel = new UserModel();
  passwordOld!: any;
  passwordNew!: any;

  constructor(private router:Router, private service:UserServiceService, private toast: NgToastService) { }

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
        this.toast.warning({summary:"Mật Khẩu Cũ Không Đúng" , duration:3000});
      } else {
        if (this.passwordNew == this.passwordOld) {
          this.toast.warning({summary:"Mật Khẩu Mới Phải Khác Với Mật Khẩu Cũ" , duration:3000});
        } else {
          user.password = this.passwordNew;
          this.service.updateUser(user)
          .subscribe(data => {
            this.toast.success({summary:"Đổi Mật Khẩu Thành Công" , duration:3000});
            this.router.navigate(["yourProfile"]);
          }, error => this.toast.error({summary:"Đổi Mật Khẩu Thất Bại" , sticky: true}));
        }
      }
    });
  }

}
