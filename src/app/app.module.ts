import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,Form } from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ContactusComponent } from './contactus/contactus.component';
import { SlotbookComponent } from './slotbook/slotbook.component';
import { DoctorbookComponent } from './doctorbook/doctorbook.component';
import { AmbulancebookComponent } from './ambulancebook/ambulancebook.component';
import { BedbookComponent } from './bedbook/bedbook.component';


const appRoutes:Routes=[
  {path:'Home',component:HomeComponent},
  {path:"",redirectTo:"Home",pathMatch:"full"},
  {path:'Login',component:LoginComponent},
  {path:'Register',component:RegisterComponent},
  {path:'Feedback',component:FeedbackComponent},
  {path:'Contactus',component:ContactusComponent},
  {path:'Slotbook',component:SlotbookComponent},
  {path:'Doctor',component:DoctorbookComponent},
  {path:'Ambulance',component:AmbulancebookComponent},
  {path:'Bed',component:BedbookComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    FeedbackComponent,
    ContactusComponent,
    SlotbookComponent,
    DoctorbookComponent,
    AmbulancebookComponent,
    BedbookComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes),
    AppRoutingModule,FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
