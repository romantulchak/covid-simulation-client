import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { SimulationDetails } from '../models/simulationDetails.model';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnChanges {

  @Input() lineChartData: ChartDataSets[];
  @Input() lineChartLabels: Label[];
  @Input() lineChartColors: Color[];
  @Input() lineChartLegend;
  public lineChartPlugins = [];
  public lineChartType = 'line';
  public lineChartOptions = {
    responsive: true,
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  
  
  
  constructor() { }

  ngOnChanges(){
    
  }

}
