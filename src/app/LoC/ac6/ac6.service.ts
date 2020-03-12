import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Ac6 } from './ac6';

@Injectable({
  providedIn: 'root'
})
export class Ac6Service {

 private baseUrl = 'http://localhost:8099/StockPrice/stockprice';



 constructor(private http:HttpClient) { }

 getAllStockPrice(): Observable<any> {

 return this.http.get(`${this.baseUrl}`+'/getAllStockPrice');

 }

 saveStockPrice(stockPrice: Ac6): Observable<Ac6> {

 return this.http.post<Ac6>(`${this.baseUrl}`+'/saveStockPrice', stockPrice);

 }

 deleteStockPrice(stockexchange: String): Observable<Ac6> {

  return this.http.delete<Ac6>(`${this.baseUrl}/deleteStockPrice/${stockexchange}`);

 }

 findOneInAll5(stockexchange: String): Observable<Ac6> {

  return this.http.get<Ac6>(`${this.baseUrl}/findOneInAll5/${stockexchange}`);

 }

 updateStockPrice(stockexchange: String, value: any): Observable<Ac6> {
  return this.http.put<Ac6>(`${this.baseUrl}/updateStockPrice/${stockexchange}`, value);
 }
 
getmultiplelinechart(): Observable<any> {
  return this.http.get(`${this.baseUrl}`+'/multiplelinechart');
 }
 uploadFile(file: File, stockexchange: String): Observable<any> {
  let url = this.baseUrl + "/uploadfile/" + stockexchange;
  const formdata: FormData = new FormData();
  formdata.append('file', file);
  return this.http.post(url, formdata);
 }

}