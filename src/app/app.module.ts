import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimulationPanelComponent } from './simulation-panel/simulation-panel.component';
import { SimulationChartComponent } from './simulation-chart/simulation-chart.component';
import { SimulationDataPanelComponent } from './simulation-data-panel/simulation-data-panel.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';
import { LineChartComponent } from './line-chart/line-chart.component';
import {MatTabsModule} from '@angular/material/tabs';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BarChartComponent } from './bar-chart/bar-chart.component';
@NgModule({
  declarations: [
    AppComponent,
    SimulationPanelComponent,
    SimulationChartComponent,
    SimulationDataPanelComponent,
    LineChartComponent,
    BarChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ChartsModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
