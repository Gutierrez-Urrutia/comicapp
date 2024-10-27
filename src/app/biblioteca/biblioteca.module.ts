import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BibliotecaPageRoutingModule } from './biblioteca-routing.module';

import { BibliotecaPage } from './biblioteca.page';
import { CardBiblioComponent } from '../card-biblio/card-biblio.component';
import { TitleModule } from '../title/title.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BibliotecaPageRoutingModule,
    TitleModule,
  ],
  declarations: [BibliotecaPage, CardBiblioComponent]
  
})
export class BibliotecaPageModule {}
