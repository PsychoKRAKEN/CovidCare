import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public loggedIn=false;

  constructor(private service:UserService) { }

  ngOnInit(): void {

    this.loggedIn=this.service.isLoggedIn();

  }

  logoutUser()
  {
    this.service.logoutUser();
    location.reload();
  }

  getUser()
  {
    this.service.getUser().subscribe(user=>{

    },
    error=>{
      
    })
  }

}
