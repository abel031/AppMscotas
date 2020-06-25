import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home/:action', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule), canActivate:[AuthGuard]},
  { path: 'config', loadChildren: () => import('./config/config.module').then( m => m.ConfigPageModule) },
  { path: 'login', loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule) },
  { path: 'duenyo-edit/:id', loadChildren: () => import('./home/duenyo-edit/duenyo-edit.module').then( m => m.DuenyoEditPageModule), canActivate:[AuthGuard]},
  { path: 'duenyo-add', loadChildren: () => import('./home/duenyo-add/duenyo-add.module').then( m => m.DuenyoAddPageModule), canActivate:[AuthGuard]},
  { path: 'mascotas/:id', loadChildren: () => import('./home/mascotas/mascotas.module').then( m => m.MascotasPageModule), canActivate:[AuthGuard]},
  { path: 'mascotas-edit/:id', loadChildren: () => import('./home/mascotas-edit/mascotas-edit.module').then( m => m.MascotasEditPageModule), canActivate:[AuthGuard]},
  { path: 'mascotas-add', loadChildren: () => import('./home/mascotas-add/mascotas-add.module').then( m => m.MascotasAddPageModule), canActivate:[AuthGuard]},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
