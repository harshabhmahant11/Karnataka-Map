import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainMapComponent } from './main-map/main-map.component';
import { TooltipModule } from 'ng2-tooltip-directive';
import { MapDetialsComponent } from './map-detials/map-detials.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule,MatFormFieldModule} from '@angular/material';
import { MatSliderModule, MatNativeDateModule, MatInputModule, MatRadioModule } from '@angular/material'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MapService } from './main-map/main-map.service';
import { MultiMapsComponent } from './multi-maps/multi-maps.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMapComponent,
    MapDetialsComponent,
    MultiMapsComponent
  ],
  imports: [
    BrowserModule,
    TooltipModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule, 
    MatRadioModule
  ],
  providers: [MapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
