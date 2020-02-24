import { Component, OnInit } from '@angular/core';
import { Observable,Subject } from "rxjs";  
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { Ac2serviceService } from 'src/app/LoC/ac2/ac2service.service';
import { Ac2 } from 'src/app/LoC/ac2/ac2';


@Component({
  selector: 'app-ac2',
  templateUrl: './ac2.component.html',
  styleUrls: ['./ac2.component.css']
})
export class Ac2Component implements OnInit {

  constructor(private ac2service:Ac2serviceService) { }

  
  companyList: Observable<Ac2[]>;  

  ngOnInit() {  
    this.ac2service.getAllCompanies().subscribe(data =>{  
    this.companyList =data;   
    })  ;

  }
}