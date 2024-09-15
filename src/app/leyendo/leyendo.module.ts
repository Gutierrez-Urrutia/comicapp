import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LeyendoPageRoutingModule } from './leyendo-routing.module';
import { LeyendoPage } from './leyendo.page';
import { ComicViewerComponent } from '../comic-viewer/comic-viewer.component';
import { TitleModule } from '../title/title.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeyendoPageRoutingModule, 
    TitleModule
  ],
  declarations: [LeyendoPage, ComicViewerComponent]
})
export class LeyendoPageModule {}
