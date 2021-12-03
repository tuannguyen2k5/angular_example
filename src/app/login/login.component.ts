import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../models/user.model';
import { RegistrationService } from '../registration.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _service: RegistrationService) { }
  user = new User();
  ngOnInit(): void {
  }
  onSubmit() {
    this._service.loginUserFromRemote(this.user);
  }
}
