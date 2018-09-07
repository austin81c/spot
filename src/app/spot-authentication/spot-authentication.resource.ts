import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { SearchResponse } from './SearchResponse';

@Injectable({
  providedIn: 'root'
})
export class SpotAuthenticationResource {

  constructor(private http: HttpClient) { 

  }

  public getClientCredentials() {
    return this.http.get("http://localhost:3000/api/token");
  }

  public searchArtist(artist: string): Observable<any>{
    let query = "?name=" + artist;
    let auth = window.localStorage.getItem("token");
    let headers = new HttpHeaders().set("authentication", "Bearer " + auth);
    return this.http.get("http://localhost:3000/api/search" + query, {"headers":headers});
  }



}
