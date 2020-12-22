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
  public errorMessage: string;
  ngOnInit(): void {
  }

  public simulate(){

    if(this.simulation.daysOfSimulation && this.simulation.daysToDeath && this.simulation.daysToRecovery && this.simulation.initialNumberOfInfected && this.simulation.mortalityRate && this.simulation.personInfectPerDay && this.simulation.population && this.simulation.simulationName != null  && this.validate()){
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

  private validate():boolean{
    if(this.simulation.population < this.simulation.initialNumberOfInfected){
      this.errorMessage = "The Initial number of infected should be less than Population";
      return false;
    }else if(this.simulation.population < this.simulation.personInfectPerDay){
      this.errorMessage = "Person infected per day should be less than Population";
      return false;
    }else if(this.simulation.population < this.simulation.personInfectPerDay + this.simulation.initialNumberOfInfected){
      this.errorMessage = "The Initial number of infected + Person infected per day should be less than Population";
      return false;
    }else if(this.simulation.population < this.simulation.mortalityRate){
      this.errorMessage = "The Mortality rate should be less than Population";
      return false;   
    }
    this.errorMessage = "";
    return true;
  }
}
