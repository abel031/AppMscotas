import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MascotasEditPageRoutingModule } from './mascotas-edit-routing.module';

import { MascotasEditPage } from './mascotas-edit.page';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MascotasEditPageRoutingModule,
    MaterialModule
  ],
  declarations: [MascotasEditPage]
})
export class MascotasEditPageModule {}
