//Angular imports

import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { SpotHomeComponent } from './spot-home/spot-home.component';
import { SpotNavigationComponent } from './spot-navigation/spot-navigation.component';
import { SpotRoutingModule } from './spot-routing/spot-routing.module';
import { SpotFourOhFourComponent } from './spot-four-oh-four/spot-four-oh-four.component';
import { FormsModule, ReactiveFormsModule } from '../../node_modules/@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SpotHomeComponent,
    SpotNavigationComponent,
    SpotFourOhFourComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SpotRoutingModule
  ],
  providers: [],
  exports: [
    ReactiveFormsModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
