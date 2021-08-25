import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user:any;
  message:String|undefined;

  constructor(private service: UserService, private router: Router) { }

  ngOnInit(): void {
    this.getAllUser();
  }

  getAllUser()
  {
    return this.service.getAllUser().subscribe(
      data => {
        this.user = data;
      }, error => {
        console.log(error);
      }
    );
  }

  bookslot()
  {
    if(this.service.isLoggedIn())
    {
      window.location.href="/Slotbook";
    }
    else{
      alert("Login/Register First to Book Vaccine slot");
      window.location.href="/Register";
    }
  }

}
