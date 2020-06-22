import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DuenyoAddPage } from './duenyo-add.page';

const routes: Routes = [
  {
    path: '',
    component: DuenyoAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DuenyoAddPageRoutingModule {}
