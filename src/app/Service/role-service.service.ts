import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RoleModel } from '../Model/RoleModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleServiceService {

  url = 'http://localhost:8080/test/role';

  constructor(private http:HttpClient) { }

  getRole(): Observable<any> {
    return this.http.get<RoleModel>(this.url);
  }
}
