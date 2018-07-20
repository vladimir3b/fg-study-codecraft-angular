import {
  Component,
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  Input,
  SimpleChanges
} from '@angular/core';

interface IHuman {
  name: string;
  age: number;
}

@Component({
  selector: 'fg-app-chap04-test02',
  templateUrl: './chap04-test02.component.html',
  styleUrls: ['./chap04-test02.component.scss']
})
export class Chap04Test02Component implements 
  OnInit,
  OnChanges,
  DoCheck,
  // AfterContentInit,
  // AfterContentChecked,
  // AfterViewInit,
  // AfterViewChecked,
  OnDestroy 
  {
  
  @Input('human') public data: IHuman = {
    name: 'nothing',
    age: 0
  };
  
  public message: string = '';
  
  constructor() { 
    this.message += `This is from constructor. 
    His name is '${this.data.name}' and he is 
    ${this.data.age} years old. =>`;
  }

  ngOnInit() {
    this.message += `This is from ngOnInit. 
    His name is '${this.data.name}' and he is 
    ${this.data.age} years old. =>`;
  }

  ngOnChanges(changes: SimpleChanges) {
    for (let key in changes) {
      console.log(changes[key]);
    }
    console.log('------------------------------------');
    // this.message += `This is from ngOnChanges. 
    // His name is '${this.data.name}' and he is 
    // ${this.data.age} years old. =>`; 
  }

  ngDoCheck() {
    console.log('Something has been changed...');
  }

  ngOnDestroy() {
    console.log('Adios! It is no more...');
  }
}
