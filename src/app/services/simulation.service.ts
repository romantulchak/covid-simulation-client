import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Simulation } from "../models/simulation.model";
import { SimulationDetails } from "../models/simulationDetails.model";

const API_URL = environment.API_URL;
@Injectable({
    providedIn:'root'
})
export class SimulationService{
    
    constructor(private http: HttpClient){}
    public currentSimulation: BehaviorSubject<Simulation> = new BehaviorSubject<Simulation>(null);
    public simulationDetails: BehaviorSubject<SimulationDetails[]> = new BehaviorSubject<SimulationDetails[]>(null);
    
    public startSimulation(simulation: Simulation):Observable<SimulationDetails[]>{
        return this.http.post<SimulationDetails[]>(API_URL + 'simulation/startSimulation', simulation);
    }


    public results():Observable<any>{
        return this.http.get<any>(API_URL + 'simulation/results/0');
    }

}