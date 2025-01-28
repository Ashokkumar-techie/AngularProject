import { Component, OnInit } from '@angular/core';
import { ChildComponent } from "../child/child.component";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent implements OnInit {
constructor(private router:ActivatedRoute){}
  demo = {
    id:"",
    name:""
  }


  ngOnInit(): void {

    this.router.params.subscribe((data)=>{
      this.demo={
        id:data['id'],
        name:data['name']
      }
    })
    
  }

  cars = ['BMW' , 'Fortuner' , 'Audi' , 'Tesla'];

  student = {
    id:1,
    name:'Vasthi',
    age:23,
    role:'Software Developer'
  }

  message="";




  

  

}
