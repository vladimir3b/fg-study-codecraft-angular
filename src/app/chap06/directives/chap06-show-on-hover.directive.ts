import { Directive, HostListener, ElementRef, Renderer, HostBinding } from '@angular/core';

@Directive({
  selector: '[fgAppChap06ShowOnHover]'
})
export class Chap06ShowOnHoverDirective {
  
  @HostBinding('class.alert-warning') private _mouseIsOver: boolean = false;

  @HostListener('mouseover') private _onMouseOver() {
    this._mouseIsOver = true;
    this._renderer.setElementStyle(
      this._element.nativeElement.querySelector('.mb-0'),
      'display',
      'block'
    );
    this._renderer.setElementClass(
      this._element.nativeElement,
      'border',
      true
    ); 
    this._renderer.setElementClass(
      this._element.nativeElement,
      'border-danger',
      true
    ); 
  } 

  @HostListener('mouseout') private _onMouseOut() {
    this._mouseIsOver = false;
    this._renderer.setElementStyle(
      this._element.nativeElement.querySelector('.mb-0'),
      'display',
      'none'
    );
    this
    this._renderer.setElementClass(
      this._element.nativeElement, 
      'border',
      false
    ); 
    this._renderer.setElementClass(
      this._element.nativeElement,
      'border-danger',
      false
    ); 
  }
  

  constructor(
    private _element: ElementRef,
    private _renderer: Renderer
  ) { }

}
