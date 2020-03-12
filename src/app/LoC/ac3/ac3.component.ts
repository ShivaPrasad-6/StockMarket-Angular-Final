import { Component, OnInit } from '@angular/core';
import { Manageexchange } from './manageexchange';
import { ManageexchangeService } from './manageexchange.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ac3',
  templateUrl: './ac3.component.html',
  styleUrls: ['./ac3.component.css']
})
export class Ac3Component implements OnInit {

  constructor(private router: Router,private ac3service:ManageexchangeService) { }

  stockexchangeList: Observable<Manageexchange[]>;  

  ngOnInit() { 
    this.ac3service.getAllStockExchange().subscribe(data =>{  
    this.stockexchangeList =data;   
    });
  }

    deleteStockExchange(stockexchange : Manageexchange ) {  
        this.ac3service.deleteStockExchange(stockexchange.seid)  
        .subscribe(  
          data => {  
            this.ac3service.getAllStockExchange().subscribe(data =>{  
              this.stockexchangeList =data;   
              });
          
          }) ;
    };
    updateStockExchange(me : Manageexchange ) { 
    window.localStorage.removeItem("edit-seid");
    window.localStorage.setItem("edit-seid", me.seid.toString());
    this.router.navigate(['addmanageexchange']);
    };
}
