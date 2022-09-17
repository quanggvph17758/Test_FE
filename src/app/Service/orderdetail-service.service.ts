import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrderDetailModel } from '../Model/OrderDetailModel';

@Injectable({
  providedIn: 'root'
})
export class OrderdetailServiceService {

  url = 'http://localhost:8080/test/orderDetail';

  constructor(private http: HttpClient) { }

  getOrderDetailByOrderId(id: number) {
    return this.http.get<OrderDetailModel>(this.url + "/" + id);
  }
}
