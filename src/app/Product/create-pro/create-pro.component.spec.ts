import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProComponent } from './create-pro.component';

describe('CreateProComponent', () => {
  let component: CreateProComponent;
  let fixture: ComponentFixture<CreateProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateProComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
