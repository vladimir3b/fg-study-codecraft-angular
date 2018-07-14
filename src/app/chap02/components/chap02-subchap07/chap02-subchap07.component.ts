import { Component, OnInit } from '@angular/core';

interface IButton {
  state: 'person' | 'student';
  message: string;
}

@Component({
  selector: 'fg-app-chap02-subchap07',
  templateUrl: './chap02-subchap07.component.html',
  styleUrls: ['./chap02-subchap07.component.scss']
})
export class Chap02Subchap07Component implements OnInit {
  public message: string = 'Click the button bellow...';
  public button: IButton = {
    state: 'person',
    message: 'Instantiate a person'
  }
  constructor() {}

  ngOnInit() {}

  public studyClasses() {

    interface IHuman {
      // interfaces cannot have private or protected properties/methods
      firstName: string;
      lastName: string;
      age?: number;
    }

    class Person implements IHuman{
      constructor(
        public firstName: string, 
        public lastName: string) {}

      protected _name(): string {
        return `${this.firstName} ${this.lastName}`;
      }

      public message(): string {
        return `The person is called ${this._name()}.`
      }
    }
    
    class Student extends Person {
      
      constructor(
        public firstName: string, 
        public lastName: string, 
        public universityName: string) {
        super(firstName, lastName);
      }

      public message(): string { // this overwrites parent method
        return `Student ${super._name()} learns at ${this.universityName} University.`;
      }

    }

    let person1: Person = new Person('John', 'Smith');
    let student1: Student = new Student('Michael', 'Smith', 'Harvard');
    // console.log(student1._name()); // this won't work...
    switch (this.button.state) {
      case 'person':
        this.message = person1.message();
        this.button = {
          state: 'student',
          message: 'Instantiate a student'
        }
        break;
      case 'student': 
        this.message = student1.message();
        this.button = {
          state: 'person',
          message: 'Instantiate a person'
        }
        break;
      default: 
        console.log('This is crazy...');
    }
    
  }
}