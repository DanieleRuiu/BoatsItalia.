import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { ActivatedRoute } from '@angular/router';
import { Advertisment } from '../../models/advertisment.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {

 id:number=0;
 advertisment: Advertisment = new Advertisment(null);

  constructor(private service: AuthService, private route: ActivatedRoute){


  }

ngOnInit(){
  this.id = Number(this.route.snapshot.params['id']) ;
  this.service.getAnnouncementById(this.id).subscribe(res=>{
    this.advertisment = res;
  });
}


}
