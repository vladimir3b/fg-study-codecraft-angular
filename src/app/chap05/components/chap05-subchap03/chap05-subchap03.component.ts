import { Component, OnInit } from '@angular/core';

import { gender } from '../data.structures';

@Component({
  selector: 'fg-app-chap05-subchap03',
  templateUrl: './chap05-subchap03.component.html',
  styleUrls: ['./chap05-subchap03.component.scss']
})
export class Chap05Subchap03Component implements OnInit {
  public name: string;
  public sex: gender = 'male';
  constructor() { }

  ngOnInit() {
  }
  public setOutput<T = string>(mess1: T, mess2: T, mess3: T): T {
    if (!this.name) {
      return mess1;
    } 
    if (this.sex === 'male') {
      return mess2
    } else {
      return mess3;
    }
  }

}
