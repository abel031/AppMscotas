import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DuenyoEditPageRoutingModule } from './duenyo-edit-routing.module';

import { DuenyoEditPage } from './duenyo-edit.page';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DuenyoEditPageRoutingModule,
    MaterialModule
  ],
  declarations: [DuenyoEditPage]
})
export class DuenyoEditPageModule {}
