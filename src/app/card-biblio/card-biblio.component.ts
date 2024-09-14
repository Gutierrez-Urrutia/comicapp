import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-biblio',
  templateUrl: './card-biblio.component.html',
  styleUrls: ['./card-biblio.component.scss'],
})
export class CardBiblioComponent  implements OnInit {

  @Input() imageSrc: string = "";
  @Input() title: string = "";
  @Input() subtitle: string = "";

  constructor() { }

  ngOnInit() {
    console.log('Card Iniciada');
  }
}
