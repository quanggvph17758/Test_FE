import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutOderComponent } from './checkout-oder.component';

describe('CheckoutOderComponent', () => {
  let component: CheckoutOderComponent;
  let fixture: ComponentFixture<CheckoutOderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutOderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckoutOderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
