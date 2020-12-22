import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { SimulationDetails } from '../models/simulationDetails.model';
@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnChanges {

  constructor() { }

  @Input() simulationDetails:SimulationDetails;

  public pieChartLabels: Label[] = ['Number of Infected', 'Number of Death', 'Number of Healthy With Immunity'];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [pluginDataLabels];
  public pieChartData:number[] = [];
  public population: number;

  public deathInPercentage: string;
  public healthyWithImmunityInPercentage: string;
  public infectedInPercentage: string;


  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
      labels:{
        fontSize: 16
      }
    },
    plugins: {
      datalabels: {
        color:'#fff',
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };
  public pieChartColors = [
    {
      backgroundColor: ['rgb(251 27 27 / 55%)', 'rgb(0,0,0)', 'rgb(45 160 96 / 65%)'],
      hoverBackgroundColor: ['rgb(251 27 27 / 55%)', 'rgb(0,0,0)', 'rgb(45 160 96 / 65%)']
    },
  ];
  ngOnChanges(){
    this.pieChartData = [];
    this.pieChartData.push(this.simulationDetails.numberOfInfected, this.simulationDetails.numberOfDeath, this.simulationDetails.numberOfHealthyWithImmunity);
    this.population = this.simulationDetails.numberOfDeath + this.simulationDetails.numberOfHealthyWithImmunity + this.simulationDetails.numberOfHealthyWithoutImmunity + this.simulationDetails.numberOfInfected;
    this.deathInPercentage =((this.simulationDetails.numberOfDeath / this.population)*100).toFixed(2);
    this.healthyWithImmunityInPercentage = ((this.simulationDetails.numberOfHealthyWithImmunity / this.population)*100).toFixed(2);
    this.infectedInPercentage = ((this.simulationDetails.numberOfInfected / this.population)*100).toFixed(2);
  }
  
  
} 
