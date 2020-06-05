import { Injectable } from '@angular/core';
import { EmpleadosService } from './empleados.service';
import { Router } from '@angular/router';
import { StoragesessionService } from './storagesession.service';
import { EmpleadosToAJSON } from '../models/empleados';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private api:EmpleadosService, private router:Router, private StgSesion:StoragesessionService) { }

  rdo=false
  Empleado: any;

  login(user:string, password:string){
    this.StgSesion.setSessionLoggedOut();
    this.api.getEmpleado(user).subscribe(res => {
      this.Empleado = EmpleadosToAJSON(res);
      if(this.Empleado.length>0){
        if(password == this.Empleado[0].clave){
          let token = "token";
          let u = {username:user, token:token};
          this.StgSesion.setSessionLogedIn(u);
          this.router.navigateByUrl('/home/N');
        }
      }
    }, err => {

    });
  }
}
