import { JsonPipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  @Input() parentData:any="";

  @Output() childData = new EventEmitter();

  myChildEvent(){
    this.childData.emit("Jesus Save Us Without Ask Anything")

  }


  

}
