import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  constructor() { }
IsLoggedin():boolean{
  if(sessionStorage.getItem("username")!=null){
    return true;
  }
return false;
}
}
