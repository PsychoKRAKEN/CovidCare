import { Component, OnInit } from '@angular/core';
import { Bed } from '../bed';
import { UserService } from '../user.service';

@Component({
  selector: 'app-bedbook',
  templateUrl: './bedbook.component.html',
  styleUrls: ['./bedbook.component.css']
})
export class BedbookComponent implements OnInit {

  bed: any;

  message:String | undefined;

  constructor(private service:UserService) { }

  ngOnInit(): void {
    this.bed=new Bed();
  }

  createBed(){
    this.service.createBed(this.bed).subscribe(data=>{
      this.message=data;
      console.log(this.bed)
      this.bed=new Bed();
      alert("Bed Registration done successfully .");
    },error=>{
      console.log(this.bed)
      alert("Wrong Field Paths.");
      console.log(error);
    });
  }
  
 
}
