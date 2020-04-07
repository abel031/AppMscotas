import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { MaterialModule } from '../material.module';
import { HttpClientModule } from '@angular/common/http';
import { EmpleadosService } from '../servicios/empleados.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    MaterialModule,
    HttpClientModule
  ],
  declarations: [ LoginPage ],
  providers: [ EmpleadosService ]
})
export class LoginPageModule {}
