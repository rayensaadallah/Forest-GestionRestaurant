import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffreRestaurantComponent } from './offre-restaurant.component';

describe('OffreRestaurantComponent', () => {
  let component: OffreRestaurantComponent;
  let fixture: ComponentFixture<OffreRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffreRestaurantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffreRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
