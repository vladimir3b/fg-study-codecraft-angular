import { 
  Component, 
  OnInit, 
  ViewChildren, 
  QueryList, 
  AfterViewInit,
  ContentChildren,
  AfterContentInit
} from '@angular/core';

import { IPerson } from '../data.structures';
import { Chap04NewPersonComponent } from '../chap04-new-person/chap04-new-person.component';
import { Chap04ListOfPersonsComponent } from '../chap04-list-of-persons/chap04-list-of-persons.component';
import { Chap04ListOnePersonComponent } from '../chap04-list-one-person/chap04-list-one-person.component';

@Component({
  selector: 'fg-app-chap04-subchap04',
  templateUrl: './chap04-subchap04.component.html',
  styleUrls: ['./chap04-subchap04.component.scss']
})
export class Chap04Subchap04Component implements 
  OnInit,
  AfterViewInit,
  AfterContentInit {
  public listOfPersons: Array<IPerson>;

  @ViewChildren(Chap04NewPersonComponent)
    public newPersonFromView: QueryList<Chap04NewPersonComponent>;

  @ContentChildren(Chap04ListOnePersonComponent)
    public listOfPersonsFromContent: QueryList<Chap04ListOnePersonComponent>;
    
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

  ngAfterViewInit() {
    console.log('In ngAfterViewChecked from Chap04Subchap04Component');
    console.log('Variable persons has changed.');
    console.log(this.newPersonFromView.toArray());
    console.log('----------------------------------------');
  }

  ngAfterContentInit() {
    console.log('In ngAfterContentInit from Chap04Subchap04Component');
    console.log('Variable persons has changed.');
    console.log(this.listOfPersonsFromContent.toArray());
    this.listOfPersonsFromContent.toArray().forEach((element: any) => {
      console.log(element);
    })
    console.log('----------------------------------------');
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
