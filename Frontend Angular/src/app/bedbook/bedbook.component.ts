import { Component, OnInit } from '@angular/core';
import { Bed } from '../bed';
import { UserService } from '../user.service';

@Component({
  selector: 'app-bedbook',
  templateUrl: './bedbook.component.html',
  styleUrls: ['./bedbook.component.css']
})
export class BedbookComponent implements OnInit {

  token:any;
  user:any;


  bed: any;

  message:String | undefined;

  constructor(private service:UserService) { }

  ngOnInit(): void {
    this.bed=new Bed();

    this.token=this.service.getToken();

    this.user = JSON.parse(this.token);

    this.bed.name=this.user.fname+" "+this.user.lname;
    this.bed.pno=this.user.pno;
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
