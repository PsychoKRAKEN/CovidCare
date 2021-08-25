import { Component, OnInit } from '@angular/core';
import { Contactus } from '../contactus';
import { UserService } from '../user.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  token:any;
  user:any;

  contactus: any;

  message:String | undefined;

  constructor(private service:UserService) { }

  ngOnInit(): void {
    this.contactus=new Contactus();

    this.token=this.service.getToken();
    this.user = JSON.parse(this.token);

    this.contactus.fname=this.user.fname;
    this.contactus.lname=this.user.lname;
    this.contactus.email=this.user.email;
  }

  createContactus(){
    this.service.createContactus(this.contactus).subscribe(data=>{
      this.message=data;
      this.contactus=new Contactus();
      alert("Thankyou, Response Submitted Successfully");
    },error=>{
      console.log(error);
    });
  }

}
