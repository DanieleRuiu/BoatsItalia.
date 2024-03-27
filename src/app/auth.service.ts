
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

   #outToken: string | undefined; // using # in order to declare a strictly private property

  constructor(private http: HttpClient) { }

  registerUser(user: any): Observable<any> {

    const headers = new HttpHeaders({
      'Authorization': this.#outToken || '',
      'Content-Type': 'application/json'
    });
    return this.http.post ('http://localhost:8080/auth/register', user, {headers: headers});
}


login(email: string, password: string): Observable<any> {
  const headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  const body = JSON.stringify({ email, password });

  const response = this.http.post<any>('http://localhost:8080/auth/login', body, { headers });
  response.subscribe(
    (data) => {
      this.#outToken = data.token;
    }
  );
  return response;
}

announcement (announcement: any): Observable<any> {
  const headers = new HttpHeaders({
    'Authorization': this.#outToken || '',
    'Content-Type': 'application/json'
  });
  return this.http.post('http://localhost:8080/announcement', announcement, { headers });

}

  }
