import { Injectable } from "@angular/core";
import { 
  Http, 
  Response 
} from "@angular/http";
import { map } from 'rxjs/operators';

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
  public loadingResults: boolean;
  private _searchTerm: string;

  constructor (private _http: Http) {
    this.searchResults = [];
    this.loadingResults = false;
  }

  public search(searchTerm: string): any {
    this._searchTerm = searchTerm;
    return new Promise((resolve, reject) => {
      this._http.get(`${apiRoot}?term=${this._searchTerm}&media=music&limit=20`)
        // .pipe(
        //   map((response: any) => {
        //     return response.results.map((item: any) => {
        //       return {
        //         name: item.trackName,
        //         artist: item.artistName,
        //         link: item.trackViewUrl,
        //         thumbnail: item.artworkUrl30,
        //         artistId: item.artistId
        //       };
        //     })
        //   }))
      .toPromise()
      .then((response) => {
        console.log(response.json());
        this.searchResults = response.json().results;
        resolve();
      })
      .catch(() => reject());
    })
  }


}
