import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fg-app-chap06-subchap03',
  templateUrl: './chap06-subchap03.component.html',
  styleUrls: ['./chap06-subchap03.component.scss']
})
export class Chap06Subchap03Component implements OnInit {

  public borderColor: string = "#e9967a";
  public borderThick: number = 1;
  public borderRadius: number = 0;

  constructor() { }

  ngOnInit() {
  }

}
