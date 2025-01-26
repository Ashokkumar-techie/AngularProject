import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AppHighlightTextColorDirective } from '../app-highlight-text-color.directive';
import { RedHighlightTextColorDirective } from '../red-highlight-text-color.directive';

@Component({
  selector: 'app-home',
  imports: [CommonModule,AppHighlightTextColorDirective,RedHighlightTextColorDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  statement = true;

  test = false;

  demo = true;

  player = "Rohit";

  product={
    color:"Green",
  

  }

  sports= [
    {id:1,name:"Dhoni"},
    {id:2,name:"Virat"},
    {id:3,name:"Yuvi"}
  ]

  carlist = ['BMW', 'Fortuner', 'Toyota' , 'Tesla'];

  num1 = 10;
  num2 = 15;

  operations="*";

}
