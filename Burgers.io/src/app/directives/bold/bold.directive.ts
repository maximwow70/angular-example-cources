import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBold]',
})
export class BoldDirective {
  constructor(private elementRef: ElementRef) {
    (this.elementRef.nativeElement as HTMLElement).style.fontWeight = 'bold';
  }
}
