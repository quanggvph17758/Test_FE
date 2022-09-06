import { TestBed } from '@angular/core/testing';

import { OrderdetailServiceService } from './orderdetail-service.service';

describe('OrderdetailServiceService', () => {
  let service: OrderdetailServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderdetailServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
