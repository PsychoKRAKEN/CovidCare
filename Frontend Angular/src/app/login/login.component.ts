import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user=new User();
  res:any;

  constructor(private service:UserService) { }

  ngOnInit(): void {
  }

  onSubmit()
  {
    if(this.user.email=="admin" && this.user.password=="admin")
    {
      this.service.loginAdmin(true);
      window.location.href="/Home";
    }
    else{

      this.service.generateToken(this.user).subscribe(data=>{
        this.res=data;
        console.log("response received");
        console.log(this.res);
        this.service.loginUser(this.res);
        window.location.href="/Home";
  
      },
      error=>{
        console.log("Exception occured");
        alert("Invalid username and password");
        
      })

    }

   

    /*
    if((this.credentials.username!='' && this.credentials.password!='') && (this.credentials.username!=null && this.credentials.password!=null))
    {
      this.service.generateToken(this.credentials).subscribe((response:any)=>{
        console.log(response.token);
        this.service.loginUser(response.token);
        window.location.href="/Dashboard";
      },
      error=>{

      })
    }else
    {
      console.log("Fields are empty");
    }
    */
  }

}
