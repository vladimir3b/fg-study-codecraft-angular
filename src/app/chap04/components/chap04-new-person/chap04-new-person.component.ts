import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IPerson } from '../data.structures';

@Component({
  selector: 'fg-app-chap04-new-person',
  templateUrl: './chap04-new-person.component.html',
  styleUrls: ['./chap04-new-person.component.scss']
})
export class Chap04NewPersonComponent implements OnInit {

  @Output() public newPersonCreated: EventEmitter<IPerson> =
  new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
