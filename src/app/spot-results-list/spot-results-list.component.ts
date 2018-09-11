import { Component, OnInit, Input, AfterViewChecked } from '@angular/core';
import { SearchItem, SearchResponse, SearchImage } from '../spot-authentication/SearchResponse';

@Component({
  selector: 'spot-results-list',
  templateUrl: './spot-results-list.component.html',
  styleUrls: ['./spot-results-list.component.css']
})
export class SpotResultsListComponent implements OnInit{

  @Input() data: SearchItem[];

  resultsExist: boolean = false;
  topResult: SearchItem;
  topResultImage: SearchImage;

  constructor() { }

  ngOnInit() {
    if (this.data) {
      this.topResult = this.data[0];
      this.topResultImage = this.topResult.images[0];
    }
  }

}
