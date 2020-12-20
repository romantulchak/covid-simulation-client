import { Component, Input, OnInit } from '@angular/core';
import { Simulation } from '../models/simulation.model';
import { SimulationService } from '../services/simulation.service';

@Component({
  selector: 'app-simulation-data-panel',
  templateUrl: './simulation-data-panel.component.html',
  styleUrls: ['./simulation-data-panel.component.scss']
})
export class SimulationDataPanelComponent implements OnInit {

  constructor(private simulationService: SimulationService) { }
  public currentSimulation: Simulation;
  ngOnInit(): void {
    this.simulationService.currentSimulation.subscribe(
      res=>{
        if(res != null){
          this.currentSimulation = res;
        }
      }
    );
  }

}
