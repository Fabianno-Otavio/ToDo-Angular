import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[dChecked]'
})
export class CheckedDirective {

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {
    // this.elementRef.nativeElement.style.textDecoration = 'underline';
    this.renderer.setStyle(this.elementRef.nativeElement, 'textDecoration', 'underline');
  }
}
