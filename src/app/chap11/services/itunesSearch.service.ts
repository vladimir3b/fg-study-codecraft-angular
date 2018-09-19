import { Injectable } from "@angular/core";
import { 
  Http, 
  Response 
} from "@angular/http";

interface ISearchItem {
  name: string,
  artist: string,
  link: string,
  thumbnail: string,
  artistId: string
}
const apiRoot: string = 'https://itunes.apple.com/search';


@Injectable()
export class ItunesSearchService {
  
  public searchResults: Array<ISearchItem>;
  public havingResults: boolean;
  private _searchTerm: string;

  constructor (private _http: Http) {
    this.searchResults = [];
    this.havingResults = false;
  }

  public search(searchTerm: string): Promise<void> {
    this._searchTerm = searchTerm;
    return new Promise((resolve, reject) => {
      this._http.get(`${apiRoot}?term=${this._searchTerm}&media=music&limit=20`)
      .toPromise()
      .then((response: Response) => {
        this.havingResults = response.json().results.length >= 1;
        this.searchResults = response.json().results.map(item => { 
          return {
            name: item.trackName,
            artist: item.artistName,
            link: item.trackViewUrl,
            thumbnail: item.artworkUrl30,
            artistId: item.artistId
          }
        });        
        resolve();
      })
      .catch(() => reject());
    })
  }


}
