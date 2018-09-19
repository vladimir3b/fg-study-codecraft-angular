import { Component, OnInit } from '@angular/core';

import { ItunesSearchObservableService, ISearchItem } from '../../services/itunesSearchObservable.service';

@Component({
  selector: 'fg-app-chap11-subchap03',
  templateUrl: './chap11-subchap03.component.html',
  styleUrls: ['./chap11-subchap03.component.scss']
})
export class Chap11Subchap03Component implements OnInit {

  public searchTerm: string;
  public searching: boolean;
  public buttonClicked: boolean;
  private _searchResults: Array<ISearchItem>;

  constructor(private _itunesSearch: ItunesSearchObservableService) {
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
        .subscribe( (data) => {
          this.searching = false;
          this._searchResults = data;
        })
        // .then(() => this.searching = false)
        // .catch((error) => console.error(error));
    }
  }
  
  public buttonNotClicked(): void {
    this.buttonClicked = false;
  }

  public noResults(): boolean {
    return this.buttonClicked && !this.searching && !this._itunesSearch.havingResults;
  }


}
