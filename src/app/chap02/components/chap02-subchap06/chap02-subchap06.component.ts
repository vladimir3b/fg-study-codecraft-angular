import { Component, OnInit } from '@angular/core';

import { myMath } from '../../../others/libraries/typescript/math';

@Component({
  selector: 'fg-app-chap02-subchap06',
  templateUrl: './chap02-subchap06.component.html',
  styleUrls: ['./chap02-subchap06.component.scss']
})
export class Chap02Subchap06Component implements OnInit {
  public asyncMessage: string;
  private _promise: Promise<string> = Promise.resolve(
    'Everything worked fine and this is listed after the promise has completed...'
  ).then((value: string): string => {
    console.log(value.toLocaleUpperCase());
    return 'I love this'
  }).then((value: string): string => {
    console.log(value);
    return 'I am tired :(';
  });

  constructor() {}

  ngOnInit() {
    this.justDoIt();
  }

  public doSomethingAsynchronous(callback: Function) {
    setTimeout(callback, myMath.randomInteger(1500, 3500));
  }

  // promises
  public doOtherThingAsynchronous(): Promise<void> {
    return new Promise((resolve: Function, reject: Function) => {
      let hasError: boolean = myMath.randomInteger(1500, 3500) % 3 === 1;
      setTimeout(() => {
        if (hasError) {
          reject();
        } else {
          resolve();
        }
      }, myMath.randomInteger(1500, 3500));
    });
  }

  public doOtherThingAsynchronousWithParameters(): Promise<string> {
    return new Promise((resolve: Function, reject: Function) => {
      let hasError: boolean = myMath.randomInteger(1500, 3500) % 3 === 1;
      setTimeout(() => {
        if (hasError) {
          reject('There were some errors.');
        } else {
          resolve('Everything was fine...');
        }
      }, myMath.randomInteger(1500, 2000));
    });
  }

  public justDoIt() {
    this._promise.then((value: string) => {
      console.log(value);
    });

    this.asyncMessage = 'This message will change soon...';
    this.doSomethingAsynchronous(() => {
      this.asyncMessage =
        'The message has changed asynchronously. It has been changed with a callback.';
    });
    this.doOtherThingAsynchronous()
      .then(() => {
        this.asyncMessage =
          'The message has changed asynchronously. It has been changed with a promise.';
      })
      .catch(() => {
        this.asyncMessage = 'In the promise occurred an error.';
      }); // these two are equivalent
    this.doOtherThingAsynchronous().then(
      () => {
        this.asyncMessage =
          'The message has changed asynchronously. It has been changed with a promise.';
      },
      () => {
        this.asyncMessage = 'In the promise occurred an error.';
      }
    );
    this.doOtherThingAsynchronousWithParameters()
      .then((message: string) => {
        // The type here is the type of the promise
        console.log(message);
      })
      .catch((error: string) => {
        console.error(error);
      });
  }
}
