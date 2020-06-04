import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { StoragesessionService } from '../servicios/storagesession.service';
import { DuenyosService } from '../servicios/duenyos.service';
import { LoadingController, Platform } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Duenyo, DuenyosToAJSON } from '../models/duenyo';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  private action="N";
  public loading;
  private myCon:Subscription;
  private duenyos:Duenyo[];

  constructor(private router:Router, private RutaActiva:ActivatedRoute, private StgSesion:StoragesessionService, private api:DuenyosService, private loadingController:LoadingController, private platform:Platform) {
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
    this.loading.dismiss();
  }

  Refresh(){
    this.myCon.unsubscribe();
    this.getElementos();
    this.action="N";
  }

  irConfig(){
    this.router.navigate(['/config']);
  }

  Exit(){
    window.close();
    this.StgSesion.setSessionLoggedOut();
    this.router.navigate(['/login'])
  }

}
