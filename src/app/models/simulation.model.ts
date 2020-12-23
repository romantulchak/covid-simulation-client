import { SimulationDetails } from "./simulationDetails.model";

export class Simulation{
    public id: number;
    public simulationName: string;
    public population: number;
    public initialNumberOfInfected: number;
    public personInfectPerDay: number;
    public mortalityRate: number;
    public daysToRecovery: number;
    public daysToDeath: number;
    public daysOfSimulation: number;
    public simulationDetails: SimulationDetails[];
    public isMask: boolean;
    public isDistance: boolean;
}