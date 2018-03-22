import { Component, ViewChild, ElementRef, AfterViewInit, OnDestroy, OnInit, AfterContentInit } from '@angular/core';

import { chart } from 'highcharts';

import * as Highcharts from 'highcharts';

@Component({
  selector: 'bv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterContentInit, OnDestroy {

  @ViewChild('chartTarget') chartTarget: ElementRef;

  chart: Highcharts.ChartObject;

  title = 'bv';

  ngOnInit(): void {
  }

  ngAfterContentInit() {
    const options: Highcharts.Options = {
      chart: {
        type: 'bar'
      },
      title: {
        text: 'Fruit Consumption'
      },
      xAxis: {
        categories: ['Apples', 'Bananas', 'Oranges']
      },
      yAxis: {
        title: {
          text: 'Fruit eaten'
        }
      },
      series: [{
        name: 'Jane',
        data: [1, 0, 4]
      }, {
        name: 'John',
        data: [5, 7, 3]
      }]
    };

    this.chart = chart(this.chartTarget.nativeElement, options);
  }

  ngOnDestroy() {
    this.chart = null;
  }

}
