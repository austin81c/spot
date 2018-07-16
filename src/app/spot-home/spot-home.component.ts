import { Component, OnInit } from '@angular/core';
import {NgForm, RequiredValidator, FormGroup, FormControl, Validators, ValidatorFn, AbstractControl} from '@angular/forms';

@Component({
  selector: 'spot-home',
  templateUrl: './spot-home.component.html',
  styleUrls: ['./spot-home.component.css']
})
export class SpotHomeComponent implements OnInit {

  artist: any;
  homeFormGroup: FormGroup;

  constructor() {
  }

  ngOnInit() {
    this.homeFormGroup = new FormGroup({
      'artist': new FormControl(this.artist, [
        this.forbiddenNameValidator(/odsmack/i)
      ])
    });
  }

  ngOnSubmit() {
    if (this.homeFormGroup.valid) {
      console.log("b4: " + this.homeFormGroup);
      this.homeFormGroup.reset();
      console.log("after: ");
      console.log(this.homeFormGroup);
    }
    else if(this.homeFormGroup.invalid) {
      console.log("reeeeeeeee");
    } 
  }

  forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const forbidden = nameRe.test(control.value);
      return forbidden ? {'forbiddenName': {value: control.value}} : null;
    };
  }

}
