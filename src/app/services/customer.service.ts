import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { ResultListModel } from '../models/resultListModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl = "http://localhost:5000/api/customers/getall"

  constructor(private httpClient: HttpClient) { }

  getCustomers(): Observable<ResultListModel<Customer>> {
    return this.httpClient.get<ResultListModel<Customer>>(this.apiUrl)
  }

}
