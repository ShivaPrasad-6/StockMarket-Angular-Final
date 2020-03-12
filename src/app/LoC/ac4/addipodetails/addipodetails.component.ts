import { Component, OnInit } from '@angular/core';

import { Ac4Service } from 'src/app/LoC/ac4/ac4.service';

import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Ac4 } from 'src/app/LoC/ac4/ac4';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addipodetails',
  templateUrl: './addipodetails.component.html',
  styleUrls: ['./addipodetails.component.css']
})
export class AddipodetailsComponent implements OnInit {
  constructor(private router: Router, private ipodetailsservice: Ac4Service) { }
  ipodetails: Ac4 = new Ac4();
  submitted = false;
  ngOnInit() {
    if (ipoid != "null" && ipoid != "") {
      var ipoid = window.localStorage.getItem("edit-ipoid");
      this.ipodetailsservice.findOneInAll2(parseInt(ipoid))
        .subscribe(
          data => {
            this.ipodetails = data;
            this.ipodetailssaveform.setValue(this.ipodetails);
          });
        }
      this.submitted = false;  
  }

  ipodetailssaveform = new FormGroup({

    ipoid: new FormControl('', [Validators.required]),
    companyname: new FormControl('', [Validators.required]),
    stockexchange: new FormControl('', [Validators.required]),
    pricepershare: new FormControl('', [Validators.required]),
    totalnoofshares: new FormControl('', [Validators.required]),
    opendatetime: new FormControl('', [Validators.required])

  });







  saveIpoDetails(saveIpoDetails) {



    this.ipodetails = new Ac4();

    this.ipodetails.ipoid = this.Ipoid.value;

    this.ipodetails.companyname = this.Companyname.value;

    this.ipodetails.stockexchange = this.Stockexchange.value;

    this.ipodetails.pricepershare = this.Pricepershare.value;

    this.ipodetails.totalnoofshares = this.Totalnoofshares.value;

    this.ipodetails.opendatetime = this.Opendatetime.value;



    this.submitted = true;



    this.save();



  }



  save() {



    this.ipodetailsservice.saveIpoDetails(this.ipodetails)
      .subscribe(data => console.log(data), error => console.log(error));

    this.ipodetails = new Ac4();
    window.localStorage.removeItem("edit-ipoid");
    this.router.navigate(['ac4']);
  }
  get Ipoid() {



    return this.ipodetailssaveform.get('ipoid');

  }

  get Companyname() {

    return this.ipodetailssaveform.get('companyname');
  }
  get Stockexchange() {
    return this.ipodetailssaveform.get('stockexchange');
  }
  get Pricepershare() {
    return this.ipodetailssaveform.get('pricepershare');
  }
  get Totalnoofshares() {
    return this.ipodetailssaveform.get('totalnoofshares');
  }
  get Opendatetime() {
    return this.ipodetailssaveform.get('opendatetime');
  }
  saveIpoDetailsForm() {
    this.submitted = false;
    this.ipodetailssaveform.reset();
  }
}