import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private authService: AuthService) { }

  login(email: string, password: string) {
    this.authService.login(email, password)
      .subscribe(
        response => {
          console.log('Accesso effettuato:', response);
          // Puoi gestire la risposta qui
        },
        error => {
          console.error('Errore durante il login:', error);
          // Puoi gestire gli errori qui
        }
      );
  }
}
