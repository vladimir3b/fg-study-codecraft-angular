import { 
  Component, 
  OnInit,
  ViewEncapsulation,
  Input
 } from '@angular/core';

@Component({
  selector: 'fg-app-study01',
  templateUrl: './study01.component.html',
  styleUrls: ['./study01.component.scss']
})
export class Study01Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() zIndex: number;

  onCloseModal() {
  }

}
