import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrl: './seller.component.scss'
})
export class SellerComponent {
  announcement: any = {};

  constructor(private http: HttpClient) {}

  onSubmit(event: Event) {
    event.preventDefault();
    console.log('Creazione annuncio');
    const announcement = {
      title: this.announcement.title,
      description: this.announcement.description,
      price: this.announcement.price,
      category: this.announcement.category,
      location: this.announcement.location,
      images: this.announcement.images,
      telephone: this.announcement.telephone,
      email: this.announcement.email,
    };

    this.http.post('http://localhost:8080/announcement', announcement).subscribe(
      (response) => {
        console.log('Risposta ricevuta:', response);
      },
      (error) => {
        console.error('Errore durante la richiesta:', error);
        console.error('Errore durante la creazione dell\'annuncio:', error);
      }
    );
  }

}
