import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRedHighlightTextColor]'
})
export class RedHighlightTextColorDirective implements OnInit {

  constructor(private elements:ElementRef , private renderer:Renderer2){}
  ngOnInit(): void {
    this.renderer.setStyle(this.elements.nativeElement,'color','brown');  
  }
  @HostListener('mouseenter') onmouseenter (event:Event){

    this.renderer.setStyle(this.elements.nativeElement,'font-family' , 'times new roman' );
    this.renderer.setStyle(this.elements.nativeElement , 'color' , 'red');
      
  }

  @HostListener('mouseleave') onmouseleave (event:Event){
    this.renderer.setStyle(this.elements.nativeElement , 'font-family' , 'verdana');
    this.renderer.setStyle(this.elements.nativeElement , 'color' , 'green');
  }

  

 
}
