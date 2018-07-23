import { Chap04Test03Component } from './../chap04-test03/chap04-test03.component';
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
  AfterContentChecked,
  ViewChild,
  ViewChildren,
  QueryList,
  ContentChild,
  AfterViewInit,
  ElementRef,
  ContentChildren
} from '@angular/core';

import { IPerson } from '../data.structures';
import { Chap04ListOnePersonComponent } from '../chap04-list-one-person/chap04-list-one-person.component';

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
  AfterViewInit,
  AfterContentInit,
  AfterContentChecked {

  @Input() public persons: Array<IPerson> = [];
  @Output('onDeleteAllUsers') public usersDeletion: EventEmitter<number> =
    new EventEmitter();
  @ViewChild(Chap04ListOnePersonComponent) listOnePersonViewChild: Chap04ListOnePersonComponent;
  @ViewChildren(Chap04ListOnePersonComponent) listOnePersonViewChildren: 
    QueryList<Chap04ListOnePersonComponent>;  

  @ContentChild('testChild1') contentProjected1: ElementRef;
  @ContentChildren(Chap04Test03Component) contentProjected2: 
    QueryList<Chap04Test03Component>

  constructor() { 
    console.log('In the constructor of Chap04ListOfPersonsComponent');
    console.log('Angular created component Chap04ListOfPersonsComponent');
    console.log(`At this step 'persons' has ${this.persons.length} elements.`);
    console.log('----------------------------------------');
  }

  ngOnInit() {
    console.log('In ngOnInit of Chap04ListOfPersonsComponent');
    console.log('Component Chap04ListOfPersonsComponent has been initializes.');
    console.log(`Now 'persons' has ${this.persons.length} elements.`);
    console.log('----------------------------------------');
  }

  ngOnChanges(changes: SimpleChanges) {
    /** 
     *  If the input variable is changed in other place than the parent component
     *  this function won't trigger.
    */
    console.log('In ngOnChanges of Chap04ListOfPersonsComponent');
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
    console.log('In ngDoCheck of Chap04ListOfPersonsComponent');
    console.log('Variable persons has changed.');
    console.log(`Now 'persons' has ${this.persons.length} elements.`);
    console.log('----------------------------------------');
  }

  ngAfterViewChecked() {
    console.log('In ngAfterViewChecked of Chap04ListOfPersonsComponent');
    console.log('Variable persons has changed.');
    console.log(`Now 'persons' has ${this.persons.length} elements.`);
    console.log('----------------------------------------');
  }

  ngAfterContentChecked() {
    console.log('In ngAfterContentChecked of Chap04ListOfPersonsComponent');
    console.log('Variable persons has changed.');
    console.log(`Now 'persons' has ${this.persons.length} elements.`);
    console.log('----------------------------------------');
  }

  ngAfterViewInit () {
    console.log('In ngAfterViewInit of Chap04ListOfPersonsComponent');
    console.log('Component Chap04ListOfPersonsComponent\'s view has been initialized.');
    console.log(this.listOnePersonViewChild);
    console.log(this.listOnePersonViewChildren.toArray());
    console.log('----------------------------------------');
  }

  ngAfterContentInit() {
    console.log('In ngAfterContentInit of Chap04ListOfPersonsComponent');
    console.log('Component Chap04ListOfPersonsComponent content project\'s view has been initialized.');
    console.log(this.contentProjected1);
    console.log(this.contentProjected2);
    console.log(this.contentProjected2.toArray());
    console.log('----------------------------------------');
  }



  public deleteUsers(): void {
    this.usersDeletion.emit(0);
  }
  public deleteOnePerson(index: number): void {
    this.persons.splice(index, 1);
  }
}
