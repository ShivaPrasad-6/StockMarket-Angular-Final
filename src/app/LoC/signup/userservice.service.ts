import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
 providedIn: 'root'
})

export class UserserviceService {
 private baseUrl = 'http://localhost:8096/UserPortal/';
 constructor(private http:HttpClient) { }
 getAllUsers(): Observable<any> {
  return this.http.get(`${this.baseUrl}`+'getAllUsers');
 }
 saveUser(username : object): Observable<object> {
  return this.http.post(`${this.baseUrl}`+'saveUser', username);
 }
 deleteUser(username: String): Observable<object> {
  return this.http.delete(`${this.baseUrl}/deleteUser/${username}`);
 }
 findOneInAll6(username: String): Observable<Object> {
  return this.http.get(`${this.baseUrl}/findOneInAll6/${username}`);
 }

 updateUser(username: String, value: any): Observable<Object> {
  return this.http.put(`${this.baseUrl}/updateUser/${username}`, value);
 }
}