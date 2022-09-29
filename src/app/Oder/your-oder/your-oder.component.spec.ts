import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourOderComponent } from './your-oder.component';

describe('YourOderComponent', () => {
  let component: YourOderComponent;
  let fixture: ComponentFixture<YourOderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourOderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YourOderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
