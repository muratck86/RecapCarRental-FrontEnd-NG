import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ResultListModel } from '../models/resultListModel';
import { CarDto } from '../models/carDto';

@Injectable()
export class CarDtoService {
  apiUrl = "http://localhost:5000/api/cars"

  constructor(private httpClient: HttpClient) { }

  getCarDtoList(): Observable<ResultListModel<CarDto>> {
    let path = this.apiUrl + "/getcardetails"
    return this.httpClient.get<ResultListModel<CarDto>>(path)
  }

  getCarDetailsByBrand(brandName:string): Observable<ResultListModel<CarDto>> {
    let path = this.apiUrl + "/getcardetailsbybrandname?brandName="+brandName
    return this.httpClient.get<ResultListModel<CarDto>>(path)
  }

  getCarDetailsByColor(colorName:string): Observable<ResultListModel<CarDto>> {
    let path = this.apiUrl + "/getcardetailsbycolorname?colorName="+colorName
    return this.httpClient.get<ResultListModel<CarDto>>(path)
  }

}
