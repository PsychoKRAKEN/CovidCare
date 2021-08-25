import { Component, OnInit } from '@angular/core';
import { Feedback } from '../feedback';
import { UserService } from '../user.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  token:any;
  user:any;

  feedback: any;

  message:String | undefined;

  constructor(private service:UserService) { }

  ngOnInit(): void {

    this.feedback=new Feedback();

    this.token=this.service.getToken();
    this.user = JSON.parse(this.token);

    this.feedback.name=this.user.fname+" "+this.user.lname;
    this.feedback.email=this.user.email;

    
  }

  createFeedback(){
    this.service.createFeedback(this.feedback).subscribe(data=>{
      this.message=data;
      this.feedback=new Feedback();
      alert("Thankyou, Feedback Submitted Successfully");
    },error=>{
      console.log(error);
    });
  }

}
