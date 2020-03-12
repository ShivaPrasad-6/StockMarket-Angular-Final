import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class ManageexchangeService {
  private baseUrl = 'http://localhost:8099/StockExchange/StockExchange';
  constructor(private http: HttpClient) { }
  getAllStockExchange(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + '/getAllStockExchange');
  }
  saveStockExchange(stockexchange: object): Observable<object> {
    return this.http.post(`${this.baseUrl}` + '/saveStockExchange', stockexchange);
  }
  deleteStockExchange(seid: Number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deleteStockExchange/${seid}`);
  }
  findOneInAll4(seid: Number): Observable<any> {
    return this.http.get(`${this.baseUrl}/findOneInAll4/${seid}`);
  }

  updateStockExchange(seid: Number, value: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/updateStockExchange/${seid}`, value);
  }
}
