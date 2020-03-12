import { Component, OnInit } from '@angular/core';

import { Ac5Service } from 'src/app/LoC/ac5/ac5.service';

import {FormControl,FormGroup,Validators} from '@angular/forms';

import { Ac5 } from 'src/app/LoC/ac5/ac5';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addsectors',
  templateUrl: './addsectors.component.html',
  styleUrls: ['./addsectors.component.css']
})
export class AddsectorsComponent implements OnInit {

  constructor(private router: Router,private ac5:Ac5Service) { }

  sectors : Ac5=new Ac5();

  submitted = false;

  ngOnInit() {
    var sectorid=window.localStorage.getItem("edit-sectorid");
    if(sectorid!=null && sectorid !=""){
    this.ac5.findOneInAll3(parseInt(sectorid))  
        .subscribe(  
          data => {  
            this.sectors =data;  
            this.sectorssaveform.setValue(this.sectors);
          }) ;
        }
    this.submitted = false;
  }



  sectorssaveform=new FormGroup({
  sectorid:new FormControl('',[Validators.required]),
  sectorname:new FormControl('',[Validators.required]),
  brief:new FormControl('',[Validators.required ])
  });

  saveSectors(saveSectors){

  this.sectors=new Ac5();

  this.sectors.sectorid=this.Sectorid.value;

  this.sectors.sectorname=this.Sectorname.value;

  this.sectors.brief=this.Brief.value;

  this.submitted = true;

  this.save();

  }
  save() {

  this.ac5.saveSectors(this.sectors)

   .subscribe(data => console.log(data), error => console.log(error));

  this.sectors = new Ac5();
  window.localStorage.removeItem("edit-sectorid");
    this.router.navigate(['ac5']);

  }

  get Sectorid(){



  return this.sectorssaveform.get('sectorid');



  }



  get Sectorname(){



  return this.sectorssaveform.get('sectorname');



  }



  get Brief(){



  return this.sectorssaveform.get('brief');



  }



  saveSectorsForm(){



  this.submitted=false;



  this.sectorssaveform.reset();



  }



 }