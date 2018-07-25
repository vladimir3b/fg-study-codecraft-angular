import { 
  Directive, 
  ElementRef, 
  OnInit, 
  Renderer 
} from '@angular/core';

@Directive({
  selector: '[fgAppChap06Test1]'
})
export class Chap06Test1Directive implements OnInit{

  constructor(
    private _element: ElementRef,
    private _renderer: Renderer
    ) {
    console.log('This is the first.');
  }

  ngOnInit() {
    console.log('This is the second.');
    this._renderer.setElementStyle(
      this._element.nativeElement,
      'backgroundColor', 
      'pink'
    );
  }

}
