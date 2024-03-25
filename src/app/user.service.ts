import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUser(username: string): Observable<any> {
    const token = 'Bearer ' + localStorage.getItem('accessToken');
    const headers = new HttpHeaders({
      'Authorization': token,
      'Content-Type': 'application/json'
    });

    return this.http.get<any>('http://localhost:8080/api/users/' + username, { headers });
  }
}
