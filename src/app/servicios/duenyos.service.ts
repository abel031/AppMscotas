import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Duenyo } from '../models/duenyo';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class DuenyosService {

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

  getDuenyos():Observable<Duenyo[]>{
    let rdo=null;
    if(this.urlExists(this.API_ENDPIONT+'/duenyos')){
      rdo=this.http.get<Duenyo[]>(this.API_ENDPIONT+'/duenyos').pipe(
        catchError(this.handleError('getDuenyos', []))
      );
    }
    return rdo;
  }

  getDuenyo(user:any):Observable<Duenyo>{
    return this.http.get<Duenyo>(this.API_ENDPIONT+'/duenyos/'+user).pipe(
      catchError(this.handleError<Duenyo>(`getDuenyos Duenyo=${user}`))
    );
  }

  delete(id){
    return this.http.delete(this.API_ENDPIONT+'/duenyos/'+id);
  }

  updateDuenyo(Duenyo) {
    const headers = new HttpHeaders({
      'Content-Type':'application/json'
    });
    return this.http.put(
      this.API_ENDPIONT+'/duenyos/'+Duenyo.idDuenyo,
      Duenyo,
      {headers:headers}
    )
  }

  save (duenyo) {
    const headers = new HttpHeaders({
      'Content-Type':'application/json'
    });
    return this.http.post(
      this.API_ENDPIONT+'/duenyos',
      duenyo,
      {headers:headers}
    )
  }

  urlExists(url) {
    return fetch(url, {mode: "no-cors"})
       .then(res => true)
       .catch(err => false)
    }
  
}
