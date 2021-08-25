import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Vaccine } from '../vaccine';

@Component({
  selector: 'app-slotbook',
  templateUrl: './slotbook.component.html',
  styleUrls: ['./slotbook.component.css']
})
export class SlotbookComponent implements OnInit {
  token:any;
  user:any;

  vaccine:any;
  message:String | undefined;

  constructor(private service:UserService) { }

  ngOnInit(): void {
    this.vaccine=new Vaccine();
    this.token=this.service.getToken();

    this.user = JSON.parse(this.token);

    this.vaccine.name=this.user.fname+" "+this.user.lname;
    this.vaccine.email=this.user.email;
    this.vaccine.pno=this.user.pno;
  }

  createVaccine()
  {
    this.service.createVaccine(this.vaccine).subscribe(data=>{
      this.message=data;
      this.vaccine=new Vaccine();
      alert("Slot Booked Successfully you will date and time with a message on Phone Number and Email ID");
    },error=>{
      console.log(error);
    });

  }
}
