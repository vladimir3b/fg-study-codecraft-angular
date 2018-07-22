import { 
  Component, 
  OnInit, 
  Input, 
  Output, 
  EventEmitter, 
  OnChanges, 
  DoCheck,
  SimpleChanges,
  AfterViewChecked,
  AfterContentInit,
  AfterContentChecked
} from '@angular/core';

import { IPerson } from '../data.structures';

@Component({
  selector: 'fg-app-chap04-list-of-persons',
  templateUrl: './chap04-list-of-persons.component.html',
  styleUrls: ['./chap04-list-of-persons.component.scss']
})
export class Chap04ListOfPersonsComponent implements 
  OnInit,
  OnChanges,
  DoCheck,
  AfterViewChecked,
  AfterContentInit,
  AfterContentChecked {

  @Input() public persons: Array<IPerson> = [];
  @Output('onDeleteAllUsers') public usersDeletion: EventEmitter<number> =
    new EventEmitter();

  constructor() { 
    console.log('In the constructor');
    console.log('Angular created component Chap04ListOfPersonsComponent');
    console.log(`At this step 'persons' has ${this.persons.length} elements.`);
    console.log('----------------------------------------');
  }

  ngOnInit() {
    console.log('In ngOnInit');
    console.log('Component Chap04ListOfPersonsComponent has been initializes.');
    console.log(`Now 'persons' has ${this.persons.length} elements.`);
    console.log('----------------------------------------');
  }

  ngOnChanges(changes: SimpleChanges) {
    /** 
     *  If the input variable is changed in other place than the parent component
     *  this function won't trigger.
    */
    console.log('In ngOnChanges');
    console.log('Variable persons has changed.');
    console.log(`Now 'persons' has ${this.persons.length} elements.`);
    console.log('Changes');
    console.log('--------');
    for(let key in changes) {
      console.log(`${key} changed.
      Current: ${changes[key].currentValue}.
      Previous: ${changes[key].previousValue}`);
    }
    console.log('----------------------------------------');
  }

  ngDoCheck() {
    /**
     * This function will trigger at any change in the components.
     */
    console.log('In ngDoCheck');
    console.log('Variable persons has changed.');
    console.log(`Now 'persons' has ${this.persons.length} elements.`);
    console.log('----------------------------------------');
  }

  ngAfterViewChecked() {
    console.log('In ngAfterViewChecked');
    console.log('Variable persons has changed.');
    console.log(`Now 'persons' has ${this.persons.length} elements.`);
    console.log('----------------------------------------');
  }

  ngAfterViewInit () {
    console.log('In ngAfterViewInit');
    console.log('Component Chap04ListOfPersonsComponent\'s view has been initializes.');
    console.log('----------------------------------------');
  }

  ngAfterContentInit() {
    console.log('In ngAfterContentInit');
    console.log('Component Chap04ListOfPersonsComponent\'s content projectio\'s view has been initializes.');
    console.log('----------------------------------------');
  }

  ngAfterContentChecked() {
    console.log('In ngAfterContentChecked');
    console.log('Variable persons has changed.');
    console.log(`Now 'persons' has ${this.persons.length} elements.`);
    console.log('----------------------------------------');
  }

  public deleteUsers(): void {
    this.usersDeletion.emit(0);
  }
  public deleteOnePerson(index: number): void {
    this.persons.splice(index, 1);
  }
}
