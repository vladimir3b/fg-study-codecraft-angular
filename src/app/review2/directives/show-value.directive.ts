import { 
  Directive, 
  ElementRef, 
  HostListener 
} from '@angular/core';

@Directive({
  selector: '[fgAppShowValue]'
})
export class ShowValueDirective {

  constructor(private _element: ElementRef) { }

  @HostListener('copy') private _onMouseOver() {
    if (this._element.nativeElement.value) {
      console.log(`${this._element.nativeElement.id}: ${this._element.nativeElement.value}`);
    } else {
      console.error(`${this._element.nativeElement.id}: There is nothing to show here...`);
    }
  }

}
