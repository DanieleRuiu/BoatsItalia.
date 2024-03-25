
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  registerUser(user: any): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxNCIsInVzZXJJZCI6MTQsInVzZXJuYW1lIjoiQ29yZXR0YSIsImVtYWlsIjoiZXhhbXBsZUBtYWlsLml0IiwiaWF0IjoxNzEwNzcwMjkyLCJleHAiOjE3MTA3NzM4OTJ9.x8SyKmZlouOlXMtZkNNH1JhiYErPS9aX667lK8hyiL4"',
      'Content-Type': 'application/json'
    });
    return this.http.post ('http://localhost:8080/auth/register', user, {headers: headers});
}


login(email: string, password: string): Observable<any> {
  const headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  const body = JSON.stringify({ email, password });

  return this.http.post<any>('http://localhost:8080/auth/login', body, { headers });
}


}
