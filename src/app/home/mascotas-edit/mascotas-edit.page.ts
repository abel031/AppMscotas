import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MascotasService } from 'src/app/servicios/mascotas.service';
import { FormGroup } from '@angular/forms';
import { MyErrorStateMatcher } from '../duenyo-edit/duenyo-edit.page';
import { NewMascota } from 'src/app/models/mascota';

@Component({
  selector: 'app-mascotas-edit',
  templateUrl: './mascotas-edit.page.html',
  styleUrls: ['./mascotas-edit.page.scss'],
})
export class MascotasEditPage implements OnInit {

  ascotasForm: FormGroup
  _id;
  idMascota='';
  nombre='';
  animal='';
  isLoadingResults = false;
  matcher = new MyErrorStateMatcher();
  editing: boolean = false;
  public mascota: NewMascota = new NewMascota(0,0,'','','');
  errorMessage='';

  constructor(private router:Router, private rutaActiva:ActivatedRoute, private api:MascotasService) { }

  ngOnInit() {
    this._id = this.rutaActiva.snapshot.paramMap.get('id');
    if(this._id){
      this.editing=true;
      this.api.getMascota(this._id).subscribe({
        next: e => {
          this.mascota = e;
        },
        error: err=> this.errorMessage = err
      });
    }
  }

  onFormSubmit(){
    if(this.editing){
      this.api.updateMaascota(this.mascota).subscribe((data)=>{
        this.isLoadingResults = false;
        this.router.navigate(['mascotas', this._id])
      }, (error)=>{

      });
    }
  }

}
