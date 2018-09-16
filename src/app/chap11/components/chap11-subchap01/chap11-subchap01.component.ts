import { 
  Component, 
  OnInit 
} from '@angular/core';
import { 
  HttpClient, 
  HttpParams,
  HttpHeaders 
} from '@angular/common/http';


@Component({
  selector: 'fg-app-chap11-subchap01',
  templateUrl: './chap11-subchap01.component.html',
  styleUrls: ['./chap11-subchap01.component.scss']
})
export class Chap11Subchap01Component implements OnInit {

  public apiRoot: string = 'http://httpbin.org';

  constructor(private _http: HttpClient) { }

  ngOnInit() {
  }

  public doGET(): void {
    console.log('GET request');
    const queryParameters: HttpParams = new HttpParams()
      .set('firstName', 'John')
      .set('lastName', 'Smith');
    this._http.get(
      `${this.apiRoot}/get`, 
      { 
        params: queryParameters 
      })   
      .subscribe(response => console.log(response));
  }
  
  public doPOST(): void {
    console.log('POST request');
    const queryParameters: HttpParams = new HttpParams()
      .set('firstName', 'John')
      .set('lastName', 'Smith');
    this._http.post(
      `${this.apiRoot}/post`, 
      { 
        login: 'johnsmith46', 
        password: 'dsfg12@#$@242dsf'
      }, 
      {
        params: queryParameters,
        responseType: 'text' 
      })   
      .subscribe(response => console.log(response));
  }
  

  public doPUT(): void {
    console.log('PUT request');
    const queryParameters: HttpParams = new HttpParams()
      .set('firstName', 'John')
      .set('lastName', 'Smith');
    this._http.put(
      `${this.apiRoot}/put`, 
      { 
        login: 'johnsmith46', 
        password: 'dsfg12@#$@242dsf'
      }, 
      {
        params: queryParameters,
        responseType: 'arraybuffer'
      })   
      .subscribe(response => console.log(response));
  }
  
  public doDELETE(): void {
    console.log('DELETE request');
    const queryParameters: HttpParams = new HttpParams()
      .set('firstName', 'John')
      .set('lastName', 'Smith');
    this._http.delete(`${this.apiRoot}/delete`, { params: queryParameters })   
      .subscribe(response => console.log(response));
  }

  public doGETAsPromise(): void {
    console.log('GET as a promise request');
    const queryParameters: HttpParams = new HttpParams()
      .set('firstName', 'John')
      .set('lastName', 'Smith');
    this._http.get(
      `${this.apiRoot}/get`, 
      { 
        params: queryParameters 
      })  
      .toPromise()
      .then(response => console.log(response)); 
  }

  public doGETAsPromiseError(): void {
    console.log('GET as a promise request with an error');
    const queryParameters: HttpParams = new HttpParams()
      .set('firstName', 'John')
      .set('lastName', 'Smith');
    this._http.get(
      `${this.apiRoot}/post`, 
      { 
        params: queryParameters 
      })  
      .toPromise()
      .then(response => console.log(response))
      .catch(error => console.error(`Error: ${error.status} ${error.statusText}`));
  }

  public doGETAsObservableError(): void {
    console.log('GET request with error');
    const queryParameters: HttpParams = new HttpParams()
      .set('firstName', 'John')
      .set('lastName', 'Smith');
    this._http.get(
      `${this.apiRoot}/post`, 
      { 
        params: queryParameters 
      })   
      .subscribe(
        response => console.log(response),
        error => console.error(`Error: ${error.status} ${error.statusText}`)
      );
  }

  public doGETWithHeaders(): void {
    console.log('GET request with headers');
    const headers = new HttpHeaders();
    headers.append('Authorization', btoa('jacksparow:b3@p!r@7'));
    
    const queryParameters: HttpParams = new HttpParams()
      .set('firstName', 'John')
      .set('lastName', 'Smith');
    this._http.get(
      `${this.apiRoot}/get`, 
      { 
        params: queryParameters 
      })   
      .subscribe(response => console.log(response));
  }

}
