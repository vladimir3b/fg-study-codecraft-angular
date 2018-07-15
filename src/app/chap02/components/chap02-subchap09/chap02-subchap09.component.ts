import { Component, OnInit } from '@angular/core';

import greet, {
  maximum as max,
  minimum,
  square,
  cube
} from './modules';

@Component({
  selector: 'fg-app-chap02-subchap09',
  templateUrl: './chap02-subchap09.component.html',
  styleUrls: ['./chap02-subchap09.component.scss']
})
export class Chap02Subchap09Component implements OnInit {

  public message: string = '';

  constructor() { }

  ngOnInit() {
    this.studyModules();
  }

  public studyModules(): void {
    this.message += greet('John Smith');
    this.message += ` max(10, -5, 8, 0, 125, -999) = ${max(10, -5, 8, 0, 125, -999)};`;
    this.message += ` minimum(10, -5, 8, 0, 125, -999) = ${minimum(10, -5, 8, 0, 125, -999)};`;
    this.message += ` 5 ^ 2 = ${square(5)};`;
    this.message += ` 5 ^ 3 = ${cube(5)}`;

  }
}
