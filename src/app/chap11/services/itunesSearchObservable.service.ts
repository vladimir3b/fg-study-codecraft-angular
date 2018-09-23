import { Injectable } from "@angular/core";
import { 
  Http, 
  Response 
} from "@angular/http";
import { map } from 'rxjs/operators';
import { Observable } from "rxjs";

export interface ISearchItem {
  name: string,
  artist: string,
  link: string,
  thumbnail: string,
  artistId: string
}
const apiRoot: string = 'https://itunes.apple.com/search';


@Injectable()
export class ItunesSearchObservableService {
  
  public searchResults: Array<ISearchItem>;
  public havingResults: boolean;
  private _searchTerm: string;

  constructor (private _http: Http) {
    this.searchResults = [];
    this.havingResults = false;
  }

  public search(searchTerm: string): Observable<Array<ISearchItem>> {
    this._searchTerm = searchTerm;
    return this._http.get(`${apiRoot}?term=${this._searchTerm}&media=music&limit=20`)
      .pipe(
        map((response: Response) => {
          let results = response.json().results.map(element => {
            return {
              name: element.trackName,
              artist: element.artist,
              link: element.trackViewUrl,
              thumbnail: element.artworkUrl30,
              artistId: element.artistId
            }
          });
          return results;
        })
      )
    }
  }


}
