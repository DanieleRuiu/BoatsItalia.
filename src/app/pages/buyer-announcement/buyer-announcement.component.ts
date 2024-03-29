import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Advertisment } from '../../models/advertisment.model';

@Component({
  selector: 'app-buyer-announcement',
  templateUrl: './buyer-announcement.component.html',
  styleUrl: './buyer-announcement.component.scss'
})
export class BuyerAnnouncementComponent {

anuncio: Advertisment = new Advertisment("");

  constructor(private router: Router){

    let state = router.getCurrentNavigation()?.extras?.state;
    let id = state?.['id'];
    console.log(id)
  }

}
