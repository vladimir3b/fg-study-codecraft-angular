import { 
  Component, 
  OnInit, 
  ViewEncapsulation 
} from '@angular/core';

@Component({
  selector: 'fg-app-chap04-component-test1',
  templateUrl: './chap04-component-test1.component.html',
  styleUrls: ['./chap04-component-test1.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class Chap04ComponentTest1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
