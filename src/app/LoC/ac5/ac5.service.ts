import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class Ac5Service {


 private baseUrl = 'http://localhost:8099/Sector/sectors';



 constructor(private http:HttpClient) { }



 getAllSectors(): Observable<any> {

 return this.http.get(`${this.baseUrl}`+'/getAllSectors');
 }





 saveSectors(sectors: object): Observable<object> {



 return this.http.post(`${this.baseUrl}`+'/saveSector', sectors);



 }



 deleteSector(sectorid: Number): Observable<any> {



  return this.http.delete(`${this.baseUrl}/deleteSector/${sectorid}`);



 }







 findOneInAll3(sectorid: Number): Observable<any> {



  return this.http.get(`${this.baseUrl}/findOneInAll3/${sectorid}`);



 }







 updateSector(sectorid: Number, value: any): Observable<any> {



  return this.http.put(`${this.baseUrl}/updateSector/${sectorid}`, value);



 }







}



