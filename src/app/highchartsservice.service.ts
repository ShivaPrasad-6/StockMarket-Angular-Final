import { Injectable } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Ac2 } from './LoC/ac2/ac2';





@Injectable()

export class HighchartsService {

 companyList: Ac2[];

 charts = [];

 defaultOptions = {

  title: {

    text: 'Compare Company Growth by Sector'

  },

  subtitle: {

    text: 'Source: moneycontrol.com'

  },

  yAxis: {

    title: {

      text: 'compare stock price'

    }

  },

  legend: {

    layout: 'vertical',

    align: 'right',

    verticalAlign: 'middle'

  },

  plotOptions: {

    series: {

      pointStart:2010

    }

  },

  series: [{

    name: 'tcs',

    data: [90000, 20000, 10000, 30000, 60000, 10000, 30000]

  },

  {

   name: 'cts',

   data: [70000, 30000, 30000, 20000, 70000, 90000, 50000]

 }

 ]

 }



 constructor() {

 }



 createChart(container, options?: Object) {

  let opts = !!options ? options : this.defaultOptions;

  let e = document.createElement("div");



  container.appendChild(e);



  if(!!opts.chart) {

   opts.chart['renderTo'] = e;

  }

  else {

   opts.chart = {

    'renderTo': e

   }

  }

  this.charts.push(new Highcharts.Chart(opts));

 }



 removeFirst() {

  this.charts.shift();

 }



 removeLast() {

  this.charts.pop();

 }



 getChartInstances(): number {

  return this.charts.length;

 }



 getCharts() {

  return this.charts;

 }

}



