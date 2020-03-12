import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Ac2serviceService {

  private baseUrl = 'http://localhost:8099/Company/Company/';
 constructor(private http:HttpClient) { }
 getAllCompanies(): Observable<any> {
  return this.http.get(`${this.baseUrl}`+'getAllCompanies');
 }
 saveCompany(companyname : object): Observable<object> {
  return this.http.post(`${this.baseUrl}`+'saveCompany', companyname);
 }
 deleteCompany(companyname: String): Observable<object> {
  return this.http.delete(`${this.baseUrl}deleteCompany/${companyname}`);
 }
 findOneInAll4(companyname: String): Observable<any> {
  return this.http.get(`${this.baseUrl}`+'findOneInAll1/'+companyname);
 }
 updateCompany(companyname: object, value: String): Observable<Object> {
  return this.http.put(`${this.baseUrl}`+'updateCompany/'+value, companyname);
 }
}



