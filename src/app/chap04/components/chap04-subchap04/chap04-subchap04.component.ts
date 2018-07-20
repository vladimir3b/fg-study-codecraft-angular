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
        age: 45
      },
      {
        firstName: 'Jane',
        lastName: 'Smith',
        age: 38
      },
      {
        firstName: 'Michael',
        lastName: 'Smith',
        age: 17
      },
    ]
  }

  ngOnInit() {
  }

  public addNewPerson(person: IPerson) {
    this.listOfPersons.unshift(person);
  }

  public deleteAllUsers(confirm: boolean) {
    if (confirm) {
      this.listOfPersons = [];
    }
  }
}
