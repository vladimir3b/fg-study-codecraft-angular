import { myMath } from './../../../_others/libraries/typescript/math';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'fg-app-review2-subchap03',
  templateUrl: './review2-subchap03.component.html',
  styleUrls: ['./review2-subchap03.component.scss']
})
export class Review2Subchap03Component implements OnInit {

  public numberOfRows: number;
  public numberOfCols: number;

  constructor() {
    this.numberOfRows = this.randomNumber(4, 6);
    this.numberOfCols = this.randomNumber(2, 4);
   }  
 
  ngOnInit() { }

  public randomNumber(min: number, max: number): number {
    return myMath.randomInteger(min, max);
  }

  public randomColorClass(): string {
    let colorClasses: Array<string> = [
      'bg-primary', 
      'bg-secondary', 
      'bg-success',
      'bg-danger',
      'bg-warning',
      'bg-info',
      'bg-light',
      'bg-dark'
    ];
    return colorClasses[this.randomNumber(0, colorClasses.length) -1];
  }

}
