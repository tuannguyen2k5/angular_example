import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupComponent } from './signup/signup.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    UserDetailComponent,
    CreateUserComponent,
    EditUserComponent,
    NavbarComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
