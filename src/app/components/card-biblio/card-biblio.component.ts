import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-biblio',
  templateUrl: './card-biblio.component.html',
  styleUrls: ['./card-biblio.component.scss'],
})
export class CardBiblioComponent {

  @Input() imageSrc: string = "";
  @Input() title: string = "";
  @Input() subtitle: string = "";
  
}
