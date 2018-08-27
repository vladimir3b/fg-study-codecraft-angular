import { Component, OnInit } from '@angular/core';

import { MyService2 } from './../../services/myService2.service';
import { MyService1 } from './../../services/myService1.service';
import { MyService3 } from '../../services/myService3.service';

@Component({
  selector: 'fg-app-comp01',
  templateUrl: './comp01.component.html',
  styleUrls: ['./comp01.component.scss'],
  providers: [ MyService2 ],
  viewProviders: [MyService3]
})
export class Comp01Component implements OnInit {

  constructor(
    public myService1: MyService1,
    public myService2: MyService2,
    public myService3: MyService3,
  ) { }

  ngOnInit() {
  }

}
