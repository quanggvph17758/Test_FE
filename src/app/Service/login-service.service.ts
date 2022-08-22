import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '../Model/UserModel';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http:HttpClient) { }

  url = 'http://localhost:8080/test/login';

  login(user:UserModel):Observable<object> {
    console.log(user);
    return this.http.post(this.url, user);
  }
}
