import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user = new User();
  constructor(private _service: RegistrationService, private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit() {
    this._service.signup(this.user).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['']);
      },
      error => console.log(error),
    );
  }
}
