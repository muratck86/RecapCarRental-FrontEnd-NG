import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../models/color';
import { ResultListModel } from '../models/resultListModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  apiUrl = "http://localhost:5000/api/colors/getall"

  constructor(private httpClient:HttpClient) { }

  getColors():Observable<ResultListModel<Color>>{
    return this.httpClient.get<ResultListModel<Color>>(this.apiUrl)
  }
}
