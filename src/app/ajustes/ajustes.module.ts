import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjustesPageRoutingModule } from './ajustes-routing.module';

import { AjustesPage } from './ajustes.page';
import { ListaAjustesComponent } from '../lista-ajustes/lista-ajustes.component';
import { TitleModule } from '../title/title.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjustesPageRoutingModule,
    TitleModule
  ],
  declarations: [AjustesPage,ListaAjustesComponent]
})
export class AjustesPageModule {}
