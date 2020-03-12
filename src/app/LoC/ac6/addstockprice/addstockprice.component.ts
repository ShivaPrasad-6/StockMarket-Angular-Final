import { Component, OnInit } from '@angular/core';
import { Ac6Service } from 'src/app/LoC/ac6/ac6.service';

import {FormControl,FormGroup,Validators} from '@angular/forms';

import { Ac6 } from 'src/app/LoC/ac6/ac6';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addstockprice',
  templateUrl: './addstockprice.component.html',
  styleUrls: ['./addstockprice.component.css']
})
export class AddstockpriceComponent implements OnInit {

  constructor(private router:Router,private stockpriceservice:Ac6Service) { }
  stockprice : Ac6=new Ac6();
  submitted = false;
  ngOnInit() {
    if(companyname !="null"&& companyname!=""){
    var companyname=window.localStorage.getItem("edit-companyname");
   
    this.stockpriceservice.findOneInAll5(companyname)  
        .subscribe(  
          data => {  
            this.stockprice =data;  
            this.stockpricesaveform.setValue(this.stockprice);
          }) ;
        
        }
    this.submitted = false;
}
  stockpricesaveform=new FormGroup({

  companyname:new FormControl('' , [Validators.required ] ),

  stockexchange:new FormControl('',[Validators.required]),

  currentprice:new FormControl('',[Validators.required]),

  date:new FormControl('',[Validators.required]),

  time:new FormControl('',[Validators.required ])

  });

  saveStockPrice(saveStockPrice){

  this.stockprice=new Ac6();
  this.stockprice.companyname=this.Companyname.value;
  this.stockprice.stockexchange=this.Stockexchange.value;
  this.stockprice.currentprice=this.Currentprice.value;
  this.stockprice.date=this.Date.value;
  this.stockprice.time=this.Time.value;
  this.submitted = true;
  this.save();
  }

  save() {

  this.stockpriceservice.saveStockPrice(this.stockprice)

   .subscribe(data => console.log(data), error => console.log(error));

  this.stockprice = new Ac6();
  window.localStorage.removeItem("edit-companyname");
    this.router.navigate(['ac6']);
 

  }

  get Companyname(){

  return this.stockpricesaveform.get('companyname');
  }

  get Stockexchange(){

  return this.stockpricesaveform.get('stockexchange');

  }

  get Currentprice(){

  return this.stockpricesaveform.get('currentprice');

  }



  get Date(){

  return this.stockpricesaveform.get('date');

  }

  get Time(){

  return this.stockpricesaveform.get('time');

  }
  saveStockPriceForm(){

  this.submitted=false;

  this.stockpricesaveform.reset();
  }

 }