import { Component, OnInit } from '@angular/core';
import {NgForm, RequiredValidator, FormGroup, FormControl, Validators, ValidatorFn, AbstractControl} from '@angular/forms';
import { SpotAuthenticationService } from '../spot-authentication/spot-authentication.service';

@Component({
  selector: 'spot-home',
  templateUrl: './spot-home.component.html',
  styleUrls: ['./spot-home.component.css']
})
export class SpotHomeComponent implements OnInit {

  artist: any;
  homeFormGroup: FormGroup;

  constructor(private _spotAuthService: SpotAuthenticationService) {
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
      this.homeFormGroup.reset();
      this._spotAuthService.searchArtist(this.homeFormGroup.value);
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
