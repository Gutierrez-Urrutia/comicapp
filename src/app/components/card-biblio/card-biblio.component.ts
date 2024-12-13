import { Component, Input } from '@angular/core';
import { HostListener } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-card-biblio',
  templateUrl: './card-biblio.component.html',
  styleUrls: ['./card-biblio.component.scss'],
})
export class CardBiblioComponent {

  columnSize: number = 6;

  @Input() imageSrc: string = "";
  @Input() title: string = "";
  @Input() subtitle: string = "";
  
  cards = [
    {id: 8, imageSrc: './../../assets/img/main.png', title: 'Dolmen #343', subtitle: '50 Páginas'},
    {id: 1, imageSrc: './../../assets/img/Daredevil1.jpg', title: 'Daredevil Vol5 #16', subtitle: '30 Páginas'},
    {id: 2, imageSrc: './../../assets/img/Daredevil2.jpg', title: 'Daredevil Vol1 #28', subtitle: '36 Páginas' },
    {id: 3, imageSrc: './../../assets/img/Spiderman1.jpg', title: 'Amazing Fantasy #15', subtitle: '35 Páginas'},
    {id: 4, imageSrc: './../../assets/img/Ironman.jpg', title: 'Iron Man #300', subtitle: '30 Páginas'},
    {id: 5, imageSrc: './../../assets/img/BatmanAnnoUno.jpg', title: 'Batman Año Uno', subtitle: '186 Páginas'},
    {id: 6, imageSrc: './../../assets/img/HomunculusVol1.jpg', title: 'Homunculus Vol1', subtitle: '225 Páginas'},
    {id: 7, imageSrc: './../../assets/img/BeckVol1.jpg', title: 'Beck Vol1', subtitle: '245 Páginas'},
  ];
   constructor(private readonly navCtrl: NavController){
   }
  setColumnSize(width: number) {
    this.columnSize = width >= 768 ? 3 : 6;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    const target = event.target as Window;
    this.setColumnSize(target.innerWidth);
  }

  cardClick(id: number) {
    if(id === 8) {
      this.navCtrl.navigateForward('/leyendo');
    }
  }

}
