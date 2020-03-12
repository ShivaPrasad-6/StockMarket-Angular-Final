import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ManageexchangeService } from '../manageexchange.service';
import { Manageexchange } from '../manageexchange';
import { Router } from '@angular/router';


@Component({
  selector: 'app-addmanageexchange',
  templateUrl: './addmanageexchange.component.html',
  styleUrls: ['./addmanageexchange.component.css']
})


export class AddmanageexchangeComponent implements OnInit {
  constructor(private router: Router,private stockexchange: ManageexchangeService) { }
  Mngexch: Manageexchange = new Manageexchange();
  submitted = false;


  ngOnInit() {
    var seid=window.localStorage.getItem("edit-seid");
    if(seid!=null && seid !=""){
    this.stockexchange.findOneInAll4(parseInt(seid))  
        .subscribe(  
          data => {  
            this.Mngexch =data;  
            this.stockexchangesaveform.setValue(this.Mngexch);
          }) ;
        }

    this.submitted = false;
  }

  stockexchangesaveform = new FormGroup({
    seid: new FormControl('', [Validators.required]),
    stockexchange: new FormControl('', [Validators.required]),
    brief: new FormControl('', [Validators.required]),
    remarks: new FormControl('', [Validators.required]),
    contactaddress: new FormControl('', [Validators.required])
    });


  saveStockExchange(saveStockExchange) {
    this.Mngexch = new Manageexchange();
    this.Mngexch.seid = this.Seid.value;
    this.Mngexch.stockexchange = this.Stockexchange.value
    this.Mngexch.brief = this.Brief.value;
    this.Mngexch.remarks = this.Remarks.value;
    this.Mngexch.contactaddress = this.Contactaddress.value;
    this.submitted = true;
    this.save();
  }
  save() {
    this.stockexchange.saveStockExchange(this.Mngexch)
      .subscribe(data => console.log(data), error => console.log(error));
    this.Mngexch = new Manageexchange();
    window.localStorage.removeItem("edit-seid");
    this.router.navigate(['ac3']);
  }
  get Seid() {
    return this.stockexchangesaveform.get('seid');
  }
  get Stockexchange() {
    return this.stockexchangesaveform.get('stockexchange');
  }
  get Brief() {
    return this.stockexchangesaveform.get('brief');
  }

  get Remarks() {
    return this.stockexchangesaveform.get('remarks');

  }
  get Contactaddress() {
    return this.stockexchangesaveform.get('contactaddress');
  }
  saveStockExchangeForm() {

    this.submitted = false;
    this.stockexchangesaveform.reset();
  }
}
