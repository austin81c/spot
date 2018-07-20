import { Injectable } from '@angular/core';
import { SpotAuthenticationResource } from './spot-authentication.resource';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotAuthenticationService {

  constructor(private _spotAuthResource: SpotAuthenticationResource) { 
  }

  searchArtists() {
    //First, authorize
    this._spotAuthResource.getClientCredentials().subscribe(data => {
      console.log(data);
    }, err => {
      console.log(err);
    });
  }

}
