import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'angular2-chartjs';
import { ChartComponent } from './chart/chart.component';
import {MatTabsModule} from '@angular/material/tabs';
import { One2oneComponent } from './mode/one2one/one2one.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    ChartComponent,
    One2oneComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    ChartModule,
    MatTabsModule,
    MatDividerModule,
    MatSelectModule,
    MatSliderModule,
    MatButtonModule
 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
