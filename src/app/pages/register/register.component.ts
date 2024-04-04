import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit{
  router: any;
  registerForm = new FormGroup({
    email: new FormControl<string>(''),
    firstName: new FormControl<string>(''),
    lastName: new FormControl<string>(''),
    username: new FormControl<string>(''),
    password: new FormControl<string>(''),
  });
  errorMessage: string | undefined;

isRegistered=false;

  constructor(private authService: AuthService) {

  }

  ngOnInit() {


  }

  registerUser(event: Event) {
    event.preventDefault();
    console.log('Registrazione utente');
    const user = {
      email: this.registerForm.get('email')?.value,
      firstName: this.registerForm.get('firstName')?.value,
      lastName: this.registerForm.get('lastName')?.value,
      username: this.registerForm.get('username')?.value,
      password: this.registerForm.get('password')?.value,
    };

    this.authService.registerUser(user).subscribe(
      (response) => {
        console.log('Risposta ricevuta:', response);
        //this.router.navigate(['/login']);
        this.isRegistered=true;
        this.authService.isLogged.next(true);
      },
      (error) => {
        console.error('Errore durante la richiesta:', error);
        console.error('Errore durante la registrazione:', error);
        this.errorMessage =
          'Si è verificato un errore durante la registrazione. Riprova.';
      }
    );
  }
}
