import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFirstdirect]'
})
export class FirstdirectDirective {

  constructor(Element: ElementRef) {
    console.log(Element);
    Element.nativeElement.innerText="Text is changed by changeText Directive. ";
 }

}
