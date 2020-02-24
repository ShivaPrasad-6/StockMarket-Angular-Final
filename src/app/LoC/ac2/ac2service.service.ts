import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Ac2serviceService {

  private baseUrl = 'http://localhost:8096/Company/';
 constructor(private http:HttpClient) { }
 getAllCompanies(): Observable<any> {
  return this.http.get(`${this.baseUrl}`+'getAllCompanies');
 }
 saveCompany(companyname : object): Observable<object> {
  return this.http.post(`${this.baseUrl}`+'saveCompany', companyname);
 }
 deleteCompany(companyname: String): Observable<object> {
  return this.http.delete(`${this.baseUrl}/deleteCompany/${companyname}`);
 }
 findOneInAll1(companyname: String): Observable<Object> {
  return this.http.get(`${this.baseUrl}/findOneInAll1/${companyname}`);
 }

 updateCompany(companyname: String, value: any): Observable<Object> {
  return this.http.put(`${this.baseUrl}/updateCompany/${companyname}`, value);
 }
  
}



