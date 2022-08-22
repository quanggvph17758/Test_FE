import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCateComponent } from './edit-cate.component';

describe('EditCateComponent', () => {
  let component: EditCateComponent;
  let fixture: ComponentFixture<EditCateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
