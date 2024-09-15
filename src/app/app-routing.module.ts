import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/portada',
    pathMatch: 'full'
  },

  {
    path: 'ajustes',
    loadChildren: () => import('./ajustes/ajustes.module').then( m => m.AjustesPageModule)
  },

  {
    path: 'biblioteca',
    loadChildren: () => import('./biblioteca/biblioteca.module').then( m => m.BibliotecaPageModule)
  },
  {
    path: 'leyendo',
    loadChildren: () => import('./leyendo/leyendo.module').then( m => m.LeyendoPageModule)
  },
  {
    path: 'portada',
    loadChildren: () => import('./portada/portada.module').then( m => m.PortadaPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

