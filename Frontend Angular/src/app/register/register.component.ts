import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: any;

  message:String | undefined;


  constructor(private service:UserService) { }

  ngOnInit(): void {

    this.user=new User();
  }

  createUser(){
    this.service.createUser(this.user).subscribe(data=>{
      this.message=data;
      this.user=new User();
      window.location.href="/Login";
    },error=>{
      console.log(error);
    });
  }

 

}
