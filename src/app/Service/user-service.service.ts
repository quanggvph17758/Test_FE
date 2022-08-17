import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../Model/UserModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }

  url = 'http://localhost:8080/test/user';
  url2 = 'http://localhost:8080/test/login';

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

  login(user:UserModel):Observable<object> {
    console.log(user);
    return this.http.post(this.url2, user);
  }
}
