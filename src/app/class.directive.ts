import { Directive, ElementRef, Input } from '@angular/core';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {

  constructor(private element: ElementRef) { 
  }
  // Intercept anytime angular tries to set a property on our directive
  // As soon as we intercept that, we are gonna take the value that angular trying to set
  // that property to and we are going to use it to actually update something else.
  @Input() set appClass(color: string) {
    this.element.nativeElement.style.backgroundColor = color;
  }

}
