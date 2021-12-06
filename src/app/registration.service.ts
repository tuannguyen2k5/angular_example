import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './models/user.model';



@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private baseUrl = "http://localhost:8080/user/add";

  constructor(private _http: HttpClient) { }

  createUser(user: User): Observable<object> {
    return this._http.post<User>(`${this.baseUrl}`, user);
  }
}
