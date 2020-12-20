import { Component, OnInit } from '@angular/core';
import { Simulation } from '../models/simulation.model';
import { SimulationService } from '../services/simulation.service';

@Component({
  selector: 'app-simulation-panel',
  templateUrl: './simulation-panel.component.html',
  styleUrls: ['./simulation-panel.component.scss']
})
export class SimulationPanelComponent implements OnInit {

  constructor(private simulationService: SimulationService) { }
  public simulation: Simulation = new Simulation();
  ngOnInit(): void {
  }

  public simulate(){
    this.simulationService.startSimulation(this.simulation).subscribe(
      res=>{
        if(res != null){
          this.simulationService.currentSimulation.next(this.simulation);
          this.simulationService.simulationDetails.next(res);
        }
      }
    );
    
  }
}
