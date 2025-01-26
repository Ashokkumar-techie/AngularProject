import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { AppHighlightTextColorDirective } from '../app-highlight-text-color.directive';

@Component({
  selector: 'app-appdirectives',
  imports: [],
  templateUrl: './appdirectives.component.html',
  styleUrl: './appdirectives.component.css'
})
export class AppdirectivesComponent implements OnInit{

constructor(private elements:ElementRef , private renderer:Renderer2){}

  ngOnInit(): void {
    (this.elements.nativeElement as HTMLElement).style.color="red";
  }

}
