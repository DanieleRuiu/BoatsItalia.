
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable, map} from 'rxjs';
import { Advertisment } from './models/advertisment.model';
import { User } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

   #authToken: string | undefined; // using # in order to declare a strictly private property

   isLogged : BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private http: HttpClient) {

      let string = localStorage.getItem('userData')
      console.log(string)
      if(string!=null){
        this.isLogged.next(true);
      }else{
        this.isLogged.next(false);
      }

   }

  public headers: HttpHeaders = new HttpHeaders();

  registerUser(user: any): Observable<any> {

    const headers = new HttpHeaders({
      'Authorization': this.#authToken || '',
      'Content-Type': 'application/json'
    });

    return this.http.post('http://localhost:8080/api/users', user, {headers: headers}).pipe(
      map(res=>{
        console.log(res)
        localStorage.setItem('userData', JSON.stringify(res))
      })
    );
}


login(email: string, password: string): Observable<any> {
  const headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  const body = JSON.stringify({ email, password });

  const response = this.http.post<any>('http://localhost:8080/api/users/login', body, { headers });
  response.subscribe(
    (data) => {

      localStorage.setItem('userData', JSON.stringify(data))
   });
  return response;
}

createAnnouncement (announcement: any): Observable<any> {

let stringUser = localStorage.getItem('userData')
let user: User = new User(stringUser);

  const headers = new HttpHeaders({
    'Authorization': 'Bearer '+user.token,
    'Content-Type': 'application/json'
  });
  return this.http.post('http://localhost:8080/admin', announcement, { headers }).pipe(
    map(res=>{
      return res
    })
    );

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

searchByTitle(title:string): Observable<Advertisment[]>{
  return this.http.post<Advertisment[]>('http://localhost:8080/announcements/search', title).pipe(
    map(res=>{

      return res.map(ad=>new Advertisment(JSON.stringify(ad)))
    })
  )
}

  }
