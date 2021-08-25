import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  token:any;
  user:any;
  name:any;
  age:any;
  email:any;
  pno:any;

  constructor(private service:UserService) { }

  ngOnInit(): void {

    this.token=this.service.getToken();

    this.user = JSON.parse(this.token);

    this.name=this.user.fname+" "+this.user.lname;
    this.email=this.user.email;
    this.pno=this.user.pno;
    this.age=this.user.age;
  }

  onSubmit()
  {
    alert("Appointment Booked SuccessFuly")
  }

}
