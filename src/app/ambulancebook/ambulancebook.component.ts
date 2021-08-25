import { Component, OnInit } from '@angular/core';
import { Ambulance } from '../ambulance';
import { UserService } from '../user.service';

@Component({
  selector: 'app-ambulancebook',
  templateUrl: './ambulancebook.component.html',
  styleUrls: ['./ambulancebook.component.css']
})
export class AmbulancebookComponent implements OnInit {

  showMe1:boolean=false
  showMe2:boolean=false
  showMe3:boolean=false

  ambulance:any;

  message:String | undefined;

  constructor(private service:UserService) { }

  ngOnInit(): void {

    this.ambulance=new Ambulance();

  }


  toggleTag1()
{
 
  this.showMe1=!this.showMe1
 
}
toggleTag2()
{
 
  this.showMe2=!this.showMe2
 
}
toggleTag3()
{
 
  this.showMe3=!this.showMe3
 
}

onSubmit()
{

  this.service.createAmbulance(this.ambulance).subscribe(data=>{
    this.message=data;
    this.ambulance=new Ambulance();
    alert('Ambulance Booked Succesfully');
  },error=>{
    alert('Failed to Book Ambulance ')
    console.log(error);
  });
  
}

}
