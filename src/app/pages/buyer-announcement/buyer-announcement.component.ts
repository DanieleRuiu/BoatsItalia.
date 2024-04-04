import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Advertisment } from '../../models/advertisment.model';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-buyer-announcement',
  templateUrl: './buyer-announcement.component.html',
  styleUrl: './buyer-announcement.component.scss'
})
export class BuyerAnnouncementComponent {

anuncio: Advertisment = new Advertisment(null);

  constructor(private router: Router, private service: AuthService){

   /* let state = router.getCurrentNavigation()?.extras?.state;
    let id = state?.['id'];
    console.log(id)
    service.getAnnouncementById(id);*/
  }

}
