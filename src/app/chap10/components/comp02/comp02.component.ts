import { Component, OnInit } from '@angular/core';

import { MyService1 } from '../../services/myService1.service';
import { MyService2 } from '../../services/myService2.service';
import { MyService3 } from '../../services/myService3.service';

@Component({
  selector: 'fg-app-comp02',
  templateUrl: './comp02.component.html',
  styleUrls: ['./comp02.component.scss']
})
export class Comp02Component implements OnInit {

  constructor(
    private myService1: MyService1,
    private myService2: MyService2,
    private myService3: MyService3,
  ) { }


  ngOnInit() {
  }

}
