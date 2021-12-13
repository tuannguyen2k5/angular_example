import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
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
  constructor(private _service: RegistrationService, private router: Router) { }
  ngOnInit(): void {

  }
  onSubmit() {
    this._service.login(this.user).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['']);
      },
      error => console.log("failed"),
    );
  }
  gotoSignup() {
    this.router.navigate(['signup']);
  }
}
