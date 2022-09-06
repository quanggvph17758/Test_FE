import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailOderComponent } from './detail-oder.component';

describe('DetailOderComponent', () => {
  let component: DetailOderComponent;
  let fixture: ComponentFixture<DetailOderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailOderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailOderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
