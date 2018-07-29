import {
  Directive,
  ElementRef,
  Renderer,
  Renderer2,
  HostListener,
  Input
} from '@angular/core';

@Directive({
  selector: '[fgAppReview2DeleteElement]'
})
export class Review2DeleteElementDirective {
  @Input('fgAppReview2DeleteElement') emphasis: boolean;

  @HostListener('mouseover') private _onMouseOver() {
    // creating close button  
    if (!this._element.nativeElement.querySelector('[fgSpecialDeleteButton]')) {
      const deleteButton = this._renderer2.createElement('button');
      this._renderer.setElementClass(
        deleteButton, 
        'btn', 
        true
      );
      this._renderer.setElementClass(
        deleteButton, 
        'btn-danger', 
        true
      );
      this._renderer.setElementClass(
        deleteButton, 
        'btn-sm', 
        true
      );
      this._renderer.setElementStyle(
        deleteButton,
        'z-index',
        "0"
      );
      this._renderer.setElementAttribute(
        deleteButton,
        'fgSpecialDeleteButton',
        'true'
      );
      this._renderer2.appendChild(
        deleteButton,
        this._renderer2.createText('🗑️')
      );
      this._renderer.setElementStyle(      
        deleteButton,
        'display',
        'inline'
      );
      this._renderer2.listen(deleteButton, 'click', () => {
        this._renderer2.removeChild(
          this._element.nativeElement.parentNode,
          this._element.nativeElement
        );
      });
      this._renderer2.appendChild(
        this._element.nativeElement, 
        deleteButton
      );
    } else {
      const deleteButton = this._element.nativeElement.querySelector('[fgSpecialDeleteButton]');
      this._renderer.setElementStyle(      
        deleteButton,
        'display',
        'inline'
      );
    }
    // create border and padding for the element
    if (this.emphasis) {
      this._renderer.setElementClass(this._element.nativeElement, 'alert', true);
      this._renderer.setElementClass(
        this._element.nativeElement,
        'alert-danger',
        true
      );
    }
  }

  @HostListener('mouseout') private _onMouseOut() {
    let deleteButton = this._element.nativeElement.querySelector('[fgSpecialDeleteButton]');
    // I have no idea why this doesn't work.
    // this._renderer2.removeChild(
    //   this._element.nativeElement,
    //   deleteButton
    // );
    this._renderer.setElementStyle(      
      deleteButton,
      'display',
      'none'
    );
    // delete border and padding for the element
    if (this.emphasis) {
      this._renderer.setElementClass(this._element.nativeElement, 'alert', false);
      this._renderer.setElementClass(
        this._element.nativeElement,
        'alert-danger',
        false
      );
    }
  }
  constructor(
    private _element: ElementRef,
    private _renderer: Renderer,
    private _renderer2: Renderer2
  ) {}
}
