import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TiendaPageRoutingModule } from './tienda-routing.module';
import { TiendaPage } from './tienda.page';
import { HttpClientModule } from '@angular/common/http';
import { MarvelApiService } from '../../services/marvel-api.service';
import { SharedComponentsModule } from 'src/app/components/shared/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TiendaPageRoutingModule,
    HttpClientModule,
    SharedComponentsModule
  ],
  declarations: [TiendaPage],
  providers:[MarvelApiService]
})
export class TiendaPageModule {}