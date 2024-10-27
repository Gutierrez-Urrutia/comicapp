import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BibliotecaPageRoutingModule } from './biblioteca-routing.module';

import { BibliotecaPage } from './biblioteca.page';
import { CardBiblioComponent } from '../../components/card-biblio/card-biblio.component';
import { SharedComponentsModule } from 'src/app/components/shared/shared-components.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BibliotecaPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [BibliotecaPage, CardBiblioComponent]
  
})
export class BibliotecaPageModule {}
