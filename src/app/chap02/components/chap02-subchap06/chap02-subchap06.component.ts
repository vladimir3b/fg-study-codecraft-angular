import { Component, OnInit } from '@angular/core';

import { myMath } from '../../../others/libraries/typescript/math';


@Component({
  selector: 'fg-app-chap02-subchap06',
  templateUrl: './chap02-subchap06.component.html',
  styleUrls: ['./chap02-subchap06.component.scss']
})
export class Chap02Subchap06Component implements OnInit {

  public asyncMessage: string;

  constructor() { }

  ngOnInit() {
    this.justDoIt();
  }

  
  public doSomethingAsynchronous(callback: Function) {
    setTimeout(callback, myMath.randomInteger(1500, 3500));
  }

   // promises
  public doOtherThingAsynchronous(): Promise<void> {
    return new Promise((resolve: Function, reject: Function) => {
      let hasError: boolean = (myMath.randomInteger(1500, 3500) % 3 === 1);
      setTimeout(() => {
        if (hasError) {
          reject();
        } else {
          resolve();
        }
      }, myMath.randomInteger(1500, 3500));
    });
  }


  public justDoIt() {
    this.asyncMessage = 'This message will change soon...';
    this.doSomethingAsynchronous(() => {
      this.asyncMessage = 'The message has changed asynchronously. It has been changed with a callback.'
    });
    this.doOtherThingAsynchronous()
      .then(() => {
        this.asyncMessage = 'The message has changed asynchronously. It has been changed with a promise.'
      })
      .catch(() => {
        this.asyncMessage = 'In the promise occurred an error.'
      })
  }
}
