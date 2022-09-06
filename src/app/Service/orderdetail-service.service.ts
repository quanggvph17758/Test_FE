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

  getOderDetail(): Observable<any> {
    return this.http.get<OrderDetailModel>(this.url);
  }

  getOrderDetailById(id: number) {
    return this.http.get<OrderDetailModel>(this.url + "/" + id);
  }

  createOrderDetail(orderDe: OrderDetailModel) {
    return this.http.post<OrderDetailModel>(this.url, orderDe);
  }

  updateOrderDetail(orderDe: OrderDetailModel) {
    return this.http.put<OrderDetailModel>(this.url + "/" + orderDe.id, orderDe);
  }

  deleteOrderDetail(orderDe: OrderDetailModel) {
    return this.http.delete<OrderDetailModel>(this.url + "/" + orderDe.id);
  }
}
