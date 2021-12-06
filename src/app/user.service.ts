import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = "http://localhost:8080/user";

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}` + "/all");
  }
  viewUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/detail/${id}`);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`, { responseType: 'text' });
  }
}
