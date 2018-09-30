import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fg-app-child-component-with-object-as-property',
  templateUrl: './child-component-with-object-as-property.component.html',
  styleUrls: ['./child-component-with-object-as-property.component.scss']
})
export class ChildComponentWithObjectAsPropertyComponent implements OnInit {

  @Input() nonObjectValue: string;
  @Input() objectValue: {
    value: string
  }

  constructor() { }

  ngOnInit() {
  }

}
