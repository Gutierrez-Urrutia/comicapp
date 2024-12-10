import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjustesPageRoutingModule } from './ajustes-routing.module';

import { AjustesPage } from './ajustes.page';
import { ListaAjustesComponent } from '../../components/lista-ajustes/lista-ajustes.component';
import { SharedComponentsModule } from 'src/app/components/shared/shared-components.module';
import { AvatarComponent } from 'src/app/components/avatar/avatar.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjustesPageRoutingModule,
    SharedComponentsModule
    
  ],
  declarations: [AjustesPage,ListaAjustesComponent,AvatarComponent]
})
export class AjustesPageModule {}
