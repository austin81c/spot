import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-spot-four-oh-four',
  templateUrl: './spot-four-oh-four.component.html',
  styleUrls: ['./spot-four-oh-four.component.css']
})
export class SpotFourOhFourComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  takeMeHome() {
    this._router.navigate(["home"]);
  }

}
