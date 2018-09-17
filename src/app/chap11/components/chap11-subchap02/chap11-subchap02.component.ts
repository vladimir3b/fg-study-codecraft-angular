import { Component, OnInit } from '@angular/core';
import { ItunesSearchService } from '../../services/itunesSearch.service';

@Component({
  selector: 'fg-app-chap11-subchap02',
  templateUrl: './chap11-subchap02.component.html',
  styleUrls: ['./chap11-subchap02.component.scss']
})
export class Chap11Subchap02Component implements OnInit {

  public searchTerm: string;
  public searching: boolean;
  public buttonClicked: boolean;

  constructor(private _itunesSearch: ItunesSearchService) {
    this.searching = false;
    this.buttonClicked = false;
  }

  ngOnInit() {
  }

  public doSearch(): void {
    if (this.searchTerm) {
      this.buttonClicked = true;
      this.searching = true;
      this._itunesSearch.search(this.searchTerm)
        .then(() => this.searching = false)
        .catch((error) => console.error(error));
    }
  }
  
  public buttonNotClicked(): void {
    console.log('cacat');
    this.buttonClicked = false;
  }

  public noResults(): boolean {
    return this.buttonClicked && !this.searching && !this._itunesSearch.havingResults;
  }

}
