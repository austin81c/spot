//Angular imports

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { SpotHomeComponent } from './spot-home/spot-home.component';
import { SpotNavigationComponent } from './spot-navigation/spot-navigation.component';
import { SpotRoutingModule } from './spot-routing/spot-routing.module';
import { SpotFourOhFourComponent } from './spot-four-oh-four/spot-four-oh-four.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpotAuthenticationService } from './spot-authentication/spot-authentication.service';
import { SpotFooterComponent } from './spot-footer/spot-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SpotHomeComponent,
    SpotNavigationComponent,
    SpotFourOhFourComponent,
    SpotFooterComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    SpotRoutingModule
  ],
  providers: [
    SpotAuthenticationService
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
