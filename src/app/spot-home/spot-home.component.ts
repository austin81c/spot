import { Component, OnInit, NgZone, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import {NgForm, RequiredValidator, FormGroup, FormControl, Validators, ValidatorFn, AbstractControl} from '@angular/forms';
import { SpotAuthenticationService } from '../spot-authentication/spot-authentication.service';
import { SearchImage, SearchItem, SearchResponse } from '../spot-authentication/SearchResponse';

@Component({
  selector: 'spot-home',
  templateUrl: './spot-home.component.html',
  styleUrls: ['./spot-home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpotHomeComponent implements OnInit {

  artist: any;
  resultsExist: boolean = false;
  topResult: SearchItem;
  topResultImage: SearchImage;

  constructor(private _spotAuthService: SpotAuthenticationService, private _changeDetectorRef: ChangeDetectorRef) {
    
  }

  ngOnInit() {
    this._spotAuthService.getToken();
    this._changeDetectorRef.markForCheck();
  }

  onSubmit() {
    if (this.artist) {
      this._spotAuthService.searchArtist(this.artist).subscribe((data:SearchResponse) => {
        if (data && data.artists && data.artists.items) {
          this.topResult = data.artists.items[0];
          this.topResultImage = data.artists.items[0].images[0];
          this.resultsExist = true;
          this._changeDetectorRef.detectChanges();
        }
      }, (err)=> {
          this.onArtistError(err);
      }, ()=>{});
    }
  }

  onArtistQuery(data: SearchResponse) {
    console.log(data);
  }

  onArtistError(err: any) {
    console.log(err);
  }

}
