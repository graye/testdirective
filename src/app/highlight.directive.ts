import { Directive, ElementRef, Renderer, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  @Input('highlight')
  color: string;

  currentColor: string = '#face00';

  constructor(private elementRef: ElementRef, private renderer: Renderer) {
  }

  highlight(color: string) {
    this.renderer.setElementStyle(this.elementRef.nativeElement, 'backgroundColor', color);
  }

  @HostListener('mouseenter') onmouseenter() {
    this.highlight(this.color || this.currentColor);
  }

  @HostListener('mouseleave') onmouseleave() {
    this.highlight(null);
  }
}
