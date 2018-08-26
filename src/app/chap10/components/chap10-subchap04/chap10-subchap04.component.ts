import { Component, OnInit } from '@angular/core';
import { MyService } from '../../services/myService.service';
import { LogService } from '../../services/logService.service';

@Component({
  selector: 'fg-app-chap10-subchap04',
  templateUrl: './chap10-subchap04.component.html',
  styleUrls: ['./chap10-subchap04.component.scss'],
  providers : [ 
    MyService, 
    LogService
  ]
})
export class Chap10Subchap04Component implements OnInit {

  constructor(
    private _myService: MyService
  ) { }

  ngOnInit() {
    this.servicesInAngular();
  }

  public servicesInAngular() {
    this._myService.text = 'Dragnea is not here.';
    this._myService.log();
    this._myService.error = false;
    this._myService.showMessage();
  }

}
