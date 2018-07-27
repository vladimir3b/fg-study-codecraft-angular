import { 
  Directive, 
  ElementRef, 
  Renderer,
  Input,
  OnChanges
} from '@angular/core';

import { IBorder } from '../components/data.structures';

@Directive({
  selector: '[fgAppChap06ChangeOnHover]'
})
export class Chap06ChangeOnHoverDirective implements OnChanges {
  @Input('fgAppChap06ChangeOnHover') border: IBorder;

  constructor(
    private _element: ElementRef,
    private _renderer: Renderer
  ) { }

  public ngOnChanges(): void {
    this._renderer.setElementStyle(
      this._element.nativeElement,
      'border-color',
      `${ this.border.color }`
    );
    this._renderer.setElementStyle(
      this._element.nativeElement,
      'border-width',
      `${ this.border.thick }px`
    );
    this._renderer.setElementStyle(
      this._element.nativeElement,
      'border-radius',
      `${ this.border.radius }px`
    );
    // console.log (this.border.color, this.border.radius);
  }

}
