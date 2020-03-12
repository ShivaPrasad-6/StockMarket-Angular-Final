import { Component, OnInit } from '@angular/core';

import { Ac4 } from 'src/app/LoC/ac4/ac4';

import { Observable } from 'rxjs/internal/Observable';

import { Ac4Service } from 'src/app/LoC/ac4/ac4.service';

import { Router } from '@angular/router';
@Component({
  selector: 'app-ac4',
  templateUrl: './ac4.component.html',
  styleUrls: ['./ac4.component.css']
})
export class Ac4Component implements OnInit {

 isupdated: boolean;

 constructor(private router:Router,private ipodetailsservice: Ac4Service) { }

 ipodetailsList: Observable<Ac4[]>;

 ngOnInit() {

  this.ipodetailsservice.getAllIpoDetails().subscribe(data => {

  this.ipodetailsList = data;

  })

 }

 deleteIpoDetails(ipos : Ac4 ) {

 this.ipodetailsservice.deleteIpoDetails(ipos.ipoid)
  .subscribe(
  data => {
   this.ipodetailsservice.getAllIpoDetails().subscribe(data =>{
   this.ipodetailsList =data;
   });
  }) ;
 };
 
 updateIpoDetails(ipo : Ac4 ) {
 window.localStorage.removeItem("edit-ipoid");
 window.localStorage.setItem("edit-ipoid", ipo.ipoid.toString());
 this.router.navigate(['addipodetails']);
 };
}

