import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fg-app-study11',
  templateUrl: './study11.component.html',
  styleUrls: ['./study11.component.scss']
})
export class Study11Component implements OnInit {

  public objectValueParent = { value: 'John is singing a song.' };
  public nonObjectValueParent = 'Ana is drinking bear.';

  constructor() { }

  ngOnInit() {
  }

}
