import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StoragesessionService } from '../servicios/storagesession.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router:Router, private StgSesion:StoragesessionService) {}

  irConfig(){
    this.router.navigate(['/config']);
  }

  Exit(){
    window.close();
    this.StgSesion.setSessionLoggedOut();
    this.router.navigate(['/login'])
  }

}
