import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductModel } from '../Model/ProductModel';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  url = 'http://localhost:8080/test/product';

  constructor(private http:HttpClient) { }

  getPro() {
    return this.http.get<ProductModel[]>(this.url);
  }

  getProId(id:number) {
    return this.http.get<ProductModel>(this.url + "/" + id);
  }

  createPro(pro:ProductModel) {
    return this.http.post<ProductModel>(this.url, pro);
  }

  updatePro(pro:ProductModel) {
    return this.http.put<ProductModel>(this.url + "/" + pro.id, pro);
  }

  deletePro(pro:ProductModel) {
    return this.http.delete<ProductModel>(this.url + "/" + pro.id);
  }

  getProInCateId() {
    return this.http.get<ProductModel>(this.url);
  }
}
