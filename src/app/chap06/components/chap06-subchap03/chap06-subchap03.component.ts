import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fg-app-chap06-subchap03',
  templateUrl: './chap06-subchap03.component.html',
  styleUrls: ['./chap06-subchap03.component.scss']
})
export class Chap06Subchap03Component implements OnInit {

  public color: string = "#e9967a";
  public thick: number = 5;
  public radius: number = 10;

  constructor() { }

  ngOnInit() {
  }

}
