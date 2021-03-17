/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RentService } from './rent.service';

describe('Service: Rent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RentService]
    });
  });

  it('should ...', inject([RentService], (service: RentService) => {
    expect(service).toBeTruthy();
  }));
});
