import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TiendaPageRoutingModule } from './tienda-routing.module';

import { TiendaPage } from './tienda.page';
import { TitleModule } from '../title/title.module';
import { HttpClientModule } from '@angular/common/http';
import { MarvelApiService } from '../services/marvel-api.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TiendaPageRoutingModule,
    TitleModule,
    HttpClientModule
  ],
  declarations: [TiendaPage],
  providers:[MarvelApiService]
})
export class TiendaPageModule {}
