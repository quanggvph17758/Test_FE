import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourOderDetailComponent } from './your-oder-detail.component';

describe('YourOderDetailComponent', () => {
  let component: YourOderDetailComponent;
  let fixture: ComponentFixture<YourOderDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourOderDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YourOderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
