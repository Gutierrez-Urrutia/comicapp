import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title/title.component';
import { IonicModule } from '@ionic/angular';
import { CardShopComponent } from '../card-shop/card-shop.component';



@NgModule({
  declarations: [TitleComponent, CardShopComponent],
  imports: [
    CommonModule,
    IonicModule,
    
  ],
  exports:[TitleComponent, CardShopComponent]
})
export class SharedComponentsModule { }
