import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Ac2serviceService } from 'src/app/LoC/ac2/ac2service.service';
import { Ac2 } from 'src/app/LoC/ac2/ac2';
import { Router } from '@angular/router';


@Component({

  selector: 'app-updatecompany',

  templateUrl: './updatecompany.component.html',

  styleUrls: ['./updatecompany.component.css']

})

export class UpdatecompanyComponent implements OnInit {
  constructor(private router: Router,private companyservice: Ac2serviceService) { }

  company: Ac2 = new Ac2();
  submitted = false;


  ngOnInit() {
    var companyname=window.localStorage.getItem("edit-companyname");
    if(companyname!=null && companyname !=""){
    this.companyservice.findOneInAll4(companyname)  
        .subscribe(  
          data => {  
            this.company =data;  
            this.companyupdateform.setValue(this.company);
          }) ;
        }

    this.submitted = false;
  }



  companyupdateform = new FormGroup({
    companyname: new FormControl('', [Validators.required]),
    ceoname: new FormControl('', [Validators.required]),
    turnover:new FormControl('',[Validators.required]),
    bod: new FormControl('', [Validators.required]),
    listedinse: new FormControl('', [Validators.required]),
    sector: new FormControl('', [Validators.required]),
    remarks: new FormControl('', [Validators.required]),
    stockcode: new FormControl('', [Validators.required])
  });
  updateCompany(updateCompany) {

    this.company = new Ac2();
    this.company.companyname = this.Companyname.value;
    this.company.turnover = this.Turnover.value
    this.company.ceoname = this.Ceoname.value;
    this.company.bod = this.Bod.value;
    this.company.listedinse = this.Listedinse.value;
    this.company.sector = this.Sector.value;
    this.company.remarks = this.Remarks.value;
    this.company.stockcode = this.Stockcode.value;
    this.submitted = true;
    this.update();
  }
  update() {
    this.companyservice.updateCompany(this.company,this.company.companyname)
      .subscribe(data => console.log(data), error => console.log(error));
    this.company = new Ac2();
    window.localStorage.removeItem("edit-companyname");
    this.router.navigate(['ac2']);
  }
   
  get Companyname() {
    return this.companyupdateform.get('companyname');
  }
  get Turnover() {
    return this.companyupdateform.get('turnover');
  }
  get Ceoname() {
    return this.companyupdateform.get('ceoname');
  }
  get Bod() {
    return this.companyupdateform.get('bod');
  }
  get Listedinse() {
    return this.companyupdateform.get('listedinse');
  }
  get Sector() {
    return this.companyupdateform.get('sector');
  }
  get Remarks() {
    return this.companyupdateform.get('remarks');
  }
  get Stockcode() {
    return this.companyupdateform.get('stockcode');
  }
  updateCompanyForm() {
    this.submitted = false;
    this.companyupdateform.reset();
  }
 
}