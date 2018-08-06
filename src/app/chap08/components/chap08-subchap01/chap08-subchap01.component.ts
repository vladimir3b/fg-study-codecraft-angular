import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'fg-app-chap08-subchap01',
  templateUrl: './chap08-subchap01.component.html',
  styleUrls: ['./chap08-subchap01.component.scss']
})
export class Chap08Subchap01Component implements OnInit {

  public currentDate: Date = new Date();
  public person = {
    firstName: 'John',
    lastName: 'Smith',
    age: 45,
    sex: 'male',
    retired: false
  }
  public vector: Array<string>; 
  public min: number;
  public max: number;

  constructor() { 
    this.vector = [];
  }

  ngOnInit() {
    for (let i: number = 0; i <= 100; i++){
      this.vector.push(`person ${i + 1}`);
    }
    this.min = 1;
    this.max = this.vector.length;
  }

}
