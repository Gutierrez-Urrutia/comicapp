import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LeyendoPageRoutingModule } from './leyendo-routing.module';
import { LeyendoPage } from './leyendo.page';
import { ComicViewerComponent } from '../../components/comic-viewer/comic-viewer.component';
import { SharedComponentsModule } from 'src/app/components/shared/shared-components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeyendoPageRoutingModule, 
    SharedComponentsModule
  ],
  declarations: [LeyendoPage, ComicViewerComponent]
})
export class LeyendoPageModule {}
