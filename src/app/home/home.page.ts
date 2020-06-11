import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { StoragesessionService } from '../servicios/storagesession.service';
import { DuenyosService } from '../servicios/duenyos.service';
import { LoadingController, Platform } from '@ionic/angular';
import { Subscription, interval } from 'rxjs';
import { Duenyo, DuenyosToAJSON } from '../models/duenyo';
import { Mascota, MascotasToAJSON } from '../models/mascota';
import { MascotasService } from '../servicios/mascotas.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  private action="N";
  public loading;
  private refreshRate;
  private myCon:Subscription;
  private myConM:Subscription;
  private duenyos:Duenyo[];
  private mascotas:Mascota[];
  private c1 = "Animal";
  private c2 = "Nombre"
  private refresh;
  

  constructor(private router:Router, private RutaActiva:ActivatedRoute, private StgSesion:StoragesessionService, private api:DuenyosService, private apiM:MascotasService, private loadingController:LoadingController, private platform:Platform) {
    this.action = this.RutaActiva.snapshot.paramMap.get('action');
  }
  
  ngOnInit(){
    this.RutaActiva.params.subscribe((parametro:ParamMap)=>{
      this.action=this.RutaActiva.snapshot.paramMap.get('action');
    });
    this.getElementos();
  }

  ionViewWillEnter(){
    if(this.action=="R") this.Refresh();
    //this.refreshRate = JSON.parse(localStorage.getItem('configRef'));
    //console.log(this.refreshRate)
    //this.refresh = setInterval(this.Refresh, this.refreshRate.Ref);
  }

  async getElementos(){
    this.loading = await this.loadingController.create({
      message: 'Cargando Datos'
    });
    await this.loading.present();
    await this.subscription();
  }

  subscription(){
    this.myCon=this.api.getDuenyos().subscribe(res=>{
      this.duenyos = DuenyosToAJSON(res)
    });
    this.myConM=this.apiM.getMascotas().subscribe(res=>{
      this.mascotas = MascotasToAJSON(res)
    });
    this.loading.dismiss();
  }

  Refresh(){
    //console.log("test");
    this.myCon.unsubscribe();
    this.getElementos();
    this.action="N";
  }


  irConfig(){
    //clearInterval(this.refresh);
    this.router.navigate(['/config']);
  }

  Exit(){
    //clearInterval(this.refresh);
    window.close();
    this.StgSesion.setSessionLoggedOut();
    this.router.navigate(['/login'])
  }

  async delete(id: any) {
    console.log(id);
    await this.api.delete(id)
      .subscribe(res => {               
      });
    this.Refresh();
  }

  edit(id:any){
    this.router.navigate(['/duenyo-edit', id]);
  }

}
