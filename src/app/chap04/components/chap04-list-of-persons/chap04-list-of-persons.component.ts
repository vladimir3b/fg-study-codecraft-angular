import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IPerson } from '../data.structures';

@Component({
  selector: 'fg-app-chap04-list-of-persons',
  templateUrl: './chap04-list-of-persons.component.html',
  styleUrls: ['./chap04-list-of-persons.component.scss']
})
export class Chap04ListOfPersonsComponent implements OnInit {

  @Input() public persons: Array<IPerson>;
  @Output('onDeleteAllUsers') public usersDeletion: EventEmitter<boolean> =
    new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public deleteAllUsers(): void {
    this.usersDeletion.emit(true);
  }

}
