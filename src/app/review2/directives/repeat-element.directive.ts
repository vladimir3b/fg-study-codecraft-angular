import { 
  Directive, 
  Input, 
  TemplateRef, 
  ViewContainerRef 
} from '@angular/core';

@Directive({
  selector: '[fgAppRepeatElement]'
})
export class RepeatElementDirective {

  @Input('fgAppRepeatElement') set numberOfTimes(value: number) {
    for(let i: number = 1; i <= value; i++) {
      this._viewContainerRef.createEmbeddedView(this._templateRef);
    }
  }

  constructor(
    private _templateRef: TemplateRef<any>,
    private _viewContainerRef: ViewContainerRef
  ) { }

}
