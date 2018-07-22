import { Component, OnInit } from '@angular/core';

import { IPerson } from '../data.structures';

@Component({
  selector: 'fg-app-chap04-subchap04',
  templateUrl: './chap04-subchap04.component.html',
  styleUrls: ['./chap04-subchap04.component.scss']
})
export class Chap04Subchap04Component implements OnInit {
  public listOfPersons: Array<IPerson>;

  constructor() { 
    this.listOfPersons = [
      {
        firstName: 'John',
        lastName: 'Smith',
        sex: 'male',
        age: 45
      },
      {
        firstName: 'Jane',
        lastName: 'Smith',
        sex: 'female',
        age: 38
      },
      {
        firstName: 'Michael',
        lastName: 'Smith',
        sex: 'male',
        age: 17
      },
    ]
  }

  ngOnInit() {
  }

  public addNewPerson(person: IPerson) {
    this.listOfPersons.unshift(person);
  }

  public deleteAllUsers(confirm: number) {
    if (!confirm) {
      this.listOfPersons = [];
    }
  }
}
