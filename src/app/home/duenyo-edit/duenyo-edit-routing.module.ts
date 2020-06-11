import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DuenyoEditPage } from './duenyo-edit.page';

const routes: Routes = [
  {
    path: '',
    component: DuenyoEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DuenyoEditPageRoutingModule {}
