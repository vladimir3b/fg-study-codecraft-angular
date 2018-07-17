import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fg-app-chap02-subchap04',
  templateUrl: './chap02-subchap04.component.html',
  styleUrls: ['./chap02-subchap04.component.scss']
})
export class Chap02Subchap04Component implements OnInit {
  public message: string = '';

  constructor() {}

  ngOnInit() {
    this.studyForTo();
  }

  public studyForTo(): void {
    let a: Array<number> = [-4, 65, 75, 4.25, -3.1415, 87556, -841];

    let myObject = {
      name: 'box',
      color: 'blue',
      mass: '15 kilos',
      price: '$65.2'
    };

    for (let i: number = 0; i <= a.length - 1; i++) {
      this.message += `a[${i}] = ${a[i]} `;
    }

    a.forEach(
      (value: number, index: number): void => {
      this.message += `a[${index}] = ${value} `;
      });

    for (let prop in myObject) {
      this.message += `${prop} `;
    }

    for (let index in a) {
      this.message += `${0 + index} `; // in this case index is a string
    }

    for (let value of a) {
      this.message += `${value} `;
    }

    // for (let value of myObject) {
    //   console.log(value); // this doesn't work
    // }
  }
}
