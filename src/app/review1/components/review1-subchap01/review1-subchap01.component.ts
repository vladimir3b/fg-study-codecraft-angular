import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fg-app-review1-subchap01',
  templateUrl: './review1-subchap01.component.html',
  styleUrls: ['./review1-subchap01.component.scss']
})
export class Review1Subchap01Component implements OnInit {

  public message: string = '';

  constructor() { }

  ngOnInit() {
    this.reviewDecorators();
  }

  public reviewDecorators():void {
    
    function logger(target) {
      target.prototype.log = (message: string) => {
        console.log(message);
      }
    }

    @logger
    class Test01 {      
      private _prop1: string = 'I try to learn decorators.';
      public prop1(): string {
        return this._prop1;
      }
    }

    let test01: Test01 = new Test01();

    (<any>test01).log(test01.prop1());
       
  }
}
