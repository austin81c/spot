import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotAuthenticationResource {

  constructor(private http: HttpClient) { 

  }

  public getClientCredentials() {
    return this.http.get("http://localhost:3000/api/token");
  }

  public searchArtist(artist: string){
    let query = "?name=" + artist;
    return this.http.get("http://localhost:3000/api/search" + query);
  }



}
