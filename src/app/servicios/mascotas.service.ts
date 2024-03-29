import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Mascota } from '../models/mascota';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MascotasService {

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

  getMascotas():Observable<Mascota[]>{
    let rdo=null;
    if(this.urlExists(this.API_ENDPIONT+'/animales')){
      rdo=this.http.get<Mascota[]>(this.API_ENDPIONT+'/animales').pipe(
        catchError(this.handleError('getMascota', []))
      );
    }
    return rdo;
  }

  getMascotaDuenyo(user:any):Observable<Mascota[]>{
    return this.http.get<Mascota[]>(this.API_ENDPIONT+'/animales?filter[]=idDuenyo,eq,'+user).pipe(
      catchError(this.handleError<Mascota[]>(`getMascotasDuenyo Duenyo=${user}`))
    );
  }

  getMascota(user:any):Observable<Mascota>{
    return this.http.get<Mascota>(this.API_ENDPIONT+'/animales/'+user).pipe(
      catchError(this.handleError<Mascota>(`getMascota Mascota=${user}`))
    );
  }

  delete(id){
    return this.http.delete(this.API_ENDPIONT+'/animales/'+id);
  }

  updateMaascota(Mascota) {
    const headers = new HttpHeaders({
      'Content-Type':'application/json'
    });
    return this.http.put(
      this.API_ENDPIONT+'/animales/'+Mascota.idMascota,
      Mascota,
      {headers:headers}
    )
  }

  save (Mascota) {
    const headers = new HttpHeaders({
      'Content-Type':'application/json'
    });
    return this.http.post(
      this.API_ENDPIONT+'/animales',
      Mascota,
      {headers:headers}
    )
  }

  urlExists(url) {
    return fetch(url, {mode: "no-cors"})
       .then(res => true)
       .catch(err => false)
    }

}
