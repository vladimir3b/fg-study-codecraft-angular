import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { take, map } from 'rxjs/operators';

import { myMath } from './../../../_others/libraries/typescript/math';

@Component({
  selector: 'fg-app-chap07-subchap01',
  templateUrl: './chap07-subchap01.component.html',
  styleUrls: ['./chap07-subchap01.component.scss']
})
export class Chap07Subchap01Component implements 
  OnInit,
  OnDestroy {

  public observable: Observable<number> = interval(1000);
  public messageObs1: number;
  public messageObs2: number;
  public messageObs3: number;
  public messageObs4: number;

  constructor() { }

  ngOnInit() {
    this.observable.subscribe((value: number) => {
      this.messageObs1 = value;
    });
    this.observable.pipe(take(4)).subscribe((value: number) => {
      this.messageObs2 = value;
    });
    this.observable.pipe(map((value: number) => Date.now())).subscribe((value: number) => {
      this.messageObs3 = value;
    });
    this.observable.pipe(map((value: number) => myMath.randomInteger(1, 20) * value)).subscribe((value: number) => {
      this.messageObs4 = value;
    });
  } 
  
  ngOnDestroy(): void {
        
  }

}
