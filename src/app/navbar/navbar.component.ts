import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public loggedIn=false;
  public AdminIn=false;

  constructor(private service:UserService) { }

  ngOnInit(): void {

    this.loggedIn=this.service.isLoggedIn();
    this.AdminIn=this.service.isAdminIn();

  }

  logoutUser()
  {
    this.service.logoutUser();
    window.location.href="/Home";
  }

  getUser()
  {
    this.service.getUser().subscribe(user=>{

    },
    error=>{
      
    })
  }

}
