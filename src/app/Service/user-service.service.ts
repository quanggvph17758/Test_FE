import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../Model/UserModel';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }

  url = 'http://localhost:8080/test/user';

  getUser() {
    return this.http.get<UserModel[]>(this.url);
  }

  CreateUser(user:UserModel) {
    return this.http.post<UserModel>(this.url, user);
  }

  getUserId(id:number) {
    return this.http.get<UserModel>(this.url + "/" + id);
  }

  updateUser(user:UserModel) {
    return this.http.put<UserModel>(this.url + "/" + user.id , user);
  }

  deleteUser(user:UserModel) {
    return this.http.delete<UserModel>(this.url + "/" + user.id);
  }
}
