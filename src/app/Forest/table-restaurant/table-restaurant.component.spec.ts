import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRestaurantComponent } from './table-restaurant.component';

describe('TableRestaurantComponent', () => {
  let component: TableRestaurantComponent;
  let fixture: ComponentFixture<TableRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableRestaurantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
