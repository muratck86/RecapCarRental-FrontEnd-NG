import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';
import { ResultListModel } from '../models/resultListModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiUrl = "http://localhost:5000/api/brands/getall"

  constructor(private httpClient: HttpClient) { }

  getBrands(): Observable<ResultListModel<Brand>> {
    return this.httpClient.get<ResultListModel<Brand>>(this.apiUrl)
  }

}
