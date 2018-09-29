import { Component, OnInit, Input } from '@angular/core';

type ControllerType = 'inputController' | 'textareaController';

@Component({
  selector: 'fg-app-full-name-changer',
  templateUrl: './full-name-changer.component.html',
  styleUrls: ['./full-name-changer.component.scss']
})
export class FullNameChangerComponent implements OnInit {

  @Input() public controller: ControllerType = "inputController";

  constructor() { }

  ngOnInit() {
  }
  public onChangeController(value: ControllerType) {
    this.controller = value;
  }
}
