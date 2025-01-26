import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAppHighlightTextColor]'
})
export class AppHighlightTextColorDirective implements OnInit {

  constructor(private elements:ElementRef , private renderer:Renderer2) { }
  ngOnInit(): void {
    (this.elements.nativeElement as HTMLElement).style.color="Blue";

    this.renderer.setStyle(this.elements.nativeElement , 'color' ,  "red")
  }



}
