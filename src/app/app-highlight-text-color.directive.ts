import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAppHighlightTextColor]'
})
export class AppHighlightTextColorDirective implements OnInit {

  constructor(private elements:ElementRef , private renderer:Renderer2) { }
  ngOnInit(): void {
    (this.elements.nativeElement as HTMLElement).style.color="Blue";

   
  }

  @HostListener('mouseenter') onmouseenter (event:Event){
    this.renderer.setStyle(this.elements.nativeElement , 'color' , 'red');
    this.renderer.setStyle(this.elements.nativeElement, 'font-size' , '30px');
  }

  @HostListener('mouseleave') onmouseleave (event:Event){
    this.renderer.setStyle(this.elements.nativeElement, 'color' , 'green');
    this.renderer.setStyle(this.elements.nativeElement, 'font-size' , '40px');
  }



}
