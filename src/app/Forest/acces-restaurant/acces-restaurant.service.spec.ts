import { TestBed } from '@angular/core/testing';

import { AccesRestaurantService } from './acces-restaurant.service';

describe('AccesRestaurantService', () => {
  let service: AccesRestaurantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccesRestaurantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
