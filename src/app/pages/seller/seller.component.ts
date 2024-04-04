import { AuthService } from './../../auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrl: './seller.component.scss',
})
export class SellerComponent {


  form = this.fb.group({
    title: ['', Validators.required ],
    description: ['', Validators.required ],
    price:['', Validators.required ],
    category: ['', Validators.required ],
    location:['', Validators.required ],
    telephone:['', Validators.required ],
    email:['', Validators.required ]
  })

  constructor(private http: HttpClient, private authService: AuthService, private fb: FormBuilder, private router: Router) {
    console.log('🚀 ~ SellerComponent ~ authService:', authService);
  }

  onSubmit(event: Event) {
    event.preventDefault();
    console.log('Creazione annuncio');
    let row = this.form.getRawValue();
    const announcement = {
      title: row.title,
      description: row.description,
      price: row.price,
      category: row.category,
      region: row.location,
      //images: this.announcement.images,
      telephone: row.telephone,
      email:row.email,
    };

    const token = localStorage.getItem('token');

this.authService.createAnnouncement(announcement).subscribe(res=>{
  this.router.navigateByUrl('/home')
})

    /*this.http
      .post('http://localhost:8080/announcements', announcement, {
        headers: new HttpHeaders({
          Authorization: token || '',
          'Content-Type': 'application/json',
        }),
      })
      .subscribe(
        (response) => {
          this.router.navigateByUrl('/home')
          console.log('Risposta ricevuta:', response);
        },
        (error) => {
          console.error('Errore durante la richiesta:', error);
          console.error("Errore durante la creazione dell'annuncio:", error);
        }
      );*/
  }
}
