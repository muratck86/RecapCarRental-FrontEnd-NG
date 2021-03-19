import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from '../models/carImage';
import { ResultListModel } from '../models/resultListModel';

@Injectable()
export class CarImageService {

  apiUrl = "http://localhost:5000/api/"


  constructor(private httpClient:HttpClient) { }

  getCarImages(id:number):Observable<ResultListModel<CarImage>> {
    let path = this.apiUrl + "carimages/getbycarid?id=" + id
    return this.httpClient.get<ResultListModel<CarImage>>(path)
  }

}
