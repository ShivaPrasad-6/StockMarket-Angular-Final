import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
 providedIn: 'root'
})

export class UserserviceService {
 private baseUrl = 'http://localhost:8099/User/UserPortal';
 constructor(private http:HttpClient) { }
 getAllUsers(): Observable<any> {
  return this.http.get(`${this.baseUrl}`+'/getAllUsers');
 }
 saveUser(username : object): Observable<any> {
  return this.http.post(`${this.baseUrl}`+'/saveUser', username);
 }
 deleteUser(username: String): Observable<object> {
  return this.http.delete(`${this.baseUrl}/deleteUser/${username}`);
 }
 findOneInAll6(username: String): Observable<any> {
  return this.http.get(`${this.baseUrl}/findOneInAll6/${username}`);
 }

 updateUser(username: object, value: String): Observable<Object> {
  return this.http.put(`${this.baseUrl}`+'updateUser/'+value, username);
 }
 findByUsernameAndPassword(username:String,password:String): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}`+'/findByUsernameAndPassword/'+username+'/'+password);
   }
   
uploadFile( file: File , username : String ) : Observable<any>  
   {  
     let url = this.baseUrl + "uploadImage/" + username ;  
   
     const formdata: FormData = new FormData();  
     
     formdata.append('file', file);  
    
     return this.http.post(url , formdata);  
   }  
}