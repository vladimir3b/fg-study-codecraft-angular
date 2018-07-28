import { Directive, ElementRef, Renderer, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[fgAppReview2CloseElement]'
})
export class Review2CloseElementDirective implements OnInit {

  constructor(
    private _element: ElementRef,
    private _renderer: Renderer,
    private _renderer2: Renderer2
  ) { }

  ngOnInit(): void {
    // creating close button
    const closeButton = this._renderer2.createElement('button');
    this._renderer.setElementClass(
      closeButton,
      'btn',
      true
    );
    this._renderer.setElementClass(
      closeButton,
      'btn-link',
      true
    );  
    this._renderer2.appendChild(
      closeButton,
      this._renderer2.createText('close me')
    );
    this._renderer2.listen(
      closeButton,
      'click',
      () => {
        this._renderer2.removeChild(
        this._element.nativeElement.parentNode, 
        this._element.nativeElement
      )
      }
    )
    this._renderer2.appendChild(
      this._element.nativeElement,
      closeButton
    );

    

    // create border and padding for the element
    this._renderer.setElementStyle(
      this._element.nativeElement,
      'border',
      'lightBlue solid 2px '
    );
    this._renderer.setElementStyle(
      this._element.nativeElement,
      'border-radius',
      '10px'
    );
    this._renderer.setElementStyle(
      this._element.nativeElement,
      'padding',
      '10px'
    );

  
  }

}
