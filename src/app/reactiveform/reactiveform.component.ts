import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-reactiveform',
  imports: [CommonModule,FormsModule,ReactiveFormsModule,JsonPipe],
  templateUrl: './reactiveform.component.html',
  styleUrl: './reactiveform.component.css'
})
export class ReactiveformComponent {

  IndianStates = [
    {id:1,name:'Telangana'},
    {id:2,name:'Andhra'},
    {id:3,name:'Telangana'},
    {id:4,name:'Maharastra'},
    {id:5,name:'Karnataka'},
  ]

  myclass = false;
  myfirst="first";
  mysecond="second";

  myclassarr = ["first","second"]

  mystyle = 'Green';

  myAllstyle = {
    'color':'hotpink',
    "font-family":'Time Roman',
    'background-color':'grey'
  }

}
