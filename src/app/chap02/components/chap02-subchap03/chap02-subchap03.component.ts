import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fg-app-chap02-subchap03',
  templateUrl: './chap02-subchap03.component.html',
  styleUrls: ['./chap02-subchap03.component.scss']
})
export class Chap02Subchap03Component implements OnInit {
  public message: string = '';

  constructor() {}

  ngOnInit() {
    this.studyDestructuring();
  }

  public studyDestructuring() {
    let person = {
      firstName: 'Peter',
      lastName: 'Brown',
      age: 45,
      hairColor: 'brown'
    };

    let { firstName: first, lastName: last } = person; //destructuring objects

    this.message += `His name is ${first} ${last}. `;

    let { firstName, lastName, age } = person; // this is a more common use, we use this with import statements: import { Component } from '...';

    let v: Array<number> = [50, 60, 70, 80, 90];

    let [a, b, , c] = v; //destructuring arrays

    this.message += `a = ${a}, b = ${b}, c = ${c}`;

    let add: (any) => any = function({ b = 5 }) {
      return 10 + b;
    };

    this.message += `, add({b: 75, c: 65}) = ${add({ b: 75, c: 65 })}`;
  }
}
