import { Component, OnInit } from '@angular/core';
import { SimulationService } from '../services/simulation.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  constructor(private simulationService: SimulationService) { }

  ngOnInit(): void {
    this.getResults();
  }

  private getResults(){
    this.simulationService.results().subscribe(
      res=>{
        if(res != null){
          console.log(res);
          
        }
      }
    );
  }

}
