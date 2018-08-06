import { Component, OnInit } from '@angular/core';

import { myMath } from '../../../others/libraries/typescript/math';

@Component({
  selector: 'fg-app-chap08-subchap02',
  templateUrl: './chap08-subchap02.component.html',
  styleUrls: ['./chap08-subchap02.component.scss']
})
export class Chap08Subchap02Component implements OnInit {
  public message1: string = 'Wait a litte...';
  public message2: string = 'Wait a litte...';
  public promise: Promise<number>;
  
  constructor() {
    this.promise = this.createPromise();
  }

  ngOnInit() {
    this.createPromise()
      .then((age: number) => this.message1 = `John is ${age} years old now.`)
      .catch((error: Error) => console.error(error.message));      
  }

  public createPromise(): Promise<number> {
    return new Promise<number>((resolve, reject) => {
      let hasAnError: boolean = myMath.randomInteger(5, 750) % myMath.randomInteger(2, 7) === 0;     
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

}
