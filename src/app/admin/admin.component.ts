import { Component, OnInit } from '@angular/core';
import { Ambulance } from '../ambulance';
import { Bed } from '../bed';
import { Contactus } from '../contactus';
import { Feedback } from '../feedback';
import { User } from '../user';
import { UserService } from '../user.service';
import { Vaccine } from '../vaccine';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  operation:String="";

  user:User[]=[];
  vaccine:Vaccine[]=[];
  bed:Bed[]=[];
  ambulance:Ambulance[]=[];
  feedback:Feedback[]=[];
  contactus:Contactus[]=[];
  

  constructor(private service:UserService) {

    this.getUser();
    this.getVaccine();
    this.getBed();
    this.getAmbulance();
    this.getFeedback();
    this.getContactus();
    
   }

  ngOnInit(): void {
  }

  private getUser()
  {
    return this.service.getAllUser().subscribe(data=>{
      this.user=data;
    },error=>{
      console.log(error);
    })
  }

  private getVaccine()
  {
    return this.service.getAllVaccine().subscribe(data=>{
      this.vaccine=data;
    },error=>{
      console.log(error);
    })
  }

  private getBed()
  {
    return this.service.getAllBed().subscribe(data=>{
      this.bed=data;
    },error=>{
      console.log(error);
    })
  }

  private getAmbulance()
  {
    return this.service.getAllAmbulance().subscribe(data=>{
      this.ambulance=data;
    },error=>{
      console.log(error);
    })
  }

  private getFeedback()
  {
    return this.service.getAllFeedback().subscribe(data=>{
      this.feedback=data;
    },error=>{
      console.log(error);
    })
  }

  private getContactus()
  {
    return this.service.getAllContactus().subscribe(data=>{
      this.contactus=data;
    },error=>{
      console.log(error);
    })
  }
 

}
