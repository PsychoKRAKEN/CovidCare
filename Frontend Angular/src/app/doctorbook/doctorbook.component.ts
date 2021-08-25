import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctorbook',
  templateUrl: './doctorbook.component.html',
  styleUrls: ['./doctorbook.component.css']
})
export class DoctorbookComponent implements OnInit {

  city:String="";

  constructor() { }


  ngOnInit(): void {
  }

  onClick()
  {
    window.location.href="/Details";
  }



}
