import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appFadeIn]'
})
export class FadeInDirective implements OnInit {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'opacity', '0');

    setTimeout(() => {
      this.fadeIn();
    }, 1000); 
  }

  private fadeIn() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'opacity', '1');
  }

}
