import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './models/user.model';


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private baseUrl = "http://localhost:8080";

  constructor(private _http: HttpClient) { }

  login(user: User): Observable<any> {
    let url = this.baseUrl + "/login";
    return this._http.post(url, user);
  }

  signup(user: User): Observable<Object> {
    return this._http.post(`${this.baseUrl}` + "/signup", user, { responseType: 'text' });
  }


}
