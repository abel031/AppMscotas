import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MascotasAddPageRoutingModule } from './mascotas-add-routing.module';

import { MascotasAddPage } from './mascotas-add.page';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MascotasAddPageRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  declarations: [MascotasAddPage]
})
export class MascotasAddPageModule {}
