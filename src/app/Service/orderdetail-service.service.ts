import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderDetailModel } from '../Model/OrderDetailModel';

@Injectable({
  providedIn: 'root'
})
export class OrderdetailServiceService {

  url = 'http://localhost:8080/test/orderDetail';

  constructor(private http: HttpClient) { }

  getOrderDetailById(id: Number): Observable<any> {
    return this.http.get<OrderDetailModel>(this.url + "/" + id);
  }

  createOrderDetail(orderDetail: OrderDetailModel) {
    return this.http.post<OrderDetailModel>(this.url, orderDetail);
  }
}
