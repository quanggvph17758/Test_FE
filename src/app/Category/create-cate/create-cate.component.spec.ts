import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCateComponent } from './create-cate.component';

describe('CreateCateComponent', () => {
  let component: CreateCateComponent;
  let fixture: ComponentFixture<CreateCateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
