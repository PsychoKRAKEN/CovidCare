import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
import { tokenize } from '@angular/compiler/src/ml_parser/lexer';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL='http://localhost:8090/api/v1';

  constructor(private http:HttpClient) { }

  getAllUser():Observable<User[]>{
    return this.http.get<User[]>(`${this.baseURL}/covid`);
  }

  createUser(user: User): Observable<any> {
    return this.http.post(`${this.baseURL}/covid`, user, {responseType: 'text'});
  }

  getUser()
  {
    return this.http.get<User[]>(`${this.baseURL}/covid`);
  }

  generateToken(user:User):Observable<any>
  {
    //generate token
    return this.http.post(`${this.baseURL}/login`,user);
  }

  //To login User
  loginUser(token: any)
  {
    localStorage.setItem("token",token);
    return true;
  }


  //To check user is logged in
  isLoggedIn()
  {
    let token=localStorage.getItem("token");

    if(token==undefined || token==='' || token==null)
    {
      return false;
    }else{
      return true;
    }
  }


  // To Logout
  logoutUser()
  {
    localStorage.removeItem('token');
     return true;
  }

  //To get token
  getToken()
  {
    return localStorage.getItem("token");
  }

}


