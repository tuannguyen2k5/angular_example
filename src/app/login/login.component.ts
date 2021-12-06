import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new User();
  constructor(private _service: RegistrationService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    this._service.createUser(this.user).subscribe(data => {
      console.log(data);
    }, error => console.log(error));
  }
}
