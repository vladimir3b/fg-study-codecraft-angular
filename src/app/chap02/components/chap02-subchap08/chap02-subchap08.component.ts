import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fg-app-chap02-subchap08',
  templateUrl: './chap02-subchap08.component.html',
  styleUrls: ['./chap02-subchap08.component.scss']
})
export class Chap02Subchap08Component implements OnInit {

  public message: string = '';

  constructor() {}

  ngOnInit() {
    this.studyDecorators();
  }



  public studyDecorators() {
    
    type gender = 'male' | 'female';

    interface IConfig {
      sex: gender;
      age: number;
    }

    function moreStuff<T extends {new(...args:any[]):{}}>(constructor: T) {
      // see https://stackoverflow.com/questions/33224047/how-to-specify-any-newable-type-in-typescript
      // You can use { new(...args: any[]): any; } to allow any object with a constructor with any arguments.
      return class extends constructor {    
        private _age: number = 45;
        public showDetails = () => `This guy has ${this._age} years old.`;
      }
    }

    function moreStuffWithParameters(config: IConfig){
      return function <T extends {new(...args:any[]):{}}>(constructor: T) {        
        return class extends constructor {    
          private _age: number = config.age;
          private _sex: gender = config.sex;
          public showDetails = () => `This guy is ${this._sex} and it has ${this._age} years old.`;
        }
      }
    }

    
    @moreStuffWithParameters({
      sex: 'male',
      age: 25
    })   
    @moreStuff // this will be applied first, so showDetails will be overwritten by moreStuffWithParameters
    class Person {
      constructor(
        public firstName: string, 
        public lastName: string) {}

      protected _name(): string {
        return `${this.firstName} ${this.lastName}`;
      }

      public message(): string {
        return `The person is called ${this._name()}.`;
      }
    }

    let person: Person = new Person('John', 'Smith');
    this.message += person.message()+' ';
    this.message += (<any>person).showDetails();

  }
}
