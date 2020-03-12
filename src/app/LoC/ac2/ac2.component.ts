import { Component, OnInit } from '@angular/core';
import { Observable,Subject } from "rxjs";  
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { Ac2serviceService } from 'src/app/LoC/ac2/ac2service.service';
import { Ac2 } from 'src/app/LoC/ac2/ac2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ac2',
  templateUrl: './ac2.component.html',
  styleUrls: ['./ac2.component.css']
})
export class Ac2Component implements OnInit {
  
  constructor(private router: Router,private ac2service:Ac2serviceService) { }

  companyList: Observable<Ac2[]>;  

  ngOnInit() { 
    this.ac2service.getAllCompanies().subscribe(data =>{  
    this.companyList =data;   
    });
  }

    deleteCompany(company : Ac2 ) {  
      this.ac2service.deleteCompany(company.companyname)  
        .subscribe(  
          data => {  
            this.ac2service.getAllCompanies().subscribe(data =>{  
              this.companyList =data;   
              });
          
          }) ;
    };
    updateCompany(company : Ac2 ) { 
       
    window.localStorage.removeItem("edit-companyname");
    window.localStorage.setItem("edit-companyname", company.companyname.toString());
    this.router.navigate(['update-company']);
    };
  }