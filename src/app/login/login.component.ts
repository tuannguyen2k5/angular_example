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
  form!: FormGroup;
  constructor(private _service: RegistrationService, private router: Router, private fb: FormBuilder) { }
  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(this.user.email, [
        Validators.required,
        Validators.minLength(6),
      ]),
      password: new FormControl(this.user.password, [
        Validators.required,
      ])
    });
  }

  onSubmit() {
    this.setUser();
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
  setUser() {
    this.user.email = this.form.get('email')?.value;
    this.user.password = this.form.get('password')?.value;
  }
}
