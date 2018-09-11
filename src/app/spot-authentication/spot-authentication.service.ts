import { Injectable } from '@angular/core';
import { SpotAuthenticationResource } from './spot-authentication.resource';
import { GetTokenResponse } from './GetTokenResponse';
import { SearchResponse } from './SearchResponse';
import { Subscription, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotAuthenticationService {

  token: string;

  constructor(private _spotAuthResource: SpotAuthenticationResource) { 
  }

  getToken(force:boolean=false) {
    if (!window.localStorage.getItem('token') || force) {
      this._spotAuthResource.getClientCredentials().subscribe((data:GetTokenResponse) => {
        if(data && data.access_token) {
          this.token = data.access_token;
          window.localStorage.setItem('token',this.token);
        }
      }, err => {
        console.log(err);
      });
    }

  }

  searchArtist(name: string): Observable<SearchResponse> {
    return this._spotAuthResource.searchArtist(name);
  }

}
