import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { take, map } from 'rxjs/operators';

import { myMath } from '../../../others/libraries/typescript/math';

@Component({
  selector: 'fg-app-chap08-subchap02',
  templateUrl: './chap08-subchap02.component.html',
  styleUrls: ['./chap08-subchap02.component.scss']
})
export class Chap08Subchap02Component implements 
  OnInit
  OnDestroy {
  public message1: string = 'Wait a litte...';
  public message2: string = 'Wait a litte...';
  public promise: Promise<number>;
  public observable: Observable<number>;
  
  constructor() {

  }

  ngOnInit() {
    this.promise = this.createPromise();
    this.observable = this.createObservable();
    this.createPromise()
      .then((age: number) => this.message1 = `John is ${age} years old now.`)
      .catch((error: Error) => console.error(error.message));   
    this.createObservable()
      .subscribe((value: number) => this.message2 = `David is ${value} years old now.`)
  }

  public createPromise(): Promise<number> {
    return new Promise<number>((resolve, reject) => {
      let hasAnError: boolean = myMath.randomInteger(5, 750) % myMath.randomInteger(20, 70) === 19;     
      setTimeout(() => {
        try {
          if (hasAnError) {
            throw new Error('There was an error!');
          }
        } 
        catch(error) {
          reject(error);
        }
        resolve(myMath.randomInteger(34, 75));
      }, myMath.randomInteger(1500, 2500)
     )
    });
  }

  public createObservable(): Observable<number> {
    return interval(1000)
      .pipe(map(() => myMath.randomInteger(34, 75)));
  }

  ngOnDestroy() {
    
  }
}
