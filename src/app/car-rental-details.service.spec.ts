import { TestBed } from '@angular/core/testing';

import { CarRentalDetailsService } from './car-rental-details.service';

describe('CarRentalDetailsService', () => {
  let service: CarRentalDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarRentalDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
