import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryModel } from '../Model/CategoryModel';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  url = 'http://localhost:8080/test/category';

  constructor(private http:HttpClient) { }

  getCate(): Observable<any> {
    return this.http.get<CategoryModel>(this.url);
  }

  getCateId(id:number) {
    return this.http.get<CategoryModel>(this.url + "/" + id);
  }

  createCate(cate:CategoryModel) {
    return this.http.post<CategoryModel>(this.url, cate);
  }

  updateCate(cate:CategoryModel) {
    return this.http.put<CategoryModel>(this.url + "/" + cate.id, cate);
  }

  deleteCate(cate:CategoryModel) {
    return this.http.delete<CategoryModel>(this.url + "/" + cate.id);
  }
}
