import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'fg-app-chap04-list-one-person',
  templateUrl: './chap04-list-one-person.component.html',
  styleUrls: ['./chap04-list-one-person.component.scss']
})
export class Chap04ListOnePersonComponent implements OnInit {

  @Output('onDeleteOnePerson') public deletePerson: EventEmitter<boolean> = 
    new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  deleteThis() {
    this.deletePerson.emit(true);    
  }

}
