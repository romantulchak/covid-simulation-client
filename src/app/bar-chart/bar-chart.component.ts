import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  @Input() barChartData: ChartDataSets[];
  @Input() barChartLabels: Label[];
  @Input() barChartColors: Color[];
  @Input() barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];
  public barChartType = 'bar';
  public barChartOptions = {
    responsive: true,
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  
  constructor() { }

  ngOnInit(): void {
  }

}
