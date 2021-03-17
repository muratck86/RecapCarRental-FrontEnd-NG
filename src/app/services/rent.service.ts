import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentDto } from '../models/rentDto';
import { ResultListModel } from '../models/resultListModel';

@Injectable({
  providedIn: 'root'
})
export class RentService {
  apiUrl = "http://localhost:5000/api/rents/getrentdetails"

constructor(private httpClient:HttpClient) { }
getRentDtos():Observable<ResultListModel<RentDto>> {
  return this.httpClient.get<ResultListModel<RentDto>>(this.apiUrl)
}

}
