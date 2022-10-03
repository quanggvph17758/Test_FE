import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFavouriteComponent } from './list-favourite.component';

describe('ListFavouriteComponent', () => {
  let component: ListFavouriteComponent;
  let fixture: ComponentFixture<ListFavouriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFavouriteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListFavouriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
