import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MascotasEditPage } from './mascotas-edit.page';

const routes: Routes = [
  {
    path: '',
    component: MascotasEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MascotasEditPageRoutingModule {}
