import { Component, OnInit } from '@angular/core';
import { Simulation } from '../models/simulation.model';
import { SimulationService } from '../services/simulation.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  constructor(private simulationService: SimulationService) { }
  public simulations: Simulation[];
  ngOnInit(): void {
    this.getResults();
  }

  private getResults(){
    this.simulationService.results().subscribe(
      res=>{
        if(res != null){
          this.simulations = res;
        }
      }
    );
  }

}
