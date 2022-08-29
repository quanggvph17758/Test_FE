import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProComponent } from './edit-pro.component';

describe('EditProComponent', () => {
  let component: EditProComponent;
  let fixture: ComponentFixture<EditProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
