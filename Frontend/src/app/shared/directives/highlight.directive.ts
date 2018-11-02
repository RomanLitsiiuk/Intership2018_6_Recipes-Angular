import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';
import {IHighlight} from './highlight.interface';

@Directive({
  selector: '[appHighlight]'
})

export class HighlightDirective implements OnInit {

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @Input() setHighlight: IHighlight;

  @HostBinding('style.background') elementBackground = 'linear-gradient(to top, #FFFFFF 36%, #84F6DB 100%)';

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.element.nativeElement, this.setHighlight.shadow, `${this.setHighlight.shadowX}
    ${this.setHighlight.shadowY} ${this.setHighlight.shadowBlur} 2px rgba(0,0,0,.2)`);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(this.element.nativeElement, 'box-shadow', 'none');
  }

  ngOnInit() {
  }
}
