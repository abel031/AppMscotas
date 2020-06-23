import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { StoragesessionService } from 'src/app/servicios/storagesession.service';
import { MascotasService } from 'src/app/servicios/mascotas.service';
import { LoadingController, Platform } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Mascota, MascotasToAJSON } from 'src/app/models/mascota';

@Component({
  selector: 'app-mascotas',
  templateUrl: './mascotas.page.html',
  styleUrls: ['./mascotas.page.scss'],
})
export class MascotasPage implements OnInit {

  private _id;
  public loading;
  private myCon:Subscription;
  private mascotas:Mascota[];

  constructor(private router:Router, private rutaActiva:ActivatedRoute, private StgSesion:StoragesessionService, private api:MascotasService, private loadingController:LoadingController, private platform:Platform) {
    this._id = this.rutaActiva.snapshot.paramMap.get('id');}

  ngOnInit() {
    this.rutaActiva.params.subscribe((parametro:ParamMap)=>{
      this._id=this.rutaActiva.snapshot.paramMap.get('id');
    });
    this.getElementos();
  }

  async getElementos(){
    this.loading = await this.loadingController.create({
      message: 'Cargando Datos'
    });
    await this.loading.present();
    await this.subscription();
  }

  subscription(){
    this.myCon=this.api.getMascotaDuenyo(this._id).subscribe(res=>{
      this.mascotas = MascotasToAJSON(res)
    });
    this.loading.dismiss();
  }

  Refresh(){
    //console.log("test");
    this.myCon.unsubscribe();
    this.getElementos();
  }

  async delete(id: any) {
    console.log(id);
    await this.api.delete(id)
      .subscribe(res => {               
      });
    this.Refresh();
  }

  edit(id:any){
    this.router.navigate(['/mascotas-edit', id]);
  }

  addElemento(){
    this.router.navigate(['/mascotas-add'])
  }

}
