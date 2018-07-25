import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fg-app-chap05-subchap04',
  templateUrl: './chap05-subchap04.component.html',
  styleUrls: ['./chap05-subchap04.component.scss']
})
export class Chap05Subchap04Component implements OnInit {
  
  public message: string= 'This is a short message.';
  public state: boolean = false;
  public btnText: string = 'show';
  public names: Array<string> = [
    'Jones',
    'James',
    'Cooper',
    'Anton',
    'Chris',
    'Lennon',
    'Bruce',
    'Adolf'
  ];
  constructor() { }

  ngOnInit() {
  }

}
