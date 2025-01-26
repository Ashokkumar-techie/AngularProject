import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {

  user = {
    id:"",
    name:""
  }

  constructor(private router:ActivatedRoute){

  }
  ngOnInit(): void {
    this.user={
      id:this.router.snapshot.params["id"],
      name:this.router.snapshot.params["name"]
    }
    
  }

  

 
}
