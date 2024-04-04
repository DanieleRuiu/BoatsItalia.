import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {


isLogged:boolean=false

  constructor(private service: AuthService){
    service.isLogged.subscribe(value=>{
      console.log(value)
this.isLogged=value
    })
  }

  logout(){
    localStorage.removeItem('userData')
    localStorage.removeItem('accessData')
    localStorage.removeItem('token')
    this.service.isLogged.next(false);
  }

}
