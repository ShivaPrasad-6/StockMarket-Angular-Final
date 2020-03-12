import { Router } from '@angular/router';
 
 import { Observable } from 'rxjs/internal/Observable';
 
 import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
 
 import { of } from 'rxjs';
 
 import { getSyntheticPropertyName } from '@angular/compiler/src/render3/util';
 
 
 
 import * as Highcharts from 'highcharts';
 import { Component, OnInit,ViewChild,

  ElementRef,
 
  AfterViewInit,
 
  OnDestroy,
 
  ChangeDetectorRef, } from '@angular/core';
 

import { HighchartsService } from 'src/app/HighchartsService.service';
import { Ac6Service } from '../ac6/ac6.service';
import { Ac5Service } from '../ac5/ac5.service';
import { Ac2serviceService } from '../ac2/ac2service.service';
import { Ac6 } from '../ac6/ac6';
import { Ac2 } from '../ac2/ac2';
import { Ac5 } from '../ac5/ac5';

@Component({
  selector: 'app-uc2',
  templateUrl: './uc2.component.html',
  styleUrls: ['./uc2.component.css']
})
export class Uc2Component implements OnInit {
  myGroup: FormGroup;

  constructor(private hcs: HighchartsService,private formBuilder: FormBuilder,private router:Router,private companyserviceservice:Ac2serviceService,private sectorsserviceservice: Ac5Service,private stockpriceservice:Ac6Service){ }
 
  companyList: Ac2[];
 
  companyListAll: Ac2[];
 
  sectorsList: Ac5[];
 
  stockpriceList: Observable<Ac6[]>;
 
  ngOnInit() {
 
    this.stockpriceservice.getmultiplelinechart().subscribe(result => {
      var formatteddata = [];
      for (var key in result) {
       var singleObject = {
        name: '',
        data: []
       }
       singleObject.name = key.toUpperCase();
       for (var i = 0; i < result[key].length; i++) {
        singleObject.data.push(parseInt(result[key][i].currentprice));
       }
       formatteddata.push(singleObject);
   }
   this.drawMultipleLineChart(formatteddata);

  });
   this.myGroup= this.formBuilder.group({
    "choose": new FormControl([ Validators.required ]),
    "sectorname": new FormControl([ Validators.required ]),
    "companyname": new FormControl([ Validators.required ]),
    "fromdate":new FormControl([ Validators.required ]),
    "todate":new FormControl([ Validators.required ])
    })
   this.companyserviceservice.getAllCompanies().subscribe(data => {
    this.companyList = data;
    this.companyListAll=data;
    this.companyList=this.companyList.filter(comp=>comp.sector == 'NSE') ;
    })
    this.stockpriceservice.getAllStockPrice().subscribe(data => {
    this.stockpriceList = data;
    })
    this.sectorsserviceservice.getAllSectors().subscribe(data => {
     this.sectorsList = data;
     })
  }
  sectorChange()
  {
   var sectorValue=this.myGroup.controls['sectorname'].value;
   this.companyList=this.companyListAll.filter(comp=>comp.sector == sectorValue) ;
  }
  drawMultipleLineChart(formatteddata) {
    Highcharts.chart('container', {
      title: {
       text: 'Solar Employment Growth by Sector, 2010-2019'
      },
      subtitle: {
       text: 'Source: thesolarfoundation.com'
      },
      yAxis: {
       title: {
        text: 'Number of Employees'
       }
      },
      legend: {
       layout: 'vertical',
       align: 'right',
       verticalAlign: 'middle'
      },
      plotOptions: {
       series: {
        label: {
         connectorAllowed: false
        },
        pointStart: 2000
       }
      },
      series: formatteddata,
      responsive: {
       rules: [{
        condition: {
         maxWidth: 500
        },
        chartOptions: {
         legend: {
          layout: 'horizontal',
          align: 'center',
          verticalAlign: 'bottom'
         }
        }
       }]
      }
     });
    }
 }