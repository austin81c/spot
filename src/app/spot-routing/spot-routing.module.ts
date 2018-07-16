import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes }  from '@angular/router';
import { SpotHomeComponent } from '../spot-home/spot-home.component';
import { SpotFourOhFourComponent } from '../spot-four-oh-four/spot-four-oh-four.component';


const appRoutes:Routes = [
  { path: "home", component: SpotHomeComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", component: SpotFourOhFourComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class SpotRoutingModule { }
