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
  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/detail/${id}`);
  }
  createUser(user: User): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + "/add", user);
  }
  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`, { responseType: 'text' });
  }
  updateUser(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update?id=${id}`, value);
  }
}
