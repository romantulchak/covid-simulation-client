import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { SimulationDetails } from '../models/simulationDetails.model';
import { SimulationService } from '../services/simulation.service';

@Component({
  selector: 'app-simulation-chart',
  templateUrl: './simulation-chart.component.html',
  styleUrls: ['./simulation-chart.component.scss']
})
export class SimulationChartComponent implements OnInit {

  constructor(private simulationService: SimulationService) { }
  public simulationDetails: SimulationDetails[] = [];
  private days:string[];
  private numberOfInfected: number[]
  private numberOfHealthyWithoutImmunity: number[];
  private numberOfDeath: number[];
  private numberOfHealthyWithImmunity: number[];
  public lineChartLabels: Label[];
  public lineChartData: ChartDataSets[];
  public lineChartColors: Color[] = [
    {
      borderColor: 'rgb(251 27 27 / 55%)',
      backgroundColor: 'transparent'
    },
    {
      borderColor: 'rgb(143 146 144 / 55%)',
      backgroundColor: 'transparent'
    },
    {
      borderColor: '#000',
      backgroundColor: 'transparent'
    },
    {
      borderColor: 'rgb(45 160 96 / 65%)',
      backgroundColor: 'transparent'
    }

  ];
  public barChartColors: Color[] = [
    {
      backgroundColor: 'rgb(251 27 27 / 55%)',
      hoverBackgroundColor: 'rgb(251 27 27 / 55%)',
    },
    {
      backgroundColor: 'rgb(143 146 144 / 55%)',
      hoverBackgroundColor:'rgb(143 146 144 / 55%)'
    },
    {
      backgroundColor: '#000',
      hoverBackgroundColor: '#000'
    },
    {
      backgroundColor: 'rgb(45 160 96 / 65%)',
      hoverBackgroundColor:'rgb(45 160 96 / 65%)'
    }

  ];
  ngOnInit(): void {
    this.getSimulationDetails();
  }

  private getSimulationDetails(){
    this.simulationService.simulationDetails.subscribe(
      res=>{
        if(res != null){
          this.simulationDetails = res;
          this.initChart();
        }
      }
    );
  }


  private initChart(){
    this.days =[];
    this.numberOfInfected =[];
    this.numberOfHealthyWithoutImmunity = [];
    this.numberOfDeath = [];
    this.numberOfHealthyWithImmunity = [];

    this.simulationDetails.forEach(x=>{
      this.days.push(x.day.toString());
      this.numberOfInfected.push(x.numberOfInfected);
      this.numberOfHealthyWithoutImmunity.push(x.numberOfHealthyWithoutImmunity);
      this.numberOfDeath.push(x.numberOfDeath);
      this.numberOfHealthyWithImmunity.push(x.numberOfHealthyWithImmunity);
    });
    this.lineChartLabels = this.days;  
      this.lineChartData = [
        {data: this.numberOfInfected, label: "Number Of Infected", backgroundColor:"transparent", borderColor:"rgb(251 27 27 / 55%)"},
        {data: this.numberOfHealthyWithoutImmunity, label: "Number Of Healthy Without Immunity", backgroundColor:"transparent", borderColor:"rgb(143 146 144 / 55%)"},
        {data: this.numberOfDeath, label: "Number Of Death", backgroundColor:"transparent", borderColor:"#000"},
        {data: this.numberOfHealthyWithImmunity, label: "Number Of Healthy With Immunity", backgroundColor:"transparent", borderColor:"rgb(45 160 96 / 65%)"},
      ];
    
  }
}
