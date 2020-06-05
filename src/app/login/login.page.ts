import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoragesessionService } from '../servicios/storagesession.service';
import { LoginService } from '../servicios/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user="";
  pwd="";

  constructor(private router:Router, private StgSession:StoragesessionService, private loginService:LoginService) { }

  ngOnInit() {
  }

  logIn(){
    this.loginService.login(this.user, this.pwd);
  }

  irConfig(){
    this.router.navigate(['/config']);
  }

  irHome(){
    this.router.navigate(['/home', 'N']);
  }


}
