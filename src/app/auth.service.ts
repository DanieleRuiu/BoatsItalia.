
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, map} from 'rxjs';
import { Advertisment } from './models/advertisment.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

   #authToken: string | undefined; // using # in order to declare a strictly private property

  constructor(private http: HttpClient) { }

  public headers: HttpHeaders = new HttpHeaders();

  registerUser(user: any): Observable<any> {

    const headers = new HttpHeaders({
      'Authorization': this.#authToken || '',
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
      console.log("🚀 ~ AuthService ~ login ~ data:", data)
      this.#authToken = data.accessToken;
      console.log("🚀 ~ AuthService ~ login ~ this.#authToken:", this.#authToken)
      localStorage.setItem('token', `Bearer ${this.#authToken || ''}`);
   });
  return response;
}

announcement (announcement: any): Observable<any> {
  const headers = new HttpHeaders({
    'Authorization': this.#authToken || '',
    'Content-Type': 'application/json'
  });
  return this.http.post('http://localhost:8080/announcement', announcement, { headers });

}


getAllAnnouncement(): Observable<Advertisment[]>{
  const token = '' + localStorage.getItem('token');
  const headers = new HttpHeaders({
    'Authorization': token,
    'Content-Type': 'application/json'
  });
  return this.http.get<Advertisment[]>('http://localhost:8080/announcements', {headers}).pipe(map
  (res=>{
    return res.map(ad=> new Advertisment(JSON.stringify(ad)))
    //console.log('res',res)

  }))
}

getAnnouncementById(id:number): Observable<Advertisment>{
  const token = '' + localStorage.getItem('token');
  const headers = new HttpHeaders({
    'Authorization': token,
    'Content-Type': 'application/json'
  });
  return this.http.get<Advertisment>('http://localhost:8080/announcements/'+id ,{headers}).pipe(map
  (res=>{
    return res =  new Advertisment(JSON.stringify(res))
    //console.log('res',res)

  }))
}

  }
