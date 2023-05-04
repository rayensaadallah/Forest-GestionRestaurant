import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesRestaurantComponent } from './acces-restaurant.component';

describe('AccesRestaurantComponent', () => {
  let component: AccesRestaurantComponent;
  let fixture: ComponentFixture<AccesRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccesRestaurantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccesRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
