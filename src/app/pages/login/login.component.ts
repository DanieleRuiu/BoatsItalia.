import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
loginForm = new FormGroup({
    email: new FormControl<string>(''),
    password: new FormControl<string>(''),
});
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login() {
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;
    if(!email || !password) {
      console.error('Email e password sono obbligatorie');
      return;
    }
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
