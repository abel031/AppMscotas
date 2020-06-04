import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NomMascotasComponent } from './nom-mascotas.component'


@NgModule({
  declarations: [ NomMascotasComponent ],
  imports: [
    CommonModule
  ],
  exports: [ NomMascotasModule ]
})
export class NomMascotasModule { }
