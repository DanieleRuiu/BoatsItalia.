import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Advertisment } from '../../models/advertisment.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

  list: Advertisment[] = [];

  constructor( private service: AuthService, private router: Router){

  }

  search(title: string){
    console.log(title)
    this.service.searchByTitle(title).subscribe(res=>{
      this.list = res;
      console.log(res);
    })
  }

  goToDetail(id:number){
    this.router.navigateByUrl('detail/'+id)
  }

}
