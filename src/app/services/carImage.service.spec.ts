/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CarImageService } from './carImage.service';

describe('Service: CarImage', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarImageService]
    });
  });

  it('should ...', inject([CarImageService], (service: CarImageService) => {
    expect(service).toBeTruthy();
  }));
});
