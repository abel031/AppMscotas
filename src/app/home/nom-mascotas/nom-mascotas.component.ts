import { Component, OnInit, Input } from '@angular/core';
import { MascotasService } from 'src/app/servicios/mascotas.service';

@Component({
  selector: 'app-nom-mascotas',
  templateUrl: './nom-mascotas.component.html',
  styleUrls: ['./nom-mascotas.component.scss'],
})
export class NomMascotasComponent implements OnInit {

  @Input() id=0;
  @Input() camp="";
  NombreMascota=null;

  constructor(private api:MascotasService) { }

  ngOnInit() {}

  ngOnChanges() {
    this.NombreMascota="Mi Mascota"
    this.api.getMascota(this.id).subscribe(res=>{
      if(this.camp==="Nombre") this.NombreMascota=res.nombre;
      if(this.camp==="Animal") this.NombreMascota=res.animal;
    })
  }

}
