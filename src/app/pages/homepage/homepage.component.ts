import { AuthService } from './../../auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { __decorate } from "tslib"; // Import the tslib module
import { Advertisment } from '../../models/advertisment.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

cards : Advertisment[] = [];

  constructor(private service: AuthService, private router:Router){
this.getCards();
  }

  getCards(){
this.service.getAllAnnouncement().subscribe(res=>{
  console.log(res)
  this.cards=res;
})
  }

  goToDetail(id:number){
this.router.navigateByUrl('/buyer-announcement', {state:{id:id}})
  }

}
