import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  url = 'http://localhost:8080/test/product';

  constructor() { }
}
