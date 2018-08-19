import { Component, OnInit } from '@angular/core';
import { timeInterval } from '../../../../../node_modules/rxjs/operators';

type Constructor = { new (...args: Array<any>): {} };
interface IDataTime  {
  auto: boolean;
  time?: string;
  date?: string;
}

@Component({
  selector: 'fg-app-review1-subchap01',
  templateUrl: './review1-subchap01.component.html',
  styleUrls: ['./review1-subchap01.component.scss']
})
export class Review1Subchap01Component implements OnInit {

  public message: string = '';

  constructor() { }

  ngOnInit() {
    this.reviewDecorators();
  }

  public reviewDecorators():void {
    
    let message: string = '';



    // these functions are decorators:

    function simpleDecorator(target: Function) {
      message += 'This is the easiest decorator possible...';
    }

    function gun<T extends Constructor>(target: T): T {//create decorator gun
      return class extends target {
        type: string;
        color: string;
        caliber: string = '9mm';
        log (message: string): void {
          console.log(`A new ${this.type} with color ${this.color} and caliber ${this.caliber} has been added. ${message}`)
        }
      }
    }// end of decorator @gun

    function color<T extends Constructor>(target: T): void {
      target.prototype.otherColor = (): string => 'The sun has color yellow :D...'; 
    }

    function timeOfInstantiation(dataTime: IDataTime): Function {
      
      let now: Date = new Date();
      let time: string = (dataTime.auto || !dataTime.time) ? 
        `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}` : dataTime.time;
      let date: string = (dataTime.auto || !dataTime.date) ? 
        `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}` : dataTime.date;    

      return function <T extends Constructor>(target: T): T {
        return class extends target {
          public time: string = time;
          public date: string = date;
          public logDate = () => console.log(`This was instantiated at ${this.time} on ${this.date}.`)
        }
      }

    }


    // here we use those decorators:

    @simpleDecorator
    @gun
    @color
    @timeOfInstantiation({
      auto: false,
      time: '12:25:37'
    })
    class MyClass {
      constructor (public type: string, public color: string){}
    }

    @timeOfInstantiation({
      auto: true
    })
    class Person {
      constructor(
        public firstName: string,
        public lastName: string,
        public sex: boolean,
        public age: number
      ) {}
    }

    let myObject: MyClass = new MyClass('gun', 'pink');

    message += ` I have a ${myObject.type} with color ${myObject.color} and  caliber ${(<any>myObject).caliber}.`;
    (<any>myObject).log('We don\'t need no education, we have guns... a lot of guns...');
    message += ` ${(<any>myObject).otherColor()} `;
    (<any>myObject).logDate();

    let myMan: Person = new Person('John', 'Smith', false, 45);
    (<any>myMan).logDate();

    this.message = message;
  }
}
