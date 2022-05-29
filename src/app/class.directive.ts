import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {

  constructor(private element: ElementRef) { 
  }
  // Intercept anytime angular tries to set a property on our directive
  // As soon as we intercept that, we are gonna take the value that angular trying to set
  // that property to and we are going to use it to actually update something else.

  // Whenever we try to set appClass property, Input decorator is gonna redirect to backgroundColor method
  @Input('appClass') set classNames(classObj: any) {
    for(let key in classObj) {
      if(classObj[key]) {
        this.element.nativeElement.classList.add(key);
      } else {
        this.element.nativeElement.classList.remove(key);
      }
    }
  }

}
