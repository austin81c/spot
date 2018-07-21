import { Injectable } from '@angular/core';
import { SpotAuthenticationResource } from './spot-authentication.resource';
import { GetTokenResponse } from './GetTokenResponse';
import { SearchArtistResponse } from './SearchArtistResponse';

@Injectable({
  providedIn: 'root'
})
export class SpotAuthenticationService {

  token: string;

  constructor(private _spotAuthResource: SpotAuthenticationResource) { 
  }

  getToken() {
    this._spotAuthResource.getClientCredentials().subscribe((data:GetTokenResponse) => {
      if(data && data.access_token) {
        this.token = data.access_token;
        window.localStorage.setItem('token',this.token);
      }
    }, err => {
      console.log(err);
    });
  }

  searchArtist(name: string) {
    this._spotAuthResource.searchArtist(name).subscribe((data:SearchArtistResponse) => {

    });
  }

}
