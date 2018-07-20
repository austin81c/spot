import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotAuthenticationResource {

  constructor(private http: HttpClient) { 

  }

  public getClientCredentials(): Observable<Object> {
    let options = {
        headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded',
        'Authorization': 'Basic ZmNjNTc2OGY0ZDA2NDFhZWE0MGUxMzNiOWVjMWQ1NTE6ZTBiNDY1NWEzNTY5NDI5YTg5Y2Q5OTI0ZWQzMTE5N2M='
      })
    };
    return this.http.post("https://accounts.spotify.com/api/token", "grant_type=client_credentials", options);
  }

}
