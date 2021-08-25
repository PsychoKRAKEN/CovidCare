import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,Form } from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

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
import { NavbarComponent } from './navbar/navbar.component';
import { AuthGuard } from './auth.guard';
import { AdminGuard } from './admin.guard';
import { UserService } from './user.service';
import { AuthInterceptor } from './auth.interceptor';
import { ProfileComponent } from './profile/profile.component';
import { DetailsComponent } from './details/details.component';
import { AdminComponent } from './admin/admin.component';


const appRoutes:Routes=[
  {path:'Home',component:HomeComponent},
  {path:"",redirectTo:"Home",pathMatch:"full"},
  {path:'Login',component:LoginComponent},
  {path:'Register',component:RegisterComponent},
  {path:'Feedback',component:FeedbackComponent,canActivate:[AuthGuard]},
  {path:'Contactus',component:ContactusComponent,canActivate:[AuthGuard]},
  {path:'Slotbook',component:SlotbookComponent,canActivate:[AuthGuard]},
  {path:'Doctor',component:DoctorbookComponent,canActivate:[AuthGuard]},
  {path:'Ambulance',component:AmbulancebookComponent,canActivate:[AuthGuard]},
  {path:'Bed',component:BedbookComponent,canActivate:[AuthGuard]},
  {path:'Profile',component:ProfileComponent,canActivate:[AuthGuard]},
  {path:'Details',component:DetailsComponent,canActivate:[AuthGuard]},
  {path:'Admin',component:AdminComponent,canActivate:[AdminGuard]},
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
    BedbookComponent,
    NavbarComponent,
    ProfileComponent,
    DetailsComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes),
    AppRoutingModule,FormsModule,HttpClientModule
  ],
  providers: [UserService,AuthGuard,AdminGuard,[{provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}]],
  bootstrap: [AppComponent]
})
export class AppModule { }
