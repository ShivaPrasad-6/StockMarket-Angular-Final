import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ac4 } from './ac4';
import { Ac5 } from '../ac5/ac5';
@Injectable({
  providedIn: 'root'
})
export class Ac4Service {

  private baseUrl = 'http://localhost:8099/IpoDetails/IpoDetails';

  constructor(private http: HttpClient) { }

  getAllIpoDetails(): Observable<any> {

    return this.http.get(this.baseUrl+ '/getAllIpoDetails');

  }

  saveIpoDetails(ac4: Ac4): Observable<Ac4> {

    return this.http.post<Ac4>(`${this.baseUrl}` + '/saveIpoDetails', ac4);

  }

  deleteIpoDetails(ipoid: number): Observable<object> {

    return this.http.delete<Ac4>(this.baseUrl+'/deleteIpoDetails/'+ipoid);

  }

  findOneInAll2(ipoid: number): Observable<any> {

    return this.http.get<Ac4>(this.baseUrl+'/findOneInAll2/'+ipoid);

  }

  updateIpoDetails(ipoid: number): Observable<Ac4> {

    return this.http.put<Ac4>(this.baseUrl+'/updateIpoDetails/ipoid', ipoid);

  }

}



