import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  token:any;
  user:any;

  constructor(public service:UserService) { }

  ngOnInit(): void {

    this.token=this.service.getToken();

    this.user = JSON.parse(this.token);

  }

}
