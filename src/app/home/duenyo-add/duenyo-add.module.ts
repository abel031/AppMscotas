import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DuenyoAddPageRoutingModule } from './duenyo-add-routing.module';

import { DuenyoAddPage } from './duenyo-add.page';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaterialModule,
    ReactiveFormsModule,
    DuenyoAddPageRoutingModule
  ],
  declarations: [DuenyoAddPage]
})
export class DuenyoAddPageModule {}
