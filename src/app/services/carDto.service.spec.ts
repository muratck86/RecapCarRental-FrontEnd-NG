/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CarDtoService } from './carDto.service';

describe('Service: CarDto', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarDtoService]
    });
  });

  it('should ...', inject([CarDtoService], (service: CarDtoService) => {
    expect(service).toBeTruthy();
  }));
});
