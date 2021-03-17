import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ResultListModel } from '../models/resultListModel';
import { CarDto } from '../models/carDto';

@Injectable()
export class CarDtoService {
  apiUrl = "http://localhost:5000/api/cars/getcardetails"

  constructor(private httpClient: HttpClient) { }

  getCarDtoList(): Observable<ResultListModel<CarDto>> {
    return this.httpClient.get<ResultListModel<CarDto>>(this.apiUrl)
  }
}
