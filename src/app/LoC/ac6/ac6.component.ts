import { Component, OnInit } from '@angular/core';

import { Ac6Service } from 'src/app/LoC/ac6/ac6.service';

import { Ac6 } from 'src/app/LoC/ac6/ac6';

import { Observable } from 'rxjs';

import { Router } from '@angular/router';
@Component({
  selector: 'app-ac6',
  templateUrl: './ac6.component.html',
  styleUrls: ['./ac6.component.css']
})
export class Ac6Component implements OnInit {

  constructor(private router: Router, private stockpriceservice: Ac6Service) { }

  stockpriceList: Observable<Ac6[]>;

  ngOnInit() {
    this.stockpriceservice.getAllStockPrice().subscribe(data => {
      this.stockpriceList = data;
    })
  }

  deleteStockPrice(stockprice: Ac6) {
    this.stockpriceservice.deleteStockPrice(stockprice.companyname)
          .subscribe(
        data => {
          this.stockpriceservice.getAllStockPrice().subscribe(data => {
            this.stockpriceList = data;
          });
        });
  };

  updateStockPrice(stockprice: Ac6) {
    window.localStorage.removeItem("edit-companyname");
    window.localStorage.setItem("edit-companyname", stockprice.companyname.toString());
    this.router.navigate(['addstockprice']);
  };
}



