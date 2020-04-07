import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Empleado } from '../models/empleados';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  public API_ENDPIONT;
  public Config;

  constructor(private http: HttpClient, public router:Router) {

    this.Config=JSON.parse(localStorage.getItem('ConfigIp'));
    if (this.Config)
      this.API_ENDPIONT = 'http://'+this.Config.IP+':80/api/api.php';
    else
      this.API_ENDPIONT = 'http://localhost:80/api/api.php';

  }

   private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {    
      this.router.navigateByUrl('/config');
      return of(result as T);
    };
  }

  getEmpleados():Observable<Empleado[]>{
    let rdo=null;
    if(this.urlExists(this.API_ENDPIONT+'/empleados')){
      rdo=this.http.get<Empleado[]>(this.API_ENDPIONT+'/empleados').pipe(
        catchError(this.handleError('getEmpleados', []))
      );
    }
    return rdo;
  }

  getEmpleado(user:any):Observable<Empleado>{
    return this.http.get<Empleado>(this.API_ENDPIONT+'/empleados?filter[]=nombre,eq,'+user).pipe(
      catchError(this.handleError<Empleado>(`getEmpleados Empleados=${user}`))
    );
  }

  urlExists(url) {
    return fetch(url, {mode: "no-cors"})
       .then(res => true)
       .catch(err => false)
    }

}
