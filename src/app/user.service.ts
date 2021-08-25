import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
import { tokenize } from '@angular/compiler/src/ml_parser/lexer';
import { Vaccine } from './vaccine';
import { Bed } from './bed';
import { Ambulance } from './ambulance';
import { Feedback } from './feedback';
import { Contactus } from './contactus';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL='http://localhost:8090/api/v1';

  constructor(private http:HttpClient) { }

  getAllUser():Observable<User[]>{
    return this.http.get<User[]>(`${this.baseURL}/covid`);
  }

  getAllVaccine():Observable<Vaccine[]>{
    return this.http.get<Vaccine[]>(`${this.baseURL}/vaccine`);
  }

  getAllBed():Observable<Bed[]>{
    return this.http.get<Bed[]>(`${this.baseURL}/bed`);
  }

  getAllAmbulance():Observable<Ambulance[]>{
    return this.http.get<Ambulance[]>(`${this.baseURL}/ambulance`);
  }

  getAllFeedback():Observable<Feedback[]>{
    return this.http.get<Feedback[]>(`${this.baseURL}/feedback`);
  }

  getAllContactus():Observable<Contactus[]>{
    return this.http.get<Contactus[]>(`${this.baseURL}/contactus`);
  }



  createUser(user: User): Observable<any> {
    return this.http.post(`${this.baseURL}/covid`, user, {responseType: 'text'});
  }

  createVaccine(vc: Vaccine): Observable<any> {
    return this.http.post(`${this.baseURL}/vaccine`, vc, {responseType: 'text'});
  }

  createBed(bed: Bed): Observable<any> {
    return this.http.post(`${this.baseURL}/bed`, bed, {responseType: 'text'});
  }

  createAmbulance(ambulance: Ambulance): Observable<any> {
    return this.http.post(`${this.baseURL}/ambulance`, ambulance, {responseType: 'text'});
  }

  createFeedback(feedback: Feedback): Observable<any> {
    return this.http.post(`${this.baseURL}/feedback`, feedback, {responseType: 'text'});
  }

  createContactus(contactus:Contactus): Observable<any> {
    return this.http.post(`${this.baseURL}/contactus`, contactus, {responseType: 'text'});
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
    localStorage.setItem("token",JSON.stringify(token));
    return true;
  }

  loginAdmin(admin: any)
  {
    localStorage.setItem("admin",admin);
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

  isAdminIn()
  {
    let admin=localStorage.getItem("admin");

    if(admin==undefined || admin==='' || admin==null)
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
    localStorage.removeItem('admin');
     return true;
  }

  //To get token
  getToken()
  {
    return localStorage.getItem("token");
  }

}


