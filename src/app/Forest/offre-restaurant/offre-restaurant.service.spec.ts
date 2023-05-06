import { TestBed } from '@angular/core/testing';

import { OffreRestaurantService } from './offre-restaurant.service';

describe('OffreRestaurantService', () => {
  let service: OffreRestaurantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OffreRestaurantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
