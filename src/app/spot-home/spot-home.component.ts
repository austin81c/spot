import { Component, OnInit, NgZone, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import {NgForm, RequiredValidator, FormGroup, FormControl, Validators, ValidatorFn, AbstractControl} from '@angular/forms';
import { SpotAuthenticationService } from '../spot-authentication/spot-authentication.service';
import { SearchImage, SearchItem, SearchResponse } from '../spot-authentication/SearchResponse';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'spot-home',
  templateUrl: './spot-home.component.html',
  styleUrls: ['./spot-home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpotHomeComponent implements OnInit {

  artist: any;
  resultsExist: boolean = false;
  resultsArray: SearchItem[];

  subscriptions: Subscription[] = [];

  constructor(private _spotAuthService: SpotAuthenticationService, private _changeDetectorRef: ChangeDetectorRef) {
    
  }

  ngOnInit() {
    this._spotAuthService.getToken();
  }

  onSubmit() {
    if (this.artist) {
      this.subscriptions.push(this._spotAuthService.searchArtist(this.artist).subscribe(
        this.onArtistQuery.bind(this),
        this.onArtistError.bind(this),
        ()=>{}));
    }
  }
  
  onArtistQuery(data: SearchResponse) {
    if (data && data.artists && data.artists.items) {
      this.resultsArray = data.artists.items;
      this.resultsExist = true;
      this._changeDetectorRef.detectChanges();
    }
  }

  onArtistError(err: any) {
    console.log(err);
  }

}
