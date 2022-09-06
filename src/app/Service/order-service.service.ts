import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderModel } from '../Model/OrderModel';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  url = 'http://localhost:8080/test/order';
  url2 = 'http://localhost:8080/test/order2';

  constructor(private http:HttpClient) { }

  getOrder(): Observable<any> {
    return this.http.get<OrderModel>(this.url);
  }

  getOrderById(id: Number) {
    return this.http.get<OrderModel>(this.url + "/" + id);
  }

  createOrder(order: OrderModel) {
    return this.http.post<OrderModel>(this.url, order);
  }

  updateOder(order: OrderModel) {
    return this.http.put<OrderModel>(this.url + "/" + order.id , order);
  }

  updateOder2(order: OrderModel) {
    return this.http.put<OrderModel>(this.url2 + "/" + order.id , order);
  }

  deleteOrder(order: OrderModel) {
    return this.http.delete<OrderModel>(this.url + "/" + order.id);
  }
}
