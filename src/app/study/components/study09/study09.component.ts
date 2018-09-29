import { Component, OnInit } from '@angular/core';

export interface IFullName {
  firstName: string;
  middleName: string;
  lastName: string;
}

@Component({
  selector: 'fg-app-study09',
  templateUrl: './study09.component.html',
  styleUrls: ['./study09.component.scss']
})
export class Study09Component implements OnInit {

  name: IFullName = { firstName: '', middleName: '', lastName: ''};

  constructor() { }

  ngOnInit() {
  }

}
