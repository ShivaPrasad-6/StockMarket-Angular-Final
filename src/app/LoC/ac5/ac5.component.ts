import { Component, OnInit } from '@angular/core';
import { Ac5Service } from 'src/app/LoC/ac5/ac5.service';



import { Observable } from 'rxjs/internal/Observable';

import { FormGroup, FormControl } from '@angular/forms';

import { Router } from '@angular/router';
import { Ac5 } from './ac5';





@Component({
  selector: 'app-ac5',
  templateUrl: './ac5.component.html',
  styleUrls: ['./ac5.component.css']
})
export class Ac5Component implements OnInit {

 isupdated: boolean;

 constructor(private router:Router,private ac5service: Ac5Service) { }

 sectorsList: Observable<Ac5[]>;

 ngOnInit() {

 this.ac5service.getAllSectors().subscribe(data => {

  this.sectorsList = data;

 })

 }
deleteSector(sectors : Ac5 ) {
 this.ac5service.deleteSector(sectors.sectorid)
  .subscribe(
  data => {
   this.ac5service.getAllSectors().subscribe(data =>{

   this.sectorsList =data;
   });

  }) ;
 };

 updateSector(sectors : Ac5 ) {
 window.localStorage.removeItem("edit-sectorid");
 window.localStorage.setItem("edit-sectorid", sectors.sectorid.toString());
 this.router.navigate(['addsectors']);
 };

}

