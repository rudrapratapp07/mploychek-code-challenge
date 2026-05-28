import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://mploychek-code-challenge.onrender.com/api';

  constructor(private http: HttpClient) {}

  // Added delay to showcase async loading mechanism
  getRecords(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/records?delay=2000`);
  }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/users`);
  }

  addUser(user: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/users`, user);
  }

  deleteUser(userId: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/users/${userId}`);
  }
}
