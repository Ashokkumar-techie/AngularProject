import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import {  ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AppHighlightTextColorDirective } from '../app-highlight-text-color.directive';

@Component({
  selector: 'app-about',
  imports: [CommonModule , RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {

  


  
 user ={
  id:"",
  name:""
 }

constructor(private router:ActivatedRoute) {

}
  ngOnInit(): void {
    // this.user={
    //   id:this.router.snapshot.params["id1"],
    //   name:this.router.snapshot.params["name1"]
    // }

    console.log(this.router.snapshot.queryParams);

   this.router.params.subscribe((data)=>{
    this.user={
      id:data['id1'],
      name:data['name1']
    }

    
   })


   

   

    
  }






  

  // GoToContact(){
  //      this.router.navigateByUrl("/contact/1/saritha")

  // }
 



}
